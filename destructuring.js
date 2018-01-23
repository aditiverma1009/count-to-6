// // to verify
// const userArray = process.argv.slice(2);
// const obj = {};
// [, obj.username, obj.email] = userArray;
// console.log(obj);

// to test
function tester(args) {
  let userArray = args;
  let obj = {};
  [, obj.username, obj.email] = userArray;
  return (obj);
}
module.exports = tester;
