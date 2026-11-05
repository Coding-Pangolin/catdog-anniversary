import { assetUrl } from './asset-url';
export type Photo = { id: string; src: string; thumbnail?: string; alt: string; caption: string; width: number; height: number; placeholder?: boolean };
export type Memory = { id: string; title: string; label: string; text: string; photo: Photo; placeholder?: boolean };
export type Trip = { id: string; title: string; label: string; subtitle: string; story: string; keepsake: string; photos: Photo[]; placeholder?: boolean };
const placeholderPhoto = (id: string, kind = 'together'): Photo => ({ id, src: assetUrl(`/assets/photo-${kind}.svg`), alt: '留给真实照片的位置，目前为手账占位插画', caption: '照片待补 · 这里会放你们的真实记录', width: 800, height: 640, placeholder: true });
export const siteConfig = { title: '猫狗的一周年', anniversary: null as string | null, timezone: 'Asia/Shanghai', coverPhoto: null as Photo | null, names: { cat: '小猫', dog: '小狗' }, music: assetUrl('/media/huai-nian-web.mp3') as string | null, video: assetUrl('/media/this-time-goodnight-v2.mp4') };
export const characters = [{ id:'cat',name:'小猫',image:assetUrl('/assets/phone_cat.webp'),person:null },{ id:'dog',name:'小狗',image:assetUrl('/assets/phone_dog.webp'),person:null },{ id:'panda',name:'胖达',image:assetUrl('/assets/panda.webp'),person:null },{ id:'pillowdog',name:'枕头狗',image:assetUrl('/assets/pillowdog.webp'),person:null }];
export const memories: Memory[] = [
 { id:'memory-01',title:'一声晚安，跨过距离',label:'异地日常 · 待补',text:'这里留给你们一次真实的晚安。可以写下那天聊了什么，或一句只有彼此才懂的话。',photo:placeholderPhoto('memory-photo-01','night'),placeholder:true },
 { id:'memory-02',title:'想把今天也分享给你',label:'生活碎片 · 待补',text:'这里留给一件迫不及待想分享的小事：一顿饭、一片云，或今天发生的趣事。具体故事等你来填写。',photo:placeholderPhoto('memory-photo-02','daily'),placeholder:true },
 { id:'memory-03',title:'见面前的小小期待',label:'相聚时刻 · 待补',text:'这里留给某一次真实见面的准备。可以放一张车票、一份小礼物，或出发前的消息。',photo:placeholderPhoto('memory-photo-03'),placeholder:true },
 { id:'memory-04',title:'只有我们懂的暗号',label:'共同的梗 · 待补',text:'这里留给你们常说的口头禅、昵称或一个共同的梗。现在还没有填入真实对话。',photo:placeholderPhoto('memory-photo-04','daily'),placeholder:true },
 { id:'memory-05',title:'有四位伙伴的日常',label:'毛绒伙伴 · 待补',text:'胖达和枕头狗也有自己的小故事。这里留给一张它们的照片，和与你们有关的真实片段。',photo:placeholderPhoto('memory-photo-05'),placeholder:true },
 { id:'memory-06',title:'一件一直记得的小事',label:'珍藏片段 · 待补',text:'这里留给一件看起来很小、却一直记得的事。不必是大场面，写下它为什么值得留下就好。',photo:placeholderPhoto('memory-photo-06','night'),placeholder:true },
];
export const trips: Trip[] = [
 { id:'trip-01',title:'第一段待补的旅程',label:'时间待补',subtitle:'留一页，给一起出发的那一天',story:'这里会放这次旅行最想记住的小片段：你们去了哪里、遇见了什么，以及为什么想把它留下。城市和日期尚未填写。',keepsake:'一张车票、一份食物，或那天的天气 · 待补',photos:[placeholderPhoto('trip01-photo01'),placeholderPhoto('trip01-photo02','daily'),placeholderPhoto('trip01-photo03','night')],placeholder:true },
 { id:'trip-02',title:'另一段待补的旅程',label:'时间待补',subtitle:'把路上的小事也装进来',story:'这一页预留给另一段真实旅程。照片按故事顺序摆放，之后可以填上你们自己的照片说明。',keepsake:'旅途中的纪念物 · 待补',photos:[placeholderPhoto('trip02-photo01','daily'),placeholderPhoto('trip02-photo02')],placeholder:true },
 { id:'trip-03',title:'还有一段，等你来写',label:'时间待补',subtitle:'每次同行，都值得单独留一页',story:'这里可以记录第三段旅程，也可以是曾经去过的同一座城市。内容会按你提供的顺序整理，不自动编造时间线。',keepsake:'一句只有你们懂的话 · 待补',photos:[placeholderPhoto('trip03-photo01','night'),placeholderPhoto('trip03-photo02')],placeholder:true },
];
export const letter = { title:'还有一些话，想慢慢说给你听', salutation:'亲爱的你：', paragraphs:['这里留给你亲手写的一周年信。现在这是一张等待落笔的信纸，还没有填入真实信件。','可以从这一年最想记住的片段写起：那些一起去过的地方、隔着屏幕分享的日常，还有某件一直放在心上的小事。','不必写得像一封标准情书。你平时会说的话、只有你们才懂的细节，就是这封信最特别的地方。'], signature:'署名待补', date:'落款日期待补', placeholder:true };
export const routeNodes = ['一段日常，等你来写','一份分享，等你来写','下一次见面，等你来写'];
export const chapters = ['拆开这一年','我们的一周年','回忆扭蛋机','我们的旅行护照','这次，当面说晚安','亲手包装一份礼物','把想念送到身边','还有一些话想说'];
