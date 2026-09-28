import sum from './index.js';
import { test } from 'node:test';
import assert from 'node:assert';

test('sum with valid numbers', () => {
  assert.strictEqual(sum(2, 3), 5);
});

test('sum with negative numbers', () => {
  assert.strictEqual(sum(-1, 5), 0);
});

test('sum with non-number inputs', () => {
  assert.strictEqual(sum('2', 3), 0);
});