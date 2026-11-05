export type Direction = 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight';
export type FocusBox = { left: number; top: number; width: number; height: number };
/** Pick a control in the requested direction, preferring the same row/column. */
export function nextFocusIndex(current: FocusBox, candidates: FocusBox[], direction: Direction): number {
 const cx=current.left+current.width/2, cy=current.top+current.height/2;
 let winner=-1, best=Infinity;
 candidates.forEach((box,index)=>{
  const dx=box.left+box.width/2-cx, dy=box.top+box.height/2-cy;
  const horizontal=direction==='ArrowLeft'||direction==='ArrowRight';
  const forward=direction==='ArrowLeft'?-dx:direction==='ArrowRight'?dx:direction==='ArrowUp'?-dy:dy;
  if(forward<=3)return;
  const lateral=Math.abs(horizontal?dy:dx);
  const score=forward+lateral*2.5;
  if(score<best){best=score;winner=index;}
 });
 return winner;
}
/** Break long paragraphs into readable projection pages without dropping text. */
export function paginateLetter(paragraphs: string[], budget=120): string[][] {
 const limit=Math.max(1,Math.floor(budget));
 const chunks=paragraphs.flatMap(paragraph=>{
  const chars=Array.from(paragraph);const result:string[]=[];
  for(let start=0;start<chars.length;start+=limit)result.push(chars.slice(start,start+limit).join(''));
  return result;
 });
 const pages:string[][]=[];let page:string[]=[];let length=0;
 chunks.forEach(chunk=>{const size=Array.from(chunk).length;if(page.length&&(length+size>limit||page.length>=3)){pages.push(page);page=[];length=0;}page.push(chunk);length+=size;});
 if(page.length)pages.push(page);
 return pages.length?pages:[[]];
}
export function moveRemoteFocus(direction:Direction): void {
 const dialogs=Array.from(document.querySelectorAll<HTMLDialogElement>('dialog[open]'));
 const scope:ParentNode=dialogs[dialogs.length-1]||document;
 const controls=Array.from(scope.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled])')).filter(el=>{
  const box=el.getBoundingClientRect();const style=getComputedStyle(el);
  return box.width>0&&box.height>0&&style.visibility!=='hidden'&&style.display!=='none'&&!el.closest('[inert]')&&!el.className.toString().includes('skipLink');
 });
 const active=document.activeElement as HTMLElement|null;
 if(!active||!controls.includes(active)){
  (scope.querySelector<HTMLElement>('[data-primary="true"]:not([disabled])')||controls[0])?.focus({preventScroll:true});return;
 }
 const index=nextFocusIndex(active.getBoundingClientRect(),controls.map(el=>el.getBoundingClientRect()),direction);
 if(index>=0){controls[index].focus({preventScroll:true});if(dialogs.length)controls[index].scrollIntoView({block:'nearest',inline:'nearest'});}
}
