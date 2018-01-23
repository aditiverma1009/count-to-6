const tester = require('./template_strings');

let input = 'ADITI';
test('testing UPPER case', () => {
  expect(tester(input)).toBe(`Hello, ${input}!
Your name lowercased is "${input.toLowerCase()}".`);
});

test('testing MIXED case', () => {
  expect(tester('ADiti')).toBe(`Hello, ADiti!
Your name lowercased is "aditi".`);
});


test('testing EMPTY', () => {
  expect(tester('')).toBe(`Hello, !
Your name lowercased is "".`);
});

test('testing typeof output', () => {
  expect(typeof (tester('ADITI'))).toBe('string');
});
