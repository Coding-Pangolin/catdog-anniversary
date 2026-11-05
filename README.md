# 猫狗的一周年

以原创猫狗角色为主角的周年互动手账效果预览。

- 普通入口：https://Coding-Pangolin.github.io/catdog-anniversary/
- 16:9 投影入口：https://Coding-Pangolin.github.io/catdog-anniversary/?view=projector

当前为公开占位预览：真实旅行、照片、昵称、纪念日与信件尚未填入；尚未启用访问口令。

## 本地开发

使用 Node.js 24 和 pnpm 11.25.0：

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm test
pnpm build --base=/catdog-anniversary/
```

提交至默认分支后，GitHub Actions 会检查、构建并发布到 GitHub Pages。资源地址支持项目子目录。

## 使用方式

手机与电脑按屏幕宽度调整版式；投影模式使用 16:9 画布，提供方向键选择、确认键操作、大字信件分页及影片播放控制。Vidda 内置浏览器的遥控器映射仍需真机验证。

文字与素材配置位于 `src/content.ts`，发布图片和影片位于 `public/`。真实私人内容接入前需另行设计并验证访问保护。

插画、影片及其中音乐仅用于本次私人纪念礼物项目，上传本预览不代表授予其再分发许可。

背景音乐使用提供素材中的《怀念》，每次打开尝试播放；浏览器限制自动播放时，在首次点击或确认后开始。顶部可关闭。影片放映期间（含暂停）背景音乐暂停，结束或离开影片章节后恢复。投影版已使用传统四边定位及 SVG 蝴蝶结，并修复包装选项撑高遮挡导航。
