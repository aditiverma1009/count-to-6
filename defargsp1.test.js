const tester = require('./defargsp1');

test('testing Whole Number case', () => {
  expect(tester(1, 2)).toBe(1.5);
});

test('testing Whole Number case', () => {
  expect(tester()).toBe(0.5);
});

test('testing Whole Number case', () => {
  expect(tester(1)).toBe(1);
});

test('testing Whole Number case', () => {
  expect(tester(undefined, 6)).toBe(3);
});

test('testing Whole Number case', () => {
  expect(tester(undefined, -1)).toBe(-0.5);
});

test('testing Whole Number case', () => {
  expect(tester(null, null)).toBe(0);
});
