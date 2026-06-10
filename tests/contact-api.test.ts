import { describe, it, expect } from 'vitest';

describe('联系方式信息', () => {
  it('电话号码格式正确', () => {
    const phone = '13168873754';
    expect(phone).toMatch(/^1[3-9]\d{9}$/);
  });

  it('地址包含广州', () => {
    const address = '广州市白云区石井大冈村大园街12号';
    expect(address).toContain('广州');
    expect(address).toContain('白云区');
  });
});
