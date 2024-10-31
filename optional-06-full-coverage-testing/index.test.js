import { test } from 'bun:test';
import assert from 'assert';
import sum from './index.js';

// Test 1: Pengujian penjumlahan angka positif
test('Penjumlahan dengan angka positif', () => {
  const result = sum(5, 10);
  assert.strictEqual(result, 15, 'Seharusnya 5 + 10 sama dengan 15');
});

// Test 2: Pengujian penjumlahan angka negatif
test('Penjumlahan dengan angka negatif', () => {
    const result = sum(-5, 10);
    assert.strictEqual(result, 0, 'Seharusnya penjumlahan angka negatif menghasilkan 0');
});

// Test 3: Pengujian penjumlahan dengan angka nol
test('Penjumlahan dengan angka nol', () => {
    const result = sum(0, 10);
    assert.strictEqual(result, 10, 'Seharusnya 0 + 10 sama dengan 10');
});

// Test 4: Pengujian kedua argumen negatif
test('Penjumlahan kedua angka negatif', () => {
    const result = sum(-5, -10);
    assert.strictEqual(result, 0, 'Seharusnya penjumlahan kedua angka negatif menghasilkan 0');
});

// Test 5: Pengujian tipe data tidak sesuai (string)
test('Penjumlahan dengan tipe data tidak sesuai', () => {
    const result = sum('5', 10);
    assert.strictEqual(result, 0, 'Seharusnya penjumlahan tipe data tidak sesuai menghasilkan 0');
});

// Test 6: Pengujian jika argumen kedua bukan angka
test('Penjumlahan dengan argumen kedua bukan angka', () => {
    const result = sum(5, 'test');
    assert.strictEqual(result, 0, 'Seharusnya penjumlahan dengan argumen kedua bukan angka menghasilkan 0');
});

// Test 7: Pengujian tipe data campuran
test('Penjumlahan dengan tipe data campuran', () => {
    const result = sum(true, 10);
    assert.strictEqual(result, 0, 'Seharusnya penjumlahan tipe data campuran menghasilkan 0');
});