/**
 * `uglify`
 *
 * ---------------------------------------------------------------
 *
 * Minify client-side JavaScript files using UglifyJS.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-uglify
 *
 */
module.exports = function (grunt) {

  var config = {
    dist: {
      src: ['.tmp/public/concat/production.js'],
      dest: '.tmp/public/min/production.min.js'
    }
  };

  var layouts = require('../multilayouts').layouts;
  for (var i in layouts) {
    var layout = layouts[i];
    config[layout] = {
      src: '.tmp/public/concat/production-'+layout+'.js',
      dest: '.tmp/public/min/production-'+layout+'.js'
    }
  }

  grunt.config.set('uglify', config);

  grunt.loadNpmTasks('grunt-contrib-uglify');
};
