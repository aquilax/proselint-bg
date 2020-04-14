import { LinterType, LinterInterface, LinterError } from '.';

export class CommaSpace implements LinterInterface {
  type = LinterType.SENTENCE;

  run(text: string) {
    const messages = [];
    if (text.match(/\s,\s/gm)) {
      messages.push({
        code: LinterError.SPACE_BEFORE_COMMA,
        message: 'Интервал преди запетая',
      });
    }
    if (text.match(/,[^\s]/gm)) {
      messages.push({
        code: LinterError.COMMA_WITHOUT_SPACE,
        message: 'Запетая без интервал след нея',
      });
    }
    return messages;
  }
}
