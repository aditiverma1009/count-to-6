// module.exports = function average(...args) {
//   let sum = 0;
//   args.forEach((value) => {
//     sum += value;
//   });
//   const avg = sum / args.length;
//   return avg;
// };

module.exports = (...args) => {
  if (args.length) {
    let sum = args.reduce((s, value) => s + value);
    return (sum / args.length).toPrecision(3);
  }

  return '';
};
