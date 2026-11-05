import { expect, it } from 'vitest';
import { characters, memories } from './content';
import { familyMembers } from './family-data';
import { familyPhotos } from './family-photos';
import { freshProgress, nextMemory, restoreProgress } from './state';

it('两位主角与四位家人都有独立身份，公开文案不作物品分类', () => {
  expect(characters).toHaveLength(6);
  expect(new Set(characters.map(character=>character.id)).size).toBe(6);
  expect(familyMembers.map(member=>member.name)).toEqual(['胖达','枕头狗','喵喵','布拉肠']);
  for(const member of familyMembers) expect(member.kind+member.description).not.toContain('玩偶');
  expect(familyMembers.find(member=>member.id==='panda')?.detailPhoto.id).toBe('family-panda-journal');
});

it('成员头像引用真实照片，显示区域没有超出原图', () => {
  for (const member of familyMembers) {
    expect(familyPhotos.some(photo=>photo.id===member.photo.id)).toBe(true);
    const [x,y,size]=member.portrait;
    expect(x).toBeGreaterThanOrEqual(0);
    expect(y).toBeGreaterThanOrEqual(0);
    expect(x+size).toBeLessThanOrEqual(member.photo.width);
    expect(y+size).toBeLessThanOrEqual(member.photo.height);
  }
});

it('旧六张卡的抽取进度仍保留，新增家庭卡可继续抽且不重复', () => {
  const previous=memories.filter(memory=>!memory.id.startsWith('memory-family')).map(memory=>memory.id);
  const restored=restoreProgress(JSON.stringify({...freshProgress(),drawn:previous,seen:previous,gift:{paper:2,ribbon:1,seal:2},chapter:6,route:3}));
  expect(restored.drawn).toEqual(previous);
  expect(restored.gift).toEqual({paper:2,ribbon:1,seal:2});
  expect(restored.route).toBe(3);
  const drawn=[...restored.drawn];
  for(let i=0;i<2;i++){const id=nextMemory(drawn,()=>0.2)!;expect(id).toMatch(/^memory-family/);expect(drawn).not.toContain(id);drawn.push(id);}
  expect(drawn).toHaveLength(8);
  expect(nextMemory(drawn)).toBeUndefined();
});
