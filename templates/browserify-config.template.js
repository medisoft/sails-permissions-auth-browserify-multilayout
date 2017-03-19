/**
 * Browserify files with React as an option.
 *
 * ---------------------------------------------------------------
 *
 * Concatenates files javascript and css from a defined array. Creates concatenated files in
 * .tmp/public/contact directory
 * [browserify](https://github.com/gruntjs/grunt-browserify)
 *
 * For usage docs see:
 *    https://github.com/gruntjs/grunt-browserify
 */
module.exports = function (grunt) {

  var version = grunt.file.readJSON('package.json').version;

  grunt.config.set('browserify', {
    js: {
      src: require('../pipeline').browserifyMainFile,
      dest: 'assets/js/browserify/browserify-public.js'
    },
    jsadmin: {
      src: require('../pipeline').browserifyMainFile,
      dest: 'assets/js/browserify/browserify-admin.js'
    },
    jsuser: {
      src: require('../pipeline').browserifyUserFile,
      dest: 'assets/js/browserify/browserify-user.js'
    },
    options: {
      transform: [['babelify',{ presets: [ 'es2015', 'react', 'stage-1' ]}], [require('grunt-react').browserify]]
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
};
