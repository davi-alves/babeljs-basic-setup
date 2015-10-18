'use strict';

require('babel/polyfill');

var utils     = require('./utils');
var iso       = require('../../portable');
var fibonacci = iso.fibonacci;

console.log('Client side started');

// throws compile error on change
const MAX_HEIGHT = 450;
const MIN_HEIGHT = 200;
function isInRage (n) {
  return n <= MAX_HEIGHT && n >= MIN_HEIGHT;
}
console.log('is 300 in range', isInRage(300));
console.log('is 100 in range', isInRage(100));

// let isolates the scope of variables declared in block items
for (let i = 0; i < 10; i++) {
  console.log('inside', i);
}

function doStuff (person) {
  var { name, age, job } = person;
  console.log(name + ' (' +  age + ') works as a ' + job);
}
doStuff({
  name: 'Davi',
  job: 'Developer',
  age: 26
});

// arrow function
var arr = [{ name: 'Jane' }, { name: 'Jason' }, { name: 'Mike' }];
var strArray = arr.map((x) => x.name);
console.log(strArray);
