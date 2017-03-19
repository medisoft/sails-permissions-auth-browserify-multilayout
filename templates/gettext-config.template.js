/**
 * Created by mario on 26/10/16.
 */
module.exports = function (grunt) {
  var paths = grunt.file.expand({}, ['./app/**/*.js', './app/**/*.html', './assets/app/**/*.js', './assets/app/**/*.html', './views/**/*.ejs']);

  grunt.config.set('nggettext_extract', {
    pot: {
      files: {
        'po/template.pot': paths
      }
    },
  });

  grunt.config.set('nggettext_compile', {
    pot: {
      files: {
        'assets/js/ng-translations.js': ['po/*.po']
      }
    },
  });

  grunt.loadNpmTasks('grunt-angular-gettext');
};
