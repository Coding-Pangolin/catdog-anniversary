import { familyPhotos } from './family-photos';

export const familyMembers = [
  { id:'panda', name:'胖达', kind:'黑白狗玩偶', photo:familyPhotos[0], portrait:[50,0,900], color:'#a8b5a5', description:'黑白毛绒的小狗，戴着小帽子。手账里还认真留下了“胖达加入”的一页。', keepsake:'把相伴写进手账，也放进这一年。' },
  { id:'pillowdog', name:'枕头狗', kind:'抱着小枕头的狗玩偶', photo:familyPhotos[0], portrait:[825,360,640], color:'#d6adb0', description:'棕色的小狗，怀里抱着独立的小枕头。照片里，它和胖达并排坐得好好的。', keepsake:'小枕头抱在怀里，柔软也留在身边。' },
  { id:'miaomiao', name:'喵喵', kind:'大黄狗玩偶', photo:familyPhotos[2], portrait:[410,360,570], color:'#d6bd86', description:'名字叫喵喵，是一只大大的黄狗玩偶。抱在怀里，镜子里就多了一个毛绒绒的身影。', keepsake:'大大一只，给小家多添一份柔软。' },
  { id:'bulachang', name:'布拉肠', kind:'腊肠狗玩偶', photo:familyPhotos[1], portrait:[75,460,390], color:'#a48d78', description:'长长身子的腊肠狗，在架子上也有属于自己的位置。和喵喵出现在同一个画面里，小家更热闹了。', keepsake:'把长长的身影，也认真收进大家庭。' },
] as const;
export type FamilyMember = typeof familyMembers[number];
export const familyNames = familyMembers.map(member=>member.name).join('、');
