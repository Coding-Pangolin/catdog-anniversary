import { afterEach, expect, it, vi } from 'vitest';
import { bufferMusic } from './buffered-music';
afterEach(() => vi.unstubAllGlobals());
it('完整下载后返回音频，允许浏览器缓存复用', async () => {
  const audio = new Blob(['audio'], {type:'audio/mpeg'});
  const fetcher = vi.fn().mockResolvedValue(new Response(audio)); vi.stubGlobal('fetch',fetcher);
  const signal = new AbortController().signal;
  expect((await bufferMusic('/music.mp3',signal)).size).toBe(audio.size);
  expect(fetcher).toHaveBeenCalledWith('/music.mp3',{signal,cache:'force-cache'});
});
it('请求失败或空音频不会进入播放', async () => {
  vi.stubGlobal('fetch',vi.fn().mockResolvedValueOnce(new Response('',{status:404})).mockResolvedValueOnce(new Response('')));
  await expect(bufferMusic('/music.mp3',new AbortController().signal)).rejects.toThrow('404');
  await expect(bufferMusic('/music.mp3',new AbortController().signal)).rejects.toThrow('Empty audio');
});
