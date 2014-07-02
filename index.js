'use strict';

/**
  check implements of defined interface
 */
function getArgumentNames(f) {
  return f.toString().match(/function\s+\((.*?)\)/)[1];
}

module.exports = function checkImplements(referenceObject,
  implementation) {
  var error = null;
  Object.keys(referenceObject).some(function(k) {
    if (typeof referenceObject[k] === 'function') {
      if (typeof implementation[k] !== 'function') {
        error = 'Interface method not implemented: ' + k + ' in ' +
          implementation.constructor.name;
        return true;
      } else {
        var orig = getArgumentNames(referenceObject[k]);
        var target = getArgumentNames(implementation[k]);
        if (orig !== target) {
          error = 'Argument names mismatch for: ' + k + ' in ' +
            implementation.constructor.name + ' orig: ' + orig + ' target: ' +
            target;
          return true;
        }
      }
    }
    return false;
  });
  if (error) {
    throw new Error(error);
  }
  return true;
};
