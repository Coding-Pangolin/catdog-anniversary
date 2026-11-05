import { describe, it, expect, vi } from 'vitest';
import { MusicController } from './music-controller';
const tick = async () => { await Promise.resolve(); await Promise.resolve(); };
function setup(play = vi.fn(() => Promise.resolve())) {
  const audio = { play, pause: vi.fn(), volume: 1, loop: false };
  const controller = new MusicController(audio, vi.fn());
  return { audio, controller };
}
describe('背景音乐与浏览器播放限制', () => {
  it('打开即尝试，循环并保持较低音量', async () => {
    const {audio, controller:c} = setup(); c.start(); await tick();
    expect(audio.play).toHaveBeenCalledTimes(1); expect(c.status).toBe('playing');
    expect(audio.loop).toBe(true); expect(audio.volume).toBe(0.35);
  });
  it('自动播放受限后，首次操作重试；成功后不反复重启', async () => {
    const play = vi.fn().mockRejectedValueOnce(new DOMException('gesture required','NotAllowedError')).mockResolvedValue(undefined);
    const {controller:c} = setup(play); c.start(); await tick();
    expect(c.status).toBe('blocked'); c.retry(); await tick();
    expect(c.status).toBe('playing'); c.retry(); expect(play).toHaveBeenCalledTimes(2);
  });
  it('影片与隐藏页面暂停音乐，恢复时保留手动关闭选择', async () => {
    const {audio,controller:c} = setup(); c.start(); await tick();
    c.setVideoPlaying(true); expect(c.status).toBe('paused');
    c.retry(); expect(audio.play).toHaveBeenCalledTimes(1);
    c.setVideoPlaying(false); await tick(); expect(c.status).toBe('playing');
    c.setVisible(false); expect(c.status).toBe('paused');
    c.setVisible(true); await tick(); expect(c.status).toBe('playing');
    c.toggle(); c.setVideoPlaying(true); c.setVideoPlaying(false); c.setVisible(true);
    expect(c.status).toBe('off'); expect(audio.play).toHaveBeenCalledTimes(3);
  });
  it('快速静音不受旧播放结果影响，卸载后也不再更新', async () => {
    let finish!: () => void;
    const {controller:c,audio} = setup(vi.fn(() => new Promise<void>(resolve => { finish = resolve; })));
    c.start(); c.toggle(); finish(); await tick(); expect(c.status).toBe('off');
    c.dispose(); c.retry(); expect(audio.play).toHaveBeenCalledTimes(1);
  });
  it('重复的可见性和影片状态不会反复调用播放',async()=>{const {audio,controller:c}=setup();c.start();await tick();c.setVisible(true);c.setVideoPlaying(false);c.setVisible(true);expect(audio.play).toHaveBeenCalledTimes(1);expect(audio.pause).not.toHaveBeenCalled();});
  it('资源失败显示错误，允许主动重试', async () => {
    const {controller:c} = setup(); c.fail(); expect(c.status).toBe('error');
    c.toggle(); await tick(); expect(c.status).toBe('playing');
  });
});
