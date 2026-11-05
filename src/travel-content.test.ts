import { expect, it } from 'vitest';
import { memories, siteConfig, trips } from './content';
import { familyPhotos } from './family-photos';

it('每页城市记忆有稳定 ID、有效照片尺寸与缩略图', () => {
  expect(new Set(trips.map(trip=>trip.id)).size).toBe(trips.length);
  for (const trip of trips) {
    expect(trip.photos.length).toBeGreaterThan(0);
    expect(new Set(trip.photos.map(photo=>photo.id)).size).toBe(trip.photos.length);
    for (const photo of trip.photos) {
      expect(photo.width).toBeGreaterThan(0);
      expect(photo.height).toBeGreaterThan(0);
      expect(photo.thumbnail).toMatch(/-thumb\.webp$/);
      expect(photo.src).toMatch(/\.webp$/);
      expect(photo.placeholder).not.toBe(true);
    }
  }
});

it('城市资料增加后，封面与回忆卡仍指向正确照片', () => {
  const photos=new Map([...trips.flatMap(trip=>trip.photos),...familyPhotos].map(photo=>[photo.id,photo]));
  expect(photos.get(siteConfig.coverPhoto!.id)).toEqual(siteConfig.coverPhoto);
  for (const memory of memories) expect(photos.get(memory.photo.id)).toEqual(memory.photo);
  expect(memories.find(memory=>memory.id==='memory-03')?.photo.caption).toContain('小能猫');
  expect(photos.get('hangzhou-autumn-02')?.caption).toBe('红色楼梯旁的我');
});
