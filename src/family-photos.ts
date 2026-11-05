import type { Photo } from './content';
import { assetUrl } from './asset-url';
const photos = [
  {
    "id": "family-panda-pillow",
    "src": "/photos/family/family-panda-pillow.webp",
    "thumbnail": "/photos/family/family-panda-pillow-thumb.webp",
    "width": 1600,
    "height": 1200,
    "caption": "胖达和枕头狗，并排坐好",
    "alt": "黑白狗胖达与抱着独立小枕头的棕色枕头狗"
  },
  {
    "id": "family-bulachang-miaomiao",
    "src": "/photos/family/family-bulachang-miaomiao.webp",
    "thumbnail": "/photos/family/family-bulachang-miaomiao-thumb.webp",
    "width": 810,
    "height": 1440,
    "caption": "布拉肠在架子上，喵喵也在同一格画面里",
    "alt": "架子上的腊肠狗布拉肠与前景的大黄狗喵喵"
  },
  {
    "id": "family-miaomiao-mirror",
    "src": "/photos/family/family-miaomiao-mirror.webp",
    "thumbnail": "/photos/family/family-miaomiao-mirror-thumb.webp",
    "width": 1200,
    "height": 1600,
    "caption": "抱着喵喵，在镜子前留一张",
    "alt": "大黄狗玩偶喵喵在镜子中的正面与怀抱它的人"
  },
  {
    "id": "family-panda-journal",
    "src": "/photos/family/family-panda-journal.webp",
    "thumbnail": "/photos/family/family-panda-journal-thumb.webp",
    "width": 1200,
    "height": 1600,
    "caption": "手账里，写下胖达的加入",
    "alt": "记录胖达加入的手账页、黑白狗玩偶照片与手绘图"
  }
];
export const familyPhotos: Photo[] = photos.map(photo=>({...photo,src:assetUrl(photo.src),thumbnail:assetUrl(photo.thumbnail)}));
