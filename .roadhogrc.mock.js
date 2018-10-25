const fs = require('fs');
const path = require('path');

const mockPath = path.resolve(__dirname, 'mock');
let mock = {};

// TODO: 解决： Cannot find module '@babel/runtime/core-js/object/assign'

let _extends = function(target, varArgs) { // .length of function is 2
  if (target == null) { // TypeError if undefined or null
    throw new TypeError('Cannot convert undefined or null to object');
  }

  var to = Object(target);

  for (var index = 1; index < arguments.length; index++) {
    var nextSource = arguments[index];

    if (nextSource != null) { // Skip over if undefined or null
      for (var nextKey in nextSource) {
        // Avoid bugs when hasOwnProperty is shadowed
        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
          to[nextKey] = nextSource[nextKey];
        }
      }
    }
  }
  return to;
}

fs.readdirSync(mockPath).forEach(file => {
  _extends(mock, require(`./mock/${file}`));
  // Object.assign(mock, require(`./mock/${file}`));
});

export default mock;
