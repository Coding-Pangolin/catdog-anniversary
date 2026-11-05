import { describe, expect, it } from 'vitest';
import { matchesEntryCode } from './entry-code';
describe('周年暗号入口', () => {
  it('正确日期与全角输入可以进入', () => {
    expect(matchesEntryCode('20261018')).toBe(true);
    expect(matchesEntryCode(' ２０２６１０１８ ')).toBe(true);
  });
  it('错误、缺位和附加字符不放行', () => {
    for (const value of ['', '2026101', '20261019', '202610180', '2026-10-18', '<script>']) {
      expect(matchesEntryCode(value)).toBe(false);
    }
  });
});
