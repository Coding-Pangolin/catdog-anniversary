/** Resolve packaged media under either a domain root or a GitHub Pages project path. */
export function assetUrl(path: string, base = import.meta.env.BASE_URL): string {
 if (/^(?:https?:|data:|blob:|\/\/)/i.test(path)) return path;
 const prefix=base.endsWith('/')?base:`${base}/`;
 return prefix+path.replace(/^\/+/, '');
}
