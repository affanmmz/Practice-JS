import {describe, it, expect} from 'bun:test';
import {sum} from './index.js';

describe('fungsi sum', () => {
    it('harus mengembalikan pernjumlahan', () => {
        expect(sum(2, 3)).toBe(5);
    })
});