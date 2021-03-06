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
  var config = {
    options: {
      transform: [
        ['babelify', {presets: ['es2015', 'react', 'stage-1']}],
        require('grunt-react').browserify,
        require('browserify-ngannotate')
      ]
    }
  };
  var paths = grunt.file.expand({}, ['./app/*']);
  for (k in paths) {
    var p = paths[k];
    if (grunt.file.exists(p + '/app.js')) {
      var segment = p.split('/')[2];
      config[p] = {
        src: p + '/app.js',
        dest: 'assets/multilayout/browserify-' + segment + '.js'
      }
    }
  }
  grunt.config.set('browserify', config);

  grunt.loadNpmTasks('grunt-browserify');
};
