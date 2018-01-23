// to verify
// let inputs = process.argv.slice(2);
// console.log(`The minimum of [${inputs}] is ${Math.min(...inputs)}`);

// to test
function tester(...args) {
  const inputs = args[0];
  return (`The minimum of [${inputs}] is ${Math.min(...inputs)}`);
}
module.exports = tester;
