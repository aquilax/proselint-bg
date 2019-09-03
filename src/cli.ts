import fs from 'fs';
import {linter} from './linter'
import NaiveTokenizer from './tokenizer/naive-tokenizer'

const text = fs.readFileSync("/dev/stdin", "utf-8");
const messages = linter(text, NaiveTokenizer, []);
console.log(messages);