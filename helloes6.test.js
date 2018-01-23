const disp = require('./helloes6');

test('Should Print->', () => {
  expect(disp()).toBe('HELLO ES6');
});
test('check For Another case->', () => {
  expect(disp()).not.toBe('HELLO 6');
});
test('For string type check->', () => {
  expect(typeof (disp())).toBe(typeof ('HELLO 6'));
});
