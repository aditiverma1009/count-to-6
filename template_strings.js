// console.log(process.argv[0]);

// to verify exercise
// function test()
// {
// let person=process.argv[2];
// let lower=person.toLowerCase();
// console.log(`Hello, ${person}!
// Your name lowercased is "${lower}".`);
// //}

// for testing
function tester(...args) {
  return (`Hello, ${args[0]}!
Your name lowercased is "${args[0].toLowerCase()}".`);
}
module.exports = tester;
