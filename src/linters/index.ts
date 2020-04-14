export enum LinterType {
  TEXT = 1,
  SENTENCE,
  WORD,
}

export enum LinterError {
  MISSPELLED_WORD = 1,
  SPACE_BEFORE_COMMA,
  COMMA_WITHOUT_SPACE,
}

export interface LintMessageInterface {
  code: LinterError;
  message: string;
}

export interface LintRunner {
  (text: string): LintMessageInterface[];
}

export interface LinterInterface {
  type: LinterType;
  run: LintRunner;
}
