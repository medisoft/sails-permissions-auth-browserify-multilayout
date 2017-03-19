/**
 * Created by mario on 26/10/16.
 */
module.exports = function (grunt) {
  grunt.registerTask('translations', ['nggettext_extract', 'nggettext_compile']);
};
