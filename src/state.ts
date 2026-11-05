import { memories, trips, chapters } from './content';
export const STORAGE_KEY = 'catdog-anniversary-v1';
export type Gift = { paper: number; ribbon: number; seal: number };
export type Progress = { version: 1; chapter: number; drawn: string[]; seen: string[]; visited: string[]; gift: Gift; route: number; quiet: boolean; reduced: boolean };
export const freshProgress = (): Progress => ({ version:1,chapter:0,drawn:[],seen:[],visited:[],gift:{paper:0,ribbon:0,seal:0},route:0,quiet:true,reduced:false });
const ids = (input: unknown, valid: string[]) => Array.isArray(input) ? [...new Set(input.filter((x): x is string => typeof x === 'string' && valid.includes(x)))] : [];
const integer = (x: unknown, max: number) => typeof x === 'number' && Number.isInteger(x) && x >= 0 && x <= max ? x : 0;
export function restoreProgress(raw: string | null): Progress {
 try { const p = JSON.parse(raw || 'null'); if (!p || p.version !== 1) return freshProgress(); const base=freshProgress(); return {...base, chapter:integer(p.chapter,chapters.length-1),drawn:ids(p.drawn,memories.map(m=>m.id)),seen:ids(p.seen,memories.map(m=>m.id)),visited:ids(p.visited,trips.map(t=>t.id)),gift:{paper:integer(p.gift?.paper,2),ribbon:integer(p.gift?.ribbon,2),seal:integer(p.gift?.seal,2)},route:integer(p.route,3),quiet:typeof p.quiet==='boolean'?p.quiet:true,reduced:p.reduced===true}; } catch { return freshProgress(); }
}
export function readProgress(): Progress { try { return restoreProgress(localStorage.getItem(STORAGE_KEY)); } catch { return freshProgress(); } }
export function saveProgress(p: Progress): boolean { try { localStorage.setItem(STORAGE_KEY,JSON.stringify(p)); return true; } catch { return false; } }
export function nextMemory(drawn: string[], random = Math.random): string | undefined { const remaining=memories.filter(m=>!drawn.includes(m.id)); if(!remaining.length)return; if(!drawn.length)return memories[0].id; return remaining[Math.min(remaining.length-1,Math.floor(Math.max(0,random())*remaining.length))].id; }
