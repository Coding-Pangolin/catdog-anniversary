import { familyPhotos } from './family-photos';

export const familyMembers = [
  { id:'panda', name:'胖达', kind:'写进手账的相伴', photo:familyPhotos[0], detailPhoto:familyPhotos[3], portrait:[50,0,900], color:'#a8b5a5', description:'手账里认真留下了“胖达加入”的一页。小小的相伴，也想好好记住。', keepsake:'把相伴写进手账，也放进这一年。' },
  { id:'pillowdog', name:'枕头狗', kind:'把柔软抱在怀里', photo:familyPhotos[0], detailPhoto:familyPhotos[0], portrait:[825,360,640], color:'#d6adb0', description:'小枕头抱在怀里，和胖达并排坐好。小家里，又多了软乎乎的一角。', keepsake:'小枕头抱在怀里，柔软也留在身边。' },
  { id:'miaomiao', name:'喵喵', kind:'大大的温暖拥抱', photo:familyPhotos[2], detailPhoto:familyPhotos[2], portrait:[410,360,570], color:'#d6bd86', description:'抱着大大的喵喵，镜子里也多了一份暖意。小家里，刚好装得下这份大大的陪伴。', keepsake:'大大一只，给小家多添一份柔软。' },
  { id:'bulachang', name:'布拉肠', kind:'长长的陪伴', photo:familyPhotos[1], detailPhoto:familyPhotos[1], portrait:[75,460,390], color:'#a48d78', description:'在架子上，也有布拉肠自己的位置。和喵喵同框的时候，小家又热闹了一点。', keepsake:'把长长的身影，也认真收进大家庭。' },
] as const;
export type FamilyMember = typeof familyMembers[number];
export const familyNames = familyMembers.map(member=>member.name).join('、');
