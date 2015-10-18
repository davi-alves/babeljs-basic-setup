'use strict';

module.exports = {
  count
};

function count() {
  var counter = 0;
  setInterval(() => console.log(counter++), 1000);
}
