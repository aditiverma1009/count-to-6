function tester() {
  let foot = {
    kick() {
      this.yelp = 'Ouch!';
      setImmediate(() => console.log(this.yelp));
    },
  };
  foot.kick();
}
module.exports = tester;
