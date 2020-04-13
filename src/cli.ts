import fs from 'fs';
import { linter } from './linter';
import NaiveTokenizer from './tokenizer/naive-tokenizer';
import { CommonMisspelled } from './linters/CommonMisspelled';

const text = fs.readFileSync('/dev/stdin', 'utf-8');
const messages = linter(text, NaiveTokenizer, [new CommonMisspelled()]);
console.log(messages);
