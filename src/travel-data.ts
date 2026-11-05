import type { Photo, Trip } from './content';
import { assetUrl } from './asset-url';

const rawPhotos = {
  "hangzhou-autumn-01": {
    "id": "hangzhou-autumn-01",
    "src": "/photos/hangzhou-autumn-01.webp",
    "thumbnail": "/photos/hangzhou-autumn-01-thumb.webp",
    "width": 1600,
    "height": 1067,
    "caption": "镜子里的我们",
    "alt": "杭州 · 镜子里的我们"
  },
  "hangzhou-autumn-02": {
    "id": "hangzhou-autumn-02",
    "src": "/photos/hangzhou-autumn-02.webp",
    "thumbnail": "/photos/hangzhou-autumn-02-thumb.webp",
    "width": 1300,
    "height": 1080,
    "caption": "红色楼梯旁的我",
    "alt": "杭州 · 红色楼梯旁的我"
  },
  "hangzhou-autumn-03": {
    "id": "hangzhou-autumn-03",
    "src": "/photos/hangzhou-autumn-03.webp",
    "thumbnail": "/photos/hangzhou-autumn-03-thumb.webp",
    "width": 1067,
    "height": 1600,
    "caption": "同一处楼梯，换一个人入镜",
    "alt": "杭州 · 同一处楼梯，换一个人入镜"
  },
  "hangzhou-autumn-04": {
    "id": "hangzhou-autumn-04",
    "src": "/photos/hangzhou-autumn-04.webp",
    "thumbnail": "/photos/hangzhou-autumn-04-thumb.webp",
    "width": 1600,
    "height": 1067,
    "caption": "凑近镜头的小表情",
    "alt": "杭州 · 凑近镜头的小表情"
  },
  "hangzhou-autumn-05": {
    "id": "hangzhou-autumn-05",
    "src": "/photos/hangzhou-autumn-05.webp",
    "thumbnail": "/photos/hangzhou-autumn-05-thumb.webp",
    "width": 1600,
    "height": 1067,
    "caption": "把杯子举向镜头",
    "alt": "杭州 · 把杯子举向镜头"
  },
  "shenzhen-01": {
    "id": "shenzhen-01",
    "src": "/photos/shenzhen-01.webp",
    "thumbnail": "/photos/shenzhen-01-thumb.webp",
    "width": 1600,
    "height": 1067,
    "caption": "栏杆旁，望向水面",
    "alt": "深圳 · 栏杆旁，望向水面"
  },
  "shenzhen-02": {
    "id": "shenzhen-02",
    "src": "/photos/shenzhen-02.webp",
    "thumbnail": "/photos/shenzhen-02-thumb.webp",
    "width": 1067,
    "height": 1600,
    "caption": "窗边低头的片刻",
    "alt": "深圳 · 窗边低头的片刻"
  },
  "shenzhen-03": {
    "id": "shenzhen-03",
    "src": "/photos/shenzhen-03.webp",
    "thumbnail": "/photos/shenzhen-03-thumb.webp",
    "width": 1600,
    "height": 1067,
    "caption": "坐在窗边，光落下来",
    "alt": "深圳 · 坐在窗边，光落下来"
  },
  "shenzhen-04": {
    "id": "shenzhen-04",
    "src": "/photos/shenzhen-04.webp",
    "thumbnail": "/photos/shenzhen-04-thumb.webp",
    "width": 1067,
    "height": 1600,
    "caption": "夜色里亮起的圆顶",
    "alt": "深圳 · 夜色里亮起的圆顶"
  },
  "shenzhen-05": {
    "id": "shenzhen-05",
    "src": "/photos/shenzhen-05.webp",
    "thumbnail": "/photos/shenzhen-05-thumb.webp",
    "width": 1600,
    "height": 1067,
    "caption": "向亮灯的夜晚挥挥手",
    "alt": "深圳 · 向亮灯的夜晚挥挥手"
  },
  "shenzhen-06": {
    "id": "shenzhen-06",
    "src": "/photos/shenzhen-06.webp",
    "thumbnail": "/photos/shenzhen-06-thumb.webp",
    "width": 1200,
    "height": 1600,
    "caption": "绿荫下，给我们留一张合照",
    "alt": "深圳 · 绿荫下，给我们留一张合照"
  },
  "shenzhen-07": {
    "id": "shenzhen-07",
    "src": "/photos/shenzhen-07.webp",
    "thumbnail": "/photos/shenzhen-07-thumb.webp",
    "width": 1200,
    "height": 1600,
    "caption": "在明亮的室内，一起看镜头",
    "alt": "深圳 · 在明亮的室内，一起看镜头"
  },
  "hangzhou-lakeside-01": {
    "id": "hangzhou-lakeside-01",
    "src": "/photos/hangzhou-lakeside-01.webp",
    "thumbnail": "/photos/hangzhou-lakeside-01-thumb.webp",
    "width": 1081,
    "height": 1080,
    "caption": "湖水与远山前，站在一起",
    "alt": "杭州 · 湖水与远山前，站在一起"
  },
  "hangzhou-lakeside-02": {
    "id": "hangzhou-lakeside-02",
    "src": "/photos/hangzhou-lakeside-02.webp",
    "thumbnail": "/photos/hangzhou-lakeside-02-thumb.webp",
    "width": 1080,
    "height": 1080,
    "caption": "把杯子也放进合照里",
    "alt": "杭州 · 把杯子也放进合照里"
  },
  "hangzhou-winter-01": {
    "id": "hangzhou-winter-01",
    "src": "/photos/hangzhou-winter-01.webp",
    "thumbnail": "/photos/hangzhou-winter-01-thumb.webp",
    "width": 1308,
    "height": 1080,
    "caption": "树下的长椅，刚好坐下两个人",
    "alt": "杭州 · 树下的长椅，刚好坐下两个人"
  },
  "hangzhou-winter-02": {
    "id": "hangzhou-winter-02",
    "src": "/photos/hangzhou-winter-02.webp",
    "thumbnail": "/photos/hangzhou-winter-02-thumb.webp",
    "width": 1067,
    "height": 1600,
    "caption": "金黄色的树叶旁",
    "alt": "杭州 · 金黄色的树叶旁"
  },
  "hangzhou-winter-03": {
    "id": "hangzhou-winter-03",
    "src": "/photos/hangzhou-winter-03.webp",
    "thumbnail": "/photos/hangzhou-winter-03-thumb.webp",
    "width": 1600,
    "height": 1067,
    "caption": "并肩看向远处的城市",
    "alt": "杭州 · 并肩看向远处的城市"
  },
  "hangzhou-winter-04": {
    "id": "hangzhou-winter-04",
    "src": "/photos/hangzhou-winter-04.webp",
    "thumbnail": "/photos/hangzhou-winter-04-thumb.webp",
    "width": 1600,
    "height": 1068,
    "caption": "城市天际线前，转身拍一张",
    "alt": "杭州 · 城市天际线前，转身拍一张"
  },
  "hangzhou-winter-05": {
    "id": "hangzhou-winter-05",
    "src": "/photos/hangzhou-winter-05.webp",
    "thumbnail": "/photos/hangzhou-winter-05-thumb.webp",
    "width": 1200,
    "height": 1600,
    "caption": "穿着外套的镜子合照",
    "alt": "杭州 · 穿着外套的镜子合照"
  },
  "nanjing-01": {
    "id": "nanjing-01",
    "src": "/photos/nanjing-01.webp",
    "thumbnail": "/photos/nanjing-01-thumb.webp",
    "width": 1440,
    "height": 1080,
    "caption": "红墙前的冬日合照",
    "alt": "南京 · 红墙前的冬日合照"
  },
  "nanjing-02": {
    "id": "nanjing-02",
    "src": "/photos/nanjing-02.webp",
    "thumbnail": "/photos/nanjing-02-thumb.webp",
    "width": 1080,
    "height": 1440,
    "caption": "红围巾和黄围巾，靠近一点",
    "alt": "南京 · 红围巾和黄围巾，靠近一点"
  },
  "nanjing-03": {
    "id": "nanjing-03",
    "src": "/photos/nanjing-03.webp",
    "thumbnail": "/photos/nanjing-03-thumb.webp",
    "width": 1080,
    "height": 1440,
    "caption": "戴上小能猫帽子，再拍一张",
    "alt": "南京 · 戴上小能猫帽子，再拍一张"
  },
  "nanjing-04": {
    "id": "nanjing-04",
    "src": "/photos/nanjing-04.webp",
    "thumbnail": "/photos/nanjing-04-thumb.webp",
    "width": 1080,
    "height": 1440,
    "caption": "夜里，两杯饮品与一朵花",
    "alt": "南京 · 夜里，两杯饮品与一朵花"
  },
  "nanjing-05": {
    "id": "nanjing-05",
    "src": "/photos/nanjing-05.webp",
    "thumbnail": "/photos/nanjing-05-thumb.webp",
    "width": 1200,
    "height": 1600,
    "caption": "台阶上，靠在一起看镜头",
    "alt": "南京 · 台阶上，靠在一起看镜头"
  },
  "nanjing-06": {
    "id": "nanjing-06",
    "src": "/photos/nanjing-06.webp",
    "thumbnail": "/photos/nanjing-06-thumb.webp",
    "width": 1200,
    "height": 1600,
    "caption": "红墙和树枝前，各留一张",
    "alt": "南京 · 红墙和树枝前，各留一张"
  },
  "nanjing-07": {
    "id": "nanjing-07",
    "src": "/photos/nanjing-07.webp",
    "thumbnail": "/photos/nanjing-07-thumb.webp",
    "width": 1505,
    "height": 1600,
    "caption": "把小能猫帽子的合照印出来",
    "alt": "南京 · 把小能猫帽子的合照印出来"
  },
  "guangzhou-01": {
    "id": "guangzhou-01",
    "src": "/photos/guangzhou-01.webp",
    "thumbnail": "/photos/guangzhou-01-thumb.webp",
    "width": 1600,
    "height": 1201,
    "caption": "红色装置前，坐在一起",
    "alt": "广州 · 红色装置前，坐在一起"
  },
  "guangzhou-02": {
    "id": "guangzhou-02",
    "src": "/photos/guangzhou-02.webp",
    "thumbnail": "/photos/guangzhou-02-thumb.webp",
    "width": 1200,
    "height": 1600,
    "caption": "靠在肩上的片刻",
    "alt": "广州 · 靠在肩上的片刻"
  },
  "guangzhou-03": {
    "id": "guangzhou-03",
    "src": "/photos/guangzhou-03.webp",
    "thumbnail": "/photos/guangzhou-03-thumb.webp",
    "width": 1033,
    "height": 1600,
    "caption": "亮灯的夜色，各留一张",
    "alt": "广州 · 亮灯的夜色，各留一张"
  },
  "changsha-01": {
    "id": "changsha-01",
    "src": "/photos/changsha-01.webp",
    "thumbnail": "/photos/changsha-01-thumb.webp",
    "width": 1080,
    "height": 1440,
    "caption": "绿荫下，站近一点",
    "alt": "长沙 · 绿荫下，站近一点"
  },
  "changsha-02": {
    "id": "changsha-02",
    "src": "/photos/changsha-02.webp",
    "thumbnail": "/photos/changsha-02-thumb.webp",
    "width": 1067,
    "height": 1600,
    "caption": "橙色窗边，坐一会儿",
    "alt": "长沙 · 橙色窗边，坐一会儿"
  },
  "changsha-03": {
    "id": "changsha-03",
    "src": "/photos/changsha-03.webp",
    "thumbnail": "/photos/changsha-03-thumb.webp",
    "width": 1080,
    "height": 1440,
    "caption": "镜子前，凑在同一个画面里",
    "alt": "长沙 · 镜子前，凑在同一个画面里"
  },
  "changsha-04": {
    "id": "changsha-04",
    "src": "/photos/changsha-04.webp",
    "thumbnail": "/photos/changsha-04-thumb.webp",
    "width": 1080,
    "height": 1438,
    "caption": "亭檐和树影前的合照",
    "alt": "长沙 · 亭檐和树影前的合照"
  },
  "taizhou-01": {
    "id": "taizhou-01",
    "src": "/photos/taizhou-01.webp",
    "thumbnail": "/photos/taizhou-01-thumb.webp",
    "width": 1200,
    "height": 1600,
    "caption": "石壁前，靠近镜头",
    "alt": "台州 · 石壁前，靠近镜头"
  },
  "taizhou-02": {
    "id": "taizhou-02",
    "src": "/photos/taizhou-02.webp",
    "thumbnail": "/photos/taizhou-02-thumb.webp",
    "width": 1198,
    "height": 1600,
    "caption": "同一片蓝色夜幕，各留一张",
    "alt": "台州 · 同一片蓝色夜幕，各留一张"
  },
  "taizhou-03": {
    "id": "taizhou-03",
    "src": "/photos/taizhou-03.webp",
    "thumbnail": "/photos/taizhou-03-thumb.webp",
    "width": 1200,
    "height": 1600,
    "caption": "天空下，一起看向镜头",
    "alt": "台州 · 天空下，一起看向镜头"
  },
  "taizhou-04": {
    "id": "taizhou-04",
    "src": "/photos/taizhou-04.webp",
    "thumbnail": "/photos/taizhou-04-thumb.webp",
    "width": 1600,
    "height": 1068,
    "caption": "亮灯的夜里，比一个小手势",
    "alt": "台州 · 亮灯的夜里，比一个小手势"
  },
  "huzhou-ningbo-01": {
    "id": "huzhou-ningbo-01",
    "src": "/photos/huzhou-ningbo-01.webp",
    "thumbnail": "/photos/huzhou-ningbo-01-thumb.webp",
    "width": 1200,
    "height": 1600,
    "caption": "靠近镜头的合照",
    "alt": "湖州&宁波 · 靠近镜头的合照"
  },
  "huzhou-ningbo-02": {
    "id": "huzhou-ningbo-02",
    "src": "/photos/huzhou-ningbo-02.webp",
    "thumbnail": "/photos/huzhou-ningbo-02-thumb.webp",
    "width": 1068,
    "height": 1600,
    "caption": "水边，裙摆与晚霞",
    "alt": "湖州&宁波 · 水边，裙摆与晚霞"
  },
  "huzhou-ningbo-03": {
    "id": "huzhou-ningbo-03",
    "src": "/photos/huzhou-ningbo-03.webp",
    "thumbnail": "/photos/huzhou-ningbo-03-thumb.webp",
    "width": 1600,
    "height": 1068,
    "caption": "同一片水面旁",
    "alt": "湖州&宁波 · 同一片水面旁"
  },
  "huzhou-ningbo-04": {
    "id": "huzhou-ningbo-04",
    "src": "/photos/huzhou-ningbo-04.webp",
    "thumbnail": "/photos/huzhou-ningbo-04-thumb.webp",
    "width": 1047,
    "height": 1600,
    "caption": "草地、树影和远处的水",
    "alt": "湖州&宁波 · 草地、树影和远处的水"
  },
  "huzhou-ningbo-05": {
    "id": "huzhou-ningbo-05",
    "src": "/photos/huzhou-ningbo-05.webp",
    "thumbnail": "/photos/huzhou-ningbo-05-thumb.webp",
    "width": 1068,
    "height": 1600,
    "caption": "绿荫下的石阶",
    "alt": "湖州&宁波 · 绿荫下的石阶"
  },
  "huzhou-ningbo-06": {
    "id": "huzhou-ningbo-06",
    "src": "/photos/huzhou-ningbo-06.webp",
    "thumbnail": "/photos/huzhou-ningbo-06-thumb.webp",
    "width": 1200,
    "height": 1600,
    "caption": "水边的台阶，坐在一起",
    "alt": "湖州&宁波 · 水边的台阶，坐在一起"
  },
  "huzhou-ningbo-07": {
    "id": "huzhou-ningbo-07",
    "src": "/photos/huzhou-ningbo-07.webp",
    "thumbnail": "/photos/huzhou-ningbo-07-thumb.webp",
    "width": 1200,
    "height": 1600,
    "caption": "绿叶围着的一小片光",
    "alt": "湖州&宁波 · 绿叶围着的一小片光"
  },
  "suzhou-01": {
    "id": "suzhou-01",
    "src": "/photos/suzhou-01.webp",
    "thumbnail": "/photos/suzhou-01-thumb.webp",
    "width": 1068,
    "height": 1600,
    "caption": "亮灯的水边，站在一起",
    "alt": "苏州 · 亮灯的水边，站在一起"
  },
  "suzhou-02": {
    "id": "suzhou-02",
    "src": "/photos/suzhou-02.webp",
    "thumbnail": "/photos/suzhou-02-thumb.webp",
    "width": 1068,
    "height": 1600,
    "caption": "橙色花朵和老墙旁",
    "alt": "苏州 · 橙色花朵和老墙旁"
  },
  "suzhou-03": {
    "id": "suzhou-03",
    "src": "/photos/suzhou-03.webp",
    "thumbnail": "/photos/suzhou-03-thumb.webp",
    "width": 1068,
    "height": 1600,
    "caption": "和一只大猫同框",
    "alt": "苏州 · 和一只大猫同框"
  },
  "suzhou-04": {
    "id": "suzhou-04",
    "src": "/photos/suzhou-04.webp",
    "thumbnail": "/photos/suzhou-04-thumb.webp",
    "width": 1600,
    "height": 1068,
    "caption": "再和大狗留一张照片",
    "alt": "苏州 · 再和大狗留一张照片"
  },
  "yuxi-01": {
    "id": "yuxi-01",
    "src": "/photos/yuxi-01.webp",
    "thumbnail": "/photos/yuxi-01-thumb.webp",
    "width": 1600,
    "height": 1068,
    "caption": "坐在石头上，看湖水与远山",
    "alt": "玉溪 · 坐在石头上，看湖水与远山"
  },
  "yuxi-02": {
    "id": "yuxi-02",
    "src": "/photos/yuxi-02.webp",
    "thumbnail": "/photos/yuxi-02-thumb.webp",
    "width": 1600,
    "height": 1068,
    "caption": "对着蓝天，一跃而起",
    "alt": "玉溪 · 对着蓝天，一跃而起"
  },
  "yuxi-03": {
    "id": "yuxi-03",
    "src": "/photos/yuxi-03.webp",
    "thumbnail": "/photos/yuxi-03-thumb.webp",
    "width": 1600,
    "height": 1068,
    "caption": "傍晚的水边，光慢慢变柔",
    "alt": "玉溪 · 傍晚的水边，光慢慢变柔"
  },
  "yuxi-04": {
    "id": "yuxi-04",
    "src": "/photos/yuxi-04.webp",
    "thumbnail": "/photos/yuxi-04-thumb.webp",
    "width": 1600,
    "height": 1068,
    "caption": "回头时，身后是山与水",
    "alt": "玉溪 · 回头时，身后是山与水"
  },
  "yuxi-05": {
    "id": "yuxi-05",
    "src": "/photos/yuxi-05.webp",
    "thumbnail": "/photos/yuxi-05-thumb.webp",
    "width": 1600,
    "height": 897,
    "caption": "湖面很宽，照片里刚好有我们",
    "alt": "玉溪 · 湖面很宽，照片里刚好有我们"
  },
  "yuxi-06": {
    "id": "yuxi-06",
    "src": "/photos/yuxi-06.webp",
    "thumbnail": "/photos/yuxi-06-thumb.webp",
    "width": 1600,
    "height": 1068,
    "caption": "并排坐下，身后是山与水",
    "alt": "玉溪 · 并排坐下，身后是山与水"
  },
  "kunming-01": {
    "id": "kunming-01",
    "src": "/photos/kunming-01.webp",
    "thumbnail": "/photos/kunming-01-thumb.webp",
    "width": 1200,
    "height": 1600,
    "caption": "花束旁，镜子里的合照",
    "alt": "昆明 · 花束旁，镜子里的合照"
  },
  "kunming-02": {
    "id": "kunming-02",
    "src": "/photos/kunming-02.webp",
    "thumbnail": "/photos/kunming-02-thumb.webp",
    "width": 1200,
    "height": 1600,
    "caption": "在菌菇摊位前停一停",
    "alt": "昆明 · 在菌菇摊位前停一停"
  },
  "kunming-03": {
    "id": "kunming-03",
    "src": "/photos/kunming-03.webp",
    "thumbnail": "/photos/kunming-03-thumb.webp",
    "width": 1200,
    "height": 1600,
    "caption": "两杯咖啡，和靠在一起的手",
    "alt": "昆明 · 两杯咖啡，和靠在一起的手"
  },
  "kunming-04": {
    "id": "kunming-04",
    "src": "/photos/kunming-04.webp",
    "thumbnail": "/photos/kunming-04-thumb.webp",
    "width": 1200,
    "height": 1600,
    "caption": "小桌旁的一张照片",
    "alt": "昆明 · 小桌旁的一张照片"
  },
  "kunming-05": {
    "id": "kunming-05",
    "src": "/photos/kunming-05.webp",
    "thumbnail": "/photos/kunming-05-thumb.webp",
    "width": 1200,
    "height": 1600,
    "caption": "把拍立得一张张摊开",
    "alt": "昆明 · 把拍立得一张张摊开"
  },
  "kunming-06": {
    "id": "kunming-06",
    "src": "/photos/kunming-06.webp",
    "thumbnail": "/photos/kunming-06-thumb.webp",
    "width": 1200,
    "height": 1600,
    "caption": "小店的镜子里，又一张合照",
    "alt": "昆明 · 小店的镜子里，又一张合照"
  },
  "kunming-07": {
    "id": "kunming-07",
    "src": "/photos/kunming-07.webp",
    "thumbnail": "/photos/kunming-07-thumb.webp",
    "width": 1200,
    "height": 1600,
    "caption": "蓝天下，阳光落在脸上",
    "alt": "昆明 · 蓝天下，阳光落在脸上"
  }
};
export const travelPhotos: Record<string, Photo> = Object.fromEntries(Object.entries(rawPhotos).map(([id, photo]) => [id, {...photo,src:assetUrl(photo.src),thumbnail:assetUrl(photo.thumbnail)}]));

const tripRecords = [
  {
    "id": "trip-hangzhou-autumn",
    "title": "杭州",
    "label": "2025.09",
    "subtitle": "红楼梯与举杯的小合照",
    "story": "红色楼梯、并肩的镜子照，还有碰到镜头前的一只杯子。这一页，把照片里的笑意放在一起。",
    "keepsake": "记一张合照，也记一个小表情。",
    "timeNote": "按照片时间整理 · 可调整",
    "photoIds": [
      "hangzhou-autumn-01",
      "hangzhou-autumn-02",
      "hangzhou-autumn-03",
      "hangzhou-autumn-04",
      "hangzhou-autumn-05"
    ],
    "placeholder": false
  },
  {
    "id": "trip-shenzhen",
    "title": "深圳",
    "label": "2025.10",
    "subtitle": "海边的白天，亮灯的夜晚",
    "story": "明亮的落地窗外是水面，夜晚的灯光又换了一种颜色。把同一座城市的白天和夜晚，收在这一页。",
    "keepsake": "从窗边的水面，翻到夜里的灯光。",
    "timeNote": "按照片时间整理 · 可调整",
    "photoIds": [
      "shenzhen-01",
      "shenzhen-02",
      "shenzhen-03",
      "shenzhen-04",
      "shenzhen-05",
      "shenzhen-06",
      "shenzhen-07"
    ],
    "placeholder": false
  },
  {
    "id": "trip-hangzhou-lakeside",
    "title": "杭州",
    "label": "2025.11",
    "subtitle": "湖边站在一起的那张照片",
    "story": "湖水、远山，还有并肩站着的两个人。另一张照片里，杯子也一起入了镜。风景和小小的日常，都值得留下。",
    "keepsake": "一张湖边合照，留给周年贺卡。",
    "timeNote": "按照片时间整理 · 可调整",
    "photoIds": [
      "hangzhou-lakeside-01",
      "hangzhou-lakeside-02"
    ],
    "placeholder": false
  },
  {
    "id": "trip-hangzhou-winter",
    "title": "杭州",
    "label": "2025.12",
    "subtitle": "把秋冬的颜色慢慢收好",
    "story": "黄色树叶、夜里的长椅，还有面对城市天际线的背影。换一个季节，照片里就多了一种颜色。",
    "keepsake": "树叶落下，照片把颜色留下。",
    "timeNote": "按照片时间整理 · 可调整",
    "photoIds": [
      "hangzhou-winter-01",
      "hangzhou-winter-02",
      "hangzhou-winter-03",
      "hangzhou-winter-04",
      "hangzhou-winter-05"
    ],
    "placeholder": false
  },
  {
    "id": "trip-nanjing",
    "title": "南京",
    "label": "2026.01",
    "subtitle": "围巾、红墙与两顶小帽子",
    "story": "红色围巾和黄色围巾，把冬日合照裹得暖暖的。红墙前留一张，戴上小能猫帽子再留一张；夜里，两杯饮品也值得入册。",
    "keepsake": "把冬天穿得暖暖的，也拍得暖暖的。",
    "timeNote": "按照片时间整理 · 可调整",
    "photoIds": [
      "nanjing-01",
      "nanjing-02",
      "nanjing-03",
      "nanjing-04",
      "nanjing-05",
      "nanjing-06",
      "nanjing-07"
    ],
    "placeholder": false
  },
  {
    "id": "trip-guangzhou",
    "title": "广州",
    "label": "2026.02",
    "subtitle": "靠在一起，把夜色也带走",
    "story": "一张靠在一起的合照，一张红色装置前的合照，还有夜色里各自入镜的片刻。把这些不同的画面，放进广州这一页。",
    "keepsake": "白天靠近一点，夜里也留一张。",
    "timeNote": "按照片时间整理 · 可调整",
    "photoIds": [
      "guangzhou-01",
      "guangzhou-02",
      "guangzhou-03"
    ],
    "placeholder": false
  },
  {
    "id": "trip-changsha",
    "title": "长沙",
    "label": "2026.04",
    "subtitle": "绿荫、窗边和同框的我们",
    "story": "树荫下的一张合照，窗边的一点暖色，还有镜子与亭檐前的身影。照片里的绿色和笑意，刚好装满这一页。",
    "keepsake": "把一路的绿，也一起带回照片里。",
    "timeNote": "按照片时间整理 · 可调整",
    "photoIds": [
      "changsha-01",
      "changsha-02",
      "changsha-03",
      "changsha-04"
    ],
    "placeholder": false
  },
  {
    "id": "trip-taizhou",
    "title": "台州",
    "label": "2026.05",
    "subtitle": "从白天的合照，翻到蓝色夜幕",
    "story": "白天把两个人拍进同一张照片，傍晚把天空拍成蓝色。两张单人照拼在一起，夜里的合照再接着往下写。",
    "keepsake": "同一片天空，也可以分两张收藏。",
    "timeNote": "按照片时间整理 · 可调整",
    "photoIds": [
      "taizhou-01",
      "taizhou-02",
      "taizhou-03",
      "taizhou-04"
    ],
    "placeholder": false
  },
  {
    "id": "trip-huzhou-ningbo",
    "title": "湖州&宁波",
    "label": "2026.06",
    "subtitle": "水边的风与六月的绿荫",
    "story": "这一组沿用素材里的“湖州&宁波”分组：水边的栏杆、绿荫下的石阶，还有一张靠近镜头的合照。具体地点以后再慢慢补上。",
    "keepsake": "沿着水面与绿荫，收藏六月的片刻。",
    "timeNote": "按照片时间整理 · 可调整",
    "photoIds": [
      "huzhou-ningbo-01",
      "huzhou-ningbo-02",
      "huzhou-ningbo-03",
      "huzhou-ningbo-04",
      "huzhou-ningbo-05",
      "huzhou-ningbo-06",
      "huzhou-ningbo-07"
    ],
    "placeholder": false
  },
  {
    "id": "trip-suzhou",
    "title": "苏州",
    "label": "2026.07",
    "subtitle": "亮灯的夜，与大猫大狗打招呼",
    "story": "水边的灯光给合照添了一层暖色，橙色花朵旁也留了一张。再翻一页，和大猫、大狗分别同框，像把手账里的伙伴带进了照片。",
    "keepsake": "有夜里的合照，也有大猫大狗的陪伴。",
    "timeNote": "按照片时间整理 · 可调整",
    "photoIds": [
      "suzhou-01",
      "suzhou-02",
      "suzhou-03",
      "suzhou-04"
    ],
    "placeholder": false
  },
  {
    "id": "trip-yuxi",
    "title": "玉溪",
    "label": "2026.10",
    "subtitle": "湖水、山和一跃而起的快乐",
    "story": "蓝色湖面和远处的山，给照片留了很大的背景。石头上坐一坐，也可以对着镜头跳起来；等光变柔，再把傍晚留下。",
    "keepsake": "把跳起来的那一瞬，也好好收住。",
    "timeNote": "按照片时间整理 · 可调整",
    "photoIds": [
      "yuxi-01",
      "yuxi-02",
      "yuxi-03",
      "yuxi-04",
      "yuxi-05",
      "yuxi-06"
    ],
    "placeholder": false
  },
  {
    "id": "trip-kunming",
    "title": "昆明",
    "label": "2026.10",
    "subtitle": "菌菇、咖啡与拍立得",
    "story": "从摆满菌菇的摊位，走到放着两杯咖啡的小桌。镜子合照和摊开的拍立得，把这一组照片串成了一页。",
    "keepsake": "把桌上的两杯，也变成一张回忆卡。",
    "timeNote": "按照片时间整理 · 可调整",
    "photoIds": [
      "kunming-01",
      "kunming-02",
      "kunming-03",
      "kunming-04",
      "kunming-05",
      "kunming-06",
      "kunming-07"
    ],
    "placeholder": false
  }
];
export const travelTrips: Trip[] = tripRecords.map(({photoIds,...trip})=>({...trip,photos:photoIds.map(id=>travelPhotos[id])}));
