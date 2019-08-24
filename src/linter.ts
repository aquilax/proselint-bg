import {splitSentences, splitWords } from './parser';

enum LinterType {
    TEXT = 1,
    SENTENCE,
    WORD,
}

interface LintMessageInterface {
    message: string
}

interface LintRunner {
    (text: String): LintMessageInterface[]
}

interface LinterInterface {
    type: LinterType;
    run: LintRunner;
}

export function linter(text: string, linters: LinterInterface[]): LintMessageInterface[] {
    const result: LintMessageInterface[] = [];

    const textLinters = linters.filter((linter: LinterInterface) => linter.type === LinterType.TEXT);
    const sentenceLinters = linters.filter((linter: LinterInterface) => linter.type === LinterType.SENTENCE);
    const wordLinters = linters.filter((linter: LinterInterface) => linter.type === LinterType.WORD);

    if (textLinters) {
        result.push(...applyLinters(text, textLinters))
    }

    splitSentences(text).map((sentence: string) => {
        if (sentenceLinters) {
            result.push(...applyLinters(sentence, sentenceLinters));
        }
        splitWords(sentence).map((word: string) => {
            if (sentenceLinters) {
                result.push(...applyLinters(word, wordLinters));
            }
        })
    })

    return result;
}

export function applyLinters(text: string, linters: LinterInterface[]): LintMessageInterface[] {
    return linters.reduce((messages: LintMessageInterface[], linter: LinterInterface) => {
        return [...messages, ...linter.run(text)];
    }, []);
}