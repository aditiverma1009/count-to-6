const tester = require('./spread');

test('testing Basic case', () => {
  expect(tester([1, 1, 2, 3, 5, 8])).toBe('The minimum of [1,1,2,3,5,8] is 1');
});


test('testing Basic case', () => {
  expect(tester([-1, 0, -200, 3, 5, 8])).toBe('The minimum of [-1,0,-200,3,5,8] is -200');
});


test('testing Basic case', () => {
  expect(tester([-1, -10, -200, -3, -5, -8])).toBe('The minimum of [-1,-10,-200,-3,-5,-8] is -200');
});

test('testing Basic case', () => {
  expect(tester([])).toBe('The minimum of [] is Infinity');
});

test('The function should return string:', () => {
  expect(typeof (tester([-1, -10, -200, -3, -5, -8]))).toBe(typeof ('The minimum of [-1,-10,-200,-3,-5,-8] is -200'));
});
