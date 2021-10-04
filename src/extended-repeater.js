import { NotImplementedError } from '../extensions/index.js';
export default function repeater(str, options) {
  str = String(str);
  let additional = "";
  let result = "";

  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }
  if (!options.separator) {
    options.separator = "+";
  }
  if (options.addition === undefined) {
    options.addition = "";
  }
  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }
  if (!options.additionSeparator) {
    options.additionSeparator = "|";
  }

  for (let i = 1; i < options.additionRepeatTimes; i++) {
    additional += options.addition + options.additionSeparator;
  }

  additional += options.addition;

  for (let i = 1; i < options.repeatTimes; i++) {
    result += str + additional + options.separator;
  }
  result += str + additional;
  return result;
}
