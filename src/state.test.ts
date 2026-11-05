import { describe,it,expect } from 'vitest';
import { freshProgress,restoreProgress,nextMemory,saveProgress } from './state';
import { memories } from './content';
describe('回忆抽取',()=>{
 it('第一张固定，一轮不重复，抽完停止',()=>{const drawn:string[]=[];for(let i=0;i<memories.length;i++){const next=nextMemory(drawn,()=>0.7);expect(next).toBeDefined();expect(drawn).not.toContain(next);drawn.push(next!);}expect(drawn[0]).toBe(memories[0].id);expect(nextMemory(drawn)).toBeUndefined();});
 it('重新打乱时可从头抽取',()=>expect(nextMemory([])).toBe(memories[0].id));
});
describe('本机状态',()=>{
 it('刷新保留章节、收藏和礼盒',()=>{const p={...freshProgress(),chapter:7,drawn:[memories[0].id],gift:{paper:2,ribbon:1,seal:2},route:3};expect(restoreProgress(JSON.stringify(p))).toEqual(p);});
 it('坏数据和未知版本回到默认，过滤过期ID与重复项',()=>{expect(restoreProgress('broken')).toEqual(freshProgress());expect(restoreProgress('{"version":2}')).toEqual(freshProgress());const p=restoreProgress(JSON.stringify({...freshProgress(),chapter:99,drawn:['gone','memory-01','memory-01'],gift:{paper:-1,ribbon:2,seal:7}}));expect(p.chapter).toBe(0);expect(p.drawn).toEqual(['memory-01']);expect(p.gift).toEqual({paper:0,ribbon:2,seal:0});});
 it('存储不可用时不抛错',()=>expect(()=>saveProgress(freshProgress())).not.toThrow());
 it('重新开始返回完整默认状态',()=>expect(freshProgress()).toMatchObject({chapter:0,drawn:[],seen:[],visited:[],route:0,gift:{paper:0,ribbon:0,seal:0}}));
});
