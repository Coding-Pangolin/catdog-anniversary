import { describe, it, expect } from 'vitest';
import { assetUrl } from './asset-url';
describe('发布目录中的素材地址',()=>{
 it('根目录与项目子目录均可加载照片和影片',()=>{
  expect(assetUrl('/assets/cat.svg','/')).toBe('/assets/cat.svg');
  expect(assetUrl('/media/story.mp4','/catdog-anniversary/')).toBe('/catdog-anniversary/media/story.mp4');
  expect(assetUrl('assets/photo.webp','/catdog-anniversary')).toBe('/catdog-anniversary/assets/photo.webp');
 });
 it('保留外部网址与浏览器生成的媒体地址',()=>{
  expect(assetUrl('https://example.com/a.webp','/site/')).toBe('https://example.com/a.webp');
  expect(assetUrl('blob:local-123','/site/')).toBe('blob:local-123');
 });
});
