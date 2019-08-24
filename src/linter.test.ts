import {linter} from './linter';

describe('linter', () => {
    it('returns no messages if no linters were passed', () => {
        const messages = linter('text', []);
        expect(messages).toEqual([]);
    });
});