import { assetUrl } from './asset-url';
import { travelPhotos, travelTrips } from './travel-data';
export type Photo = { id: string; src: string; thumbnail?: string; alt: string; caption: string; width: number; height: number; placeholder?: boolean };
export type Memory = { id: string; title: string; label: string; text: string; photo: Photo; placeholder?: boolean };
export type Trip = { id: string; title: string; label: string; subtitle: string; story: string; keepsake: string; photos: Photo[]; timeNote?: string; placeholder?: boolean };
export const siteConfig = { title: '猫狗的一周年', anniversary: null as string | null, timezone: 'Asia/Shanghai', coverPhoto: travelPhotos['hangzhou-lakeside-01'] as Photo | null, names: { cat: '小猫', dog: '小狗' }, music: assetUrl('/media/huai-nian-web.mp3') as string | null, video: assetUrl('/media/this-time-goodnight-v2.mp4') };
export const characters = [{ id:'cat',name:'小猫',image:assetUrl('/assets/phone_cat.webp'),person:null },{ id:'dog',name:'小狗',image:assetUrl('/assets/phone_dog.webp'),person:null },{ id:'panda',name:'胖达',image:assetUrl('/assets/panda.webp'),person:null },{ id:'pillowdog',name:'枕头狗',image:assetUrl('/assets/pillowdog.webp'),person:null }];
export const memories: Memory[] = [
 { id:'memory-01',title:'把杯子举向镜头',label:'杭州 · 一张小合照',text:'杯子靠近镜头，笑意留在照片里。除了远处的风景，也想把坐在一起的这些小片刻收好。',photo:travelPhotos['hangzhou-autumn-05'] },
 { id:'memory-02',title:'向夜晚挥挥手',label:'深圳 · 亮灯的夜晚',text:'灯亮起来以后，照片里多了一个挥手的动作。把这一瞬收进小小的扭蛋，下一次翻到，还能再笑一下。',photo:travelPhotos['shenzhen-05'] },
 { id:'memory-03',title:'两顶小能猫帽子',label:'南京 · 冬日小表情',text:'围巾还裹着，两顶小能猫帽子已经戴好。认真的合照要有，可可爱爱的这一张，也要留下。',photo:travelPhotos['nanjing-03'] },
 { id:'memory-04',title:'靠近镜头一点',label:'湖州&宁波 · 合照一枚',text:'这一张，没有把背景拍得很大，只把两个人放得很近。简单的小合照，也能成为一张很喜欢的回忆卡。',photo:travelPhotos['huzhou-ningbo-01'] },
 { id:'memory-05',title:'把快乐定格在半空',label:'玉溪 · 蓝天下的瞬间',text:'湖面和远山都很安静，镜头前的人却跳了起来。照片把动作停在半空，也把那份轻快一起留下。',photo:travelPhotos['yuxi-02'] },
 { id:'memory-06',title:'两杯咖啡，靠近的手',label:'昆明 · 小桌上的日常',text:'桌上有两杯咖啡，镜头里还有靠在一起的手。很小的一幅画面，刚好够装下一颗回忆。',photo:travelPhotos['kunming-03'] },
];
export const trips: Trip[] = travelTrips;
export const letter = { title:'还有一些话，想慢慢说给你听', salutation:'亲爱的你：', paragraphs:['这里留给你亲手写的一周年信。现在这是一张等待落笔的信纸，还没有填入真实信件。','可以从这一年最想记住的片段写起：那些一起去过的地方、隔着屏幕分享的日常，还有某件一直放在心上的小事。','不必写得像一封标准情书。你平时会说的话、只有你们才懂的细节，就是这封信最特别的地方。'], signature:'署名待补', date:'落款日期待补', placeholder:true };
export const routeNodes = ['把沿途的风景装好','把小小的日常收好','把这一年送到你身边'];
export const chapters = ['拆开这一年','我们的一周年','回忆扭蛋机','我们的旅行护照','这次，当面说晚安','亲手包装一份礼物','把想念送到身边','还有一些话想说'];
