/**
 * `linkAssets`
 *
 * ---------------------------------------------------------------
 *
 * This Grunt tasklist is not designed to be used directly-- rather
 * it is a helper called by the `default` tasklist and the `watch` task
 * (but only if the `grunt-sails-linker` package is in use).
 *
 * For more information see:
 *   http://sailsjs.org/documentation/anatomy/my-app/tasks/register/link-assets-js
 *
 */
module.exports = function (grunt) {
  var tasks = [
    'browserify',
    'sails-linker:devJs',
    'sails-linker:devStyles',
    'sails-linker:devTpl',
    'sails-linker:devJsJade',
    'sails-linker:devStylesJade',
    'sails-linker:devTplJade',
  ];
  var layouts = require('../multilayouts').layouts;
  for (var i in layouts) {
    var layout = layouts[i];
    tasks.push('sails-linker:'+layout + '_devJs')
  }
  grunt.registerTask('linkAssets', tasks);
};
