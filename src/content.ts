import { assetUrl } from './asset-url';
import { travelPhotos, travelTrips } from './travel-data';
import { familyMembers } from './family-data';
import { familyPhotos } from './family-photos';
export type Photo = { id: string; src: string; thumbnail?: string; alt: string; caption: string; width: number; height: number; placeholder?: boolean };
export type Memory = { id: string; title: string; label: string; text: string; photo: Photo; placeholder?: boolean };
export type Trip = { id: string; title: string; label: string; subtitle: string; story: string; keepsake: string; photos: Photo[]; timeNote?: string; placeholder?: boolean };
export const siteConfig = { title: '猫狗的一周年', anniversary: '2025.11.10' as string | null, timezone: 'Asia/Shanghai', coverPhoto: travelPhotos['hangzhou-lakeside-01'] as Photo | null, names: { cat: '猫猫', dog: '狗狗' }, musicTitle: '几分之几', music: assetUrl('/media/ji-fen-zhi-ji-web.mp3') as string | null, video: assetUrl('/media/this-time-goodnight-v2.mp4') };
export const characters = [{ id:'cat',name:'猫猫',image:assetUrl('/assets/phone_cat.webp'),person:null },{ id:'dog',name:'狗狗',image:assetUrl('/assets/phone_dog.webp'),person:null },...familyMembers.map(member=>({id:member.id,name:member.name,image:member.photo.thumbnail||member.photo.src,person:null}))];
export const memories: Memory[] = [
 { id:'memory-01',title:'把杯子举向镜头',label:'杭州 · 一张小合照',text:'杯子靠近镜头，笑意留在照片里。除了远处的风景，也想把坐在一起的这些小片刻收好。',photo:travelPhotos['hangzhou-autumn-05'] },
 { id:'memory-02',title:'向夜晚挥挥手',label:'深圳 · 亮灯的夜晚',text:'灯亮起来以后，照片里多了一个挥手的动作。把这一瞬收进小小的扭蛋，下一次翻到，还能再笑一下。',photo:travelPhotos['shenzhen-05'] },
 { id:'memory-03',title:'两顶小能猫帽子',label:'南京 · 冬日小表情',text:'围巾还裹着，两顶小能猫帽子已经戴好。认真的合照要有，可可爱爱的这一张，也要留下。',photo:travelPhotos['nanjing-03'] },
 { id:'memory-04',title:'靠近镜头一点',label:'湖州&宁波 · 合照一枚',text:'这一张，没有把背景拍得很大，只把两个人放得很近。简单的小合照，也能成为一张很喜欢的回忆卡。',photo:travelPhotos['huzhou-ningbo-01'] },
 { id:'memory-05',title:'把快乐定格在半空',label:'玉溪 · 蓝天下的瞬间',text:'湖面和远山都很安静，镜头前的人却跳了起来。照片把动作停在半空，也把那份轻快一起留下。',photo:travelPhotos['yuxi-02'] },
 { id:'memory-06',title:'两杯咖啡，靠近的手',label:'昆明 · 小桌上的日常',text:'桌上有两杯咖啡，镜头里还有靠在一起的手。很小的一幅画面，刚好够装下一颗回忆。',photo:travelPhotos['kunming-03'] },
 { id:'memory-family-first',title:'并排坐好的两位家人',label:'我们的小小家 · 相伴',text:'黑白的胖达，和抱着独立小枕头的枕头狗。照片里，两位毛绒家人并排坐着，让普通的日常也多了一点柔软。',photo:familyPhotos[0] },
 { id:'memory-family-more',title:'小家又热闹了一点',label:'我们的小小家 · 团圆',text:'大黄狗喵喵，和架子上的腊肠狗布拉肠，也有了属于自己的位置。从猫猫和狗狗，到四位毛绒家人都在身边，我们的小家越来越热闹。',photo:familyPhotos[1] },
];
export const trips: Trip[] = travelTrips;
export const letter = {
 title:'还有一些话，想慢慢说给你听', salutation:'亲爱的猫猫：',
 paragraphs:[
  '在等飞机的时候写下这封信，一转眼已经一周年啦，和猫猫从友好会晤到亲密无间，不知不觉已经一起经历了这么多。',
  '狗坐的首都航空，只有窄窄的座位，随身行李也只能用小行李箱，不过其实狗狗一点也不觉得累，想到马上就能见到猫，就觉得很开心。但是又想到过去一年里，猫猫早就不知道坐了几次这些廉航来找我，每次都是红眼航班，回去的时候车也不好打，真的好辛苦，好想抱抱那时候的你，也想谢谢你，一次又一次地来见我。',
  '给猫猫准备礼物的时候，也像猫猫之前说的一样，很开心很期待猫猫看到礼物的时候的样子。这次周年礼物准备的是猫猫心心念念的投影仪还有专属于我们的网站，网站里的视频讲的是猫和狗的故事，都是猫猫绘制的主角哈哈哈，胖达和枕头狗也友情出演。投影仪也挑了好久选了这款，猫猫上班本来就辛苦，时不时还有些烦心事，下班后就应该好好放松，狗狗加班多，有时候不能陪着猫，希望投影仪和喵喵可以陪猫度过下班的闲暇时间，以后这个投影仪可以陪猫看好多好多电影，但第一次，我想我们一起用它看看这一年里属于我们的瞬间，我们去了好多地方，以后也会去更多的地方，都记录下来，存放到这个属于我们的网站。',
  '这一年里，我们从相识相恋到相距千里，一起经历了那么多喜怒哀乐，异地需要两个人一起努力，我们都在为了对方付出着。看到猫猫被上班的各种烦心事折磨，狗狗真的很心疼，狗狗不需要猫猫赚很多钱，只希望猫能开开心心快快乐乐的，狗明年就会回去，到时猫猫也找一个轻松的适合自己的工作，我们一起经营好感情和生活，一起走后面的好多好多年',
 ],
 signature:'想你的狗', date:'写在一周年', placeholder:false,
};
export const routeNodes = ['相伴','靠近','团圆'];
export const chapters = ['拆开这一年','我们的一周年','回忆扭蛋机','我们的旅行护照','这次，当面说晚安','亲手包装一份礼物','把想念送到身边','还有一些话想说'];
