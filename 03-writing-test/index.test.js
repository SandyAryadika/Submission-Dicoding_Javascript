import { sum } from './index.js';
import { test, expect } from 'bun:test';

test('pengujian penjumlahan', () => {
  expect(sum(1, 3)).toBe(4);
  expect(sum(-2, -2)).toBe(-4);
  expect(sum(0, 0)).toBe(0);
});