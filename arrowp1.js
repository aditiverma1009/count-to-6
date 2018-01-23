// to verify exercise
// let inputs = process.argv.slice(2);
// let result = inputs.map(str => str[0])
//                    .reduce((s, str) => s + str);
// //s:string so far
// console.log(`[${inputs}] becomes "${result}"`);

// for testing
function tester(args) {
  let inputs = args;
  // console.log(inputs);
  inputs = inputs.filter((ele) => {
    if (ele.length > 0) {
      return true;
    }
    return false;
  });

  // console.log(inputs);
  // Array.prototype.slice.call(arguments).filter(function(ele){if (ele.length>0) return 1;})
  if (inputs.length === 0) {
    return (`[${inputs}] becomes "${''}"`);
  }

  const result = inputs.map(str => str[0])
    .reduce((s, str) => s + str);
  // s:string so far
  return (`[${inputs}] becomes "${result}"`);
}
module.exports = tester;
