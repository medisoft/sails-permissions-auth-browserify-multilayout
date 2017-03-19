/**
 * Created by mario on 14/11/16.
 */

module.exports = function(grunt) {

  grunt.config.set('ngAnnotate', {
    options: {
      singleQuotes: true
    },
    app: {
      files: {
        '.tmp/public/ngannotate/production.js': ['.tmp/public/concat/production.js'],
        '.tmp/public/ngannotate/production-admin.js': ['.tmp/public/concat/production-admin.js'],
        '.tmp/public/ngannotate/production-user.js': ['.tmp/public/concat/production-user.js'],
      }
    },
  });

  grunt.loadNpmTasks('grunt-ng-annotate');
};
