/**
 * `prod`
 *
 * ---------------------------------------------------------------
 *
 * This Grunt tasklist will be executed instead of `default` when
 * your Sails app is lifted in a production environment (e.g. using
 * `NODE_ENV=production node app`).
 *
 * For more information see:
 *   http://sailsjs.org/documentation/anatomy/my-app/tasks/register/prod-js
 *
 */
module.exports = function(grunt) {
  var tasks = [
    'compileAssets',
    'concat',
    'uglify',
    'cssmin',
    'sails-linker:prodJs',
    'sails-linker:prodStyles',
    'sails-linker:devTpl',
    'sails-linker:prodJsJade',
    'sails-linker:prodStylesJade',
    'sails-linker:devTplJade'
  ];
  var layouts = require('../multilayouts').layouts;
  for (var i in layouts) {
    var layout = layouts[i];
    tasks.push('sails-linker:'+layout + '_prodJs')
  }
  grunt.registerTask('prod', tasks);
};
