import { expect, it } from 'vitest';
import { travelPageRange } from './travel-pages';
it('八段回忆分三页，没有遗漏或重复', () => {
  const ids = Array.from({length:8},(_,i)=>i);
  const pages = [0,1,2].map(page=>{const r=travelPageRange(ids.length,page);return ids.slice(r.start,r.end);});
  expect(pages.map(page=>page.length)).toEqual([3,3,2]);
  expect(pages.flat()).toEqual(ids);
});
it('减少内容或使用旧页码时回到有效范围', () => {
  expect(travelPageRange(2,7)).toMatchObject({page:0,start:0,end:2,totalPages:1});
  expect(travelPageRange(8,-1)).toMatchObject({page:0,start:0,end:3});
  expect(travelPageRange(0,0)).toMatchObject({page:0,start:0,end:0,totalPages:1});
});
it('新增城市后，十二页记忆都能通过四页入口到达', () => {
  const items=Array.from({length:12},(_,index)=>index);
  expect([0,1,2,3].flatMap(page=>{const range=travelPageRange(items.length,page);return items.slice(range.start,range.end);})).toEqual(items);
  expect(travelPageRange(items.length,3)).toMatchObject({page:3,totalPages:4,start:9,end:12});
});
