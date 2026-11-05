# 猫狗的一周年

以原创猫狗角色、真实旅行合照和生活片刻为主角的周年互动手账。

- 普通入口：https://coding-pangolin.github.io/catdog-anniversary/
- 16:9 投影入口：https://coding-pangolin.github.io/catdog-anniversary/?view=projector

目前接入 10 个城市分组、12 页城市记忆、61 张精选照片，并复用于周年贺卡和六张回忆卡。杭州按不同照片月份分开记录；湖州&宁波沿用素材的混合分组。月份来自照片时间，实际行程可后续调整。昵称、纪念日和信件正文仍待补充。

首页提供浏览器端纪念暗号入口及遥控器数字键盘。它是体验入口，不是服务端鉴权；当前仓库和网站公开。完整访问保护后续接入。

## 本地开发

使用 Node.js 24 和 pnpm 11.25.0：

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm test
pnpm build --base=/catdog-anniversary/
```

提交至 main 后，GitHub Actions 自动检查、构建并发布 GitHub Pages。网页资源支持项目子目录。

## 内容与使用

内容位于 `src/content.ts` 与 `src/travel-data.ts`。发布图片在 `public/photos/`，包含缩略图和大图，保留照片比例并移除 EXIF/XMP。原始照片和本地来源清单不上传仓库。

手机采用纵向旅行列表；桌面与 16:9 投影入口每屏显示三页记忆，可翻页访问全部内容。相册支持放大、照片切换、上一页和下一页城市记忆。投影模式支持方向键选择和确认键操作；Vidda 实际遥控器映射仍需真机复查。

《怀念》使用 96 kbps 网页副本，完整缓存后播放。浏览器拦截自动播放时，第一次点击或确认后开始。影片放映期间（包括暂停）背景音乐暂停，影片结束或离开章节后恢复。投影模式减少持续动画与纹理绘制。

插画、照片、影片和音乐仅用于本次个人纪念项目；公开此仓库不代表授予再分发许可。
