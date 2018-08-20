/*
 *
 *
 */

 // Dependencies
 var app = require('./lib');
 var assert = require('assert');


var unit = {};


// Assert that the findPrime function is returning an object
unit['app.findPrime should return an array'] = function(done){
  var val = app.findPrime();
  assert.equal(typeof(val), 'object');
  done();
};


// Assert that the reverseString function is returning a string
unit['app.reverseString should return a string'] = function(done){
  var val = app.reverseString ();
  assert.equal(typeof(val), 'string');
  done();
};


// Assert that the findFactorial function is returning a number
unit['app.findFactorial should return a number'] = function(done){
  var val = app.findFactorial();
  assert.equal(typeof(val), 'number');
  done();
};

// Export
module.exports = unit;