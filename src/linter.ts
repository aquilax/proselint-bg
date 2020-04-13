import { LintMessageInterface, LinterInterface, LinterType } from './linters';

interface Tokenizer {
  (text: string): string[];
}

interface TokenizerInterface {
  sentence: Tokenizer;
  word: Tokenizer;
}

export function linter(
  text: string,
  tokenizer: TokenizerInterface,
  linters: LinterInterface[],
): LintMessageInterface[] {
  const result: LintMessageInterface[] = [];

  const textLinters = linters.filter(
    (l: LinterInterface) => l.type === LinterType.TEXT,
  );
  const sentenceLinters = linters.filter(
    (l: LinterInterface) => l.type === LinterType.SENTENCE,
  );
  const wordLinters = linters.filter(
    (l: LinterInterface) => l.type === LinterType.WORD,
  );

  if (textLinters) {
    result.push(...applyLinters(text, textLinters));
  }

  if (sentenceLinters || wordLinters) {
    tokenizer.sentence(text).map((sentence: string) => {
      if (sentenceLinters) {
        result.push(...applyLinters(sentence, sentenceLinters));
      }
      if (wordLinters) {
        tokenizer.word(sentence).map((word: string) => {
          if (sentenceLinters) {
            result.push(...applyLinters(word, wordLinters));
          }
        });
      }
    });
  }

  return result;
}

export function applyLinters(
  text: string,
  linters: LinterInterface[],
): LintMessageInterface[] {
  return linters.reduce(
    (messages: LintMessageInterface[], linter: LinterInterface) => {
      return [...messages, ...linter.run(text)];
    },
    [],
  );
}
