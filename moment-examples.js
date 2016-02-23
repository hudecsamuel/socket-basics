var moment = require('moment');
var now = moment();

console.log(now.format());
console.log(now.format("X"));
console.log(now.format("x"));
console.log(now.valueOf());

var timestamp = now.valueOf();
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format("h:m a"));

console.log('bla');
var expire = moment.unix(1453823957).utc();
console.log(expire.local().format("h:m"));


// now.subtract(1, 'year');
// console.log(now.format());
// console.log(now.format("MMM Do YYYY, h:m a")); // Jan 24th  2016, 9:25 pm
