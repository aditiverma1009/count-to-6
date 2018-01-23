const tester = require('./destructuring');


test('testing Basic case', () => {
  expect(tester(['userId', 'aditi', 'aditi1009', 'age', 'firstName', 'lastName'])).toEqual({ username: 'aditi', email: 'aditi1009' });
});

test('testing array with empty elements', () => {
  expect(tester(['', '', '', '', '', ''])).toEqual({ username: '', email: '' });
});

test('testing empty array', () => {
  expect(tester([])).toEqual({});
});

test('testing null array elements', () => {
  expect(tester([null, null, null, null, null])).toEqual({ username: null, email: null });
});

test('testing null array elements', () => {
  expect(tester([undefined, undefined, undefined, undefined, undefined]))
    .toEqual({ username: undefined, email: undefined });
});

test('testing null array elements', () => {
  expect(tester(['aditi', 'verma']))
    .toEqual({ username: 'verma', email: undefined });
});
