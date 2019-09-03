import {linter} from './linter';
import NaiveTokenizer from './tokenizer/naive-tokenizer';

describe('linter', () => {
    it('returns no messages if no linters were passed', () => {
        const messages = linter('text', NaiveTokenizer, []);
        expect(messages).toEqual([]);
    });
});