import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { ArrowRight, Heart, PawPrint, Delete } from 'lucide-react';
import { matchesEntryCode, normalizeEntryCode } from './entry-code';
import { moveRemoteFocus } from './projector';
import type { Direction } from './projector';
import { assetUrl } from './asset-url';
import s from './Entry.module.css';

const App = lazy(() => import('./App'));
export default function Entry() {
  const [unlocked, setUnlocked] = useState(false);
  const [scale, setScale] = useState(()=>Math.min(innerWidth/1600,innerHeight/900));
  useEffect(()=>{const resize=()=>setScale(Math.min(innerWidth/1600,innerHeight/900));window.addEventListener('resize',resize);return()=>window.removeEventListener('resize',resize);},[]);
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  const projector = new URLSearchParams(location.search).get('view') === 'projector';
  useEffect(() => {
    if (unlocked || !projector) return;
    const remote = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'INPUT') {
        if (event.key === 'ArrowDown') { event.preventDefault(); document.querySelector<HTMLButtonElement>('[data-entry-key]')?.focus(); }
        return;
      }
      if (['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(event.key)) {
        event.preventDefault(); moveRemoteFocus(event.key as Direction);
      }
      if (['Enter','Select','Accept'].includes(event.key) && target.tagName === 'BUTTON') {
        event.preventDefault(); if (!event.repeat) target.click();
      }
    };
    document.addEventListener('keydown', remote);
    document.querySelector<HTMLButtonElement>('[data-entry-key]')?.focus();
    return () => document.removeEventListener('keydown', remote);
  }, [projector, unlocked]);
  function submit() {
    if (matchesEntryCode(code)) { setUnlocked(true); return; }
    setError(true);
    if (!projector) input.current?.focus();
  }
  function change(value: string) { setCode(normalizeEntryCode(value).replace(/[^0-9]/g, '').slice(0,8)); setError(false); }
  if (unlocked) return <Suspense fallback={<div className={s.loading} role="status">正在翻开我们的手账…</div>}><App/></Suspense>;
  return <main className={`${s.entry} ${projector ? s.projector : ''}`} style={projector?{'--entry-scale':scale} as CSSProperties:undefined}>
    <div className={s.brand}><PawPrint size={23}/><span>猫狗的一周年<small>A LITTLE SECRET, JUST FOR US</small></span></div>
    <section className={s.card} aria-labelledby="entry-title">
      <div className={s.illustration}><img src={assetUrl('/assets/phone_cat.webp')} width="420" height="412" alt="等你来拆礼物的小猫"/><Heart size={26}/><img src={assetUrl('/assets/phone_dog.webp')} width="356" height="478" alt="戴眼镜的小狗"/></div>
      <div className={s.formSide}><span className={s.eyebrow}>ONLY YOU KNOW THE ANSWER</span><h1 id="entry-title">先对一个，<br/>我们的小暗号。</h1>
        <form onSubmit={event => {event.preventDefault(); submit();}}>
          <label htmlFor="entry-code">Migo的破蛋日是哪一天：</label>
          <input ref={input} id="entry-code" type="password" inputMode="numeric" pattern="[0-9]{8}" autoComplete="off" value={code} maxLength={8} onChange={event=>change(event.target.value)} placeholder="输入 8 位日期" aria-invalid={error} aria-describedby="entry-help entry-error"/>
          <p id="entry-help" className={s.help}>年月日，连在一起的八个数字。</p>
          <div className={s.keypad} aria-label="暗号数字键盘">{[1,2,3,4,5,6,7,8,9].map(digit=><button data-entry-key="true" type="button" key={digit} onClick={()=>change(code+digit)} aria-label={`输入数字 ${digit}`}>{digit}</button>)}<button type="button" onClick={()=>change('')}>清空</button><button type="button" onClick={()=>change(code+'0')} aria-label="输入数字 0">0</button><button type="button" onClick={()=>change(code.slice(0,-1))} aria-label="删除最后一位"><Delete size={22}/></button></div>
          <p id="entry-error" className={s.error} role="status">{error?'暗号还没对上，再想一想。':' '}</p>
          <button type="submit" className={s.enter}>打开我们的这一年 <ArrowRight size={20}/></button>
        </form>
      </div>
    </section>
    <p className={s.foot}>一份小小的礼物，留给最特别的你。{projector&&<span>方向键选择数字 · 确认键输入</span>}</p>
  </main>;
}
