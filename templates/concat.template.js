/**
 * `concat`
 *
 * ---------------------------------------------------------------
 *
 * Concatenates the contents of multiple JavaScript and/or CSS files
 * into two new files, each located at `concat/production.js` and
 * `concat/production.css` respectively in `.tmp/public/concat`.
 *
 * This is used as an intermediate step to generate monolithic files
 * that can then be passed in to `uglify` and/or `cssmin` for minification.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-concat
 *
 */
module.exports = function (grunt) {
  var config = {
    js: {
      src: require('../pipeline').jsFilesToInject,
      dest: '.tmp/public/concat/production.js'
    },
    css: {
      src: require('../pipeline').cssFilesToInject,
      dest: '.tmp/public/concat/production.css'
    }
  };


  var layouts = require('../multilayouts').layouts;
  for (var i in layouts) {
    var layout = layouts[i];
    var jsFiles = ['multilayout/**/*-' + layout + '.js'];
    jsFiles = jsFiles.map(function (jsPath) {
      return require('path').join('.tmp/public/', jsPath);
    });

    config[layout + '_js'] = {
      src: jsFiles,
      dest: '.tmp/public/concat/production-'+layout+'.js'
    }
  }

  grunt.config.set('concat', config);
  grunt.loadNpmTasks('grunt-contrib-concat');
};
