
/**
 * Module dependencies
 */

var benchmark = require('benchmark');

// Suite

var suite = new benchmark.Suite;

suite
  .add('RegExp#test', function () {
    /o/.test('Hello, World!');
  })
  .add('String#indexOf', function () {
    'Hello, World!'.indexOf('o') > -1;
  })
  .add('String#match', function () {
    !!'Hello, World!'.match(/o/);
  })
  .on('cycle', function (event) {
    var stats = event.target.stats;
    console.log('%s %s~%s', event.target.name, stats.mean, stats.deviation);
  })
  .run({
    async: true
  });

