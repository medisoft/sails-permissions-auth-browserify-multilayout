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
  var config ={
    options: {
      transform: [['babelify',{ presets: [ 'es2015', 'react', 'stage-1' ]}], [require('grunt-react').browserify]]
    }
  };
  var paths=['public','admin','user'];
  for(p in paths) {
    if(grunt.file.exists('../../app/'+p+'/app.js')) {
      config['public']={
        src: 'app/'+p+'/app.js',
        dest: 'assets/js/browserify/browserify-'+p+'.js'
      }
    }
  }

/*
  js: {
    src: require('../pipeline').browserifyPublicFile,
      dest: 'assets/js/browserify/browserify-public.js'
  },
  jsadmin: {
    src: require('../pipeline').browserifyAdminFile,
      dest: 'assets/js/browserify/browserify-admin.js'
  },
  jsuser: {
    src: require('../pipeline').browserifyUserFile,
      dest: 'assets/js/browserify/browserify-user.js'
  },
*/

  grunt.config.set('browserify', config);

  grunt.loadNpmTasks('grunt-browserify');
};
