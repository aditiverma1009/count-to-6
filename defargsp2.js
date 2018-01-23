module.exports = (string, len = string.length) => {
  if (len < 0) {
    return string;
  }
  return string + '!'.repeat(len);
};
