export enum LinterType {
  TEXT = 1,
  SENTENCE,
  WORD,
}

export interface LintMessageInterface {
  message: string;
}

export interface LintRunner {
  (text: string): LintMessageInterface[];
}

export interface LinterInterface {
  type: LinterType;
  run: LintRunner;
}
