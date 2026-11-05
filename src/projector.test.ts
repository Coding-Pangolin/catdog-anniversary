import { describe,it,expect } from 'vitest';
import { nextFocusIndex,paginateLetter } from './projector';
const box=(left:number,top:number)=>({left,top,width:100,height:50});
describe('遥控器方向键',()=>{
 it('优先同排控制，方向边缘保持原位',()=>{const boxes=[box(0,0),box(120,0),box(0,80),box(120,80)];expect(nextFocusIndex(boxes[0],boxes,'ArrowRight')).toBe(1);expect(nextFocusIndex(boxes[0],boxes,'ArrowDown')).toBe(2);expect(nextFocusIndex(boxes[0],boxes,'ArrowLeft')).toBe(-1);expect(nextFocusIndex(boxes[3],boxes,'ArrowUp')).toBe(1);});
 it('能选择滚动区域下方的控件',()=>expect(nextFocusIndex(box(0,0),[box(0,1000)],'ArrowDown')).toBe(0));
});
describe('投影信件分页',()=>{
 it('长段落分页且不丢文字，保留表情符号',()=>{const paragraphs=['第一段。'.repeat(80)+'🐱','第二段。'.repeat(20)];const pages=paginateLetter(paragraphs);expect(pages.length).toBeGreaterThan(1);expect(pages.flat().join('')).toBe(paragraphs.join(''));pages.forEach(page=>expect(Array.from(page.join('')).length).toBeLessThanOrEqual(120));});
 it('许多短段落不会挤在同一页',()=>paginateLetter(Array(15).fill('短句')).forEach(page=>expect(page.length).toBeLessThanOrEqual(3)));
 it('空信仍有一页，短段落合并',()=>{expect(paginateLetter([])).toEqual([[]]);expect(paginateLetter(['你好','一周年快乐'])).toEqual([['你好','一周年快乐']]);});
});
