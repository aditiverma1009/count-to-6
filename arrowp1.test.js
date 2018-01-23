const tester = require('./arrowp1');


test('testing Basic case', () => {
  expect(tester(['PAR', 'Aditi', 'Pa'])).toBe('[PAR,Aditi,Pa] becomes "PAP"');
});

test('testing Basic case', () => {
  expect(tester(['PAR', 'Aditi', ''])).toBe('[PAR,Aditi] becomes "PA"');
});

test('testing EMPTY', () => {
  expect(tester([])).toBe('[] becomes ""');
});

test('testing Basic case', () => {
  expect(tester(['PAR', '', 'Par'])).toBe('[PAR,Par] becomes "PP"');
});
test('testing Basic case', () => {
  expect(tester(['', '', ''])).toBe('[] becomes ""');
});
// comparing length of complete string
test('testing if string length is equivalent to number of strings in the array', () => {
  expect(tester(['adi', 'ver', 'vel']).length).toBe('[adi,ver,vel] becomes "avv"'.length);
});
// console.log(tester(['adi', 'ver', 'vel']).length);
// check if haf length is 3 and the length pf array being sent is 3
test('The function should return string:', () => {
  expect(typeof tester(['verma', 'Aditi'])).toBe('string');
});
