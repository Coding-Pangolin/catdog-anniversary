export type MusicStatus = 'loading' | 'starting' | 'playing' | 'blocked' | 'paused' | 'off' | 'error';
type Player = Pick<HTMLAudioElement, 'play' | 'pause' | 'volume' | 'loop'>;

// Keep browser autoplay rejection separate from the visitor's explicit mute choice.
export class MusicController {
  enabled = true;
  status: MusicStatus = 'starting';
  private visible = true;
  private videoPlaying = false;
  private disposed = false;
  private attempt = 0;
  constructor(private audio: Player, private notify: (status: MusicStatus) => void) {
    audio.volume = 0.35;
    audio.loop = true;
  }
  private report(status: MusicStatus) { this.status = status; this.notify(status); }
  start() { this.sync(); }
  toggle() {
    if (this.status === 'blocked' || this.status === 'error') this.enabled = true;
    else this.enabled = !this.enabled;
    this.sync();
  }
  retry() { if (this.status === 'blocked') this.sync(); }
  mute() { this.enabled = false; this.sync(); }
  setVisible(visible: boolean) { if(this.visible === visible) return; this.visible = visible; this.sync(); }
  setVideoPlaying(playing: boolean) { if(this.videoPlaying === playing) return; this.videoPlaying = playing; this.sync(); }
  fail() { ++this.attempt; this.audio.pause(); this.report('error'); }
  private sync() {
    if (this.disposed) return;
    const attempt = ++this.attempt;
    if (!this.enabled || !this.visible || this.videoPlaying) {
      this.audio.pause();
      this.report(this.enabled ? 'paused' : 'off');
      return;
    }
    this.report('starting');
    void this.audio.play().then(() => {
      if (attempt === this.attempt && !this.disposed) this.report('playing');
    }).catch((error: unknown) => {
      if (attempt !== this.attempt || this.disposed) return;
      this.report(error instanceof Error && error.name === 'NotAllowedError' ? 'blocked' : 'error');
    });
  }
  dispose() { this.disposed = true; ++this.attempt; this.audio.pause(); }
}
