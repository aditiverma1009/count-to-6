const tester = require('./rest');

test('testing Whole Number case', () => {
  expect(tester(1, 2, 3)).toBe('2.00');
});

test('testing decimal point case', () => {
  expect(tester(1, 2, 3, 4)).toBe('2.50');
});

// negative numbers test case
test('testing negative decimal point case', () => {
  expect(tester(-1, -2, -3, -4)).toBe('-2.50');
});

// test solution be number or float
test('testing decimal point case should be no. or float', () => {
  expect(typeof (tester(1, 2, 3, 4))).toBe(typeof ('2.50'));
});

test('testing recurring decimal', () => {
  expect(tester(1, 1, 2, 3, 5, 8)).toBe('3.33');
});

// test solution be number or float

test('testing No Arguments case', () => {
  expect(tester()).toBe('');
});
