var fs = require('fs');
var path = require('path');

var fileName = '.jshintrc';

var jshintrcFileContents = path.resolve().split(path.sep).map(function(element) {
  return element === '' ? '/' : element;
}).map(function(element, index, array) {
  return path.join.apply(path, array.slice(0, index + 1).concat(fileName));
}).reverse().map(function(element) {
  try {
    var fileContents = fs.readFileSync(element, {
      encoding: 'utf-8'
    });
    return JSON.parse(fileContents);
  } catch (error) {
    return undefined;
  }
}).filter(function(e) {
  return Boolean(e);
})[0];

var jshintTemplate = {
  all: {
    src: ['<%= paths.project %>'],
    ignore: [
      'node_modules/'
    ]
  },
  options: {

    curly: true,
    eqeqeq: true,
    strict: true,
    undef: true,
    sub: true,
    esnext: true,
    globalstrict: true,
    quotmark: true,

    browser: true,
    jquery: true,
    devel: true,
    node: true,
    jasmine: true

  }
};

module.exports = function(grunt, options) {
  if (grunt.config('package.jshintConfig')) {
    jshintTemplate.options = grunt.config('package.jshintConfig');
  } else if (jshintrcFileContents) {
    jshintTemplate.options = jshintrcFileContents;
  }
  return jshintTemplate;
};
