/**
 * Created by mario on 26/10/16.
 */
module.exports = function (grunt) {
  grunt.config.set('nggettext_extract', {
    pot: {
      files: {
        'po/template.pot': [
          'assets/templates/*.html',
          'assets/app/views/*.html',
          'assets/app/controllers/*.js',
          'assets/app/services/*.js',
          'assets/app/directives/*.js',
          'assets/app/*.js',
          'views/**/*.ejs']
      }
    },
  });

  grunt.config.set('nggettext_compile', {
    pot: {
      files: {
        'assets/app/translations/translations.js': ['po/*.po']
      }
    },
  });

  grunt.loadNpmTasks('grunt-angular-gettext');
};
