/** Download the small web audio completely before playing on an unstable connection. */
export async function bufferMusic(url: string, signal: AbortSignal): Promise<Blob> {
  const response = await fetch(url, { signal, cache: 'force-cache' });
  if (!response.ok) throw new Error(`Audio request failed: ${response.status}`);
  const blob = await response.blob();
  if (!blob.size) throw new Error('Empty audio');
  return blob;
}
