// A browser-only keepsake entrance, not server authentication.
const digits = [2, 0, 2, 6, 1, 0, 1, 8];
export function normalizeEntryCode(value: string): string {
  return value.trim().replace(/[０-９]/g, digit => String(digit.charCodeAt(0) - 0xff10));
}
export function matchesEntryCode(value: string): boolean {
  const normalized = normalizeEntryCode(value);
  return normalized.length === digits.length && digits.every((digit, index) => normalized[index] === String(digit));
}
