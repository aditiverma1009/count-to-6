const tester = require('./defargsp2');

test('testing Whole Number case', () => {
  expect(tester('hi', 5)).toBe('hi!!!!!');
});

test('testing Whole Number case', () => {
  expect(tester('hi')).toBe('hi!!');
});

test('testing Whole Number case', () => {
  expect(tester('hi!!!')).toBe('hi!!!!!!!!');
});

test('testing Whole Number case', () => {
  expect(tester('hi', 0)).toBe('hi');
});

test('testing Whole Number case', () => {
  expect(tester('')).toBe('');
});

// empty string-only exclamation

test('testing Whole Number case', () => {
  expect(tester('!!!', 2)).toBe('!!!!!');
});

// -1 as second arhument

test('testing Whole Number case', () => {
  expect(tester('hi', -2)).toBe('hi');
});
