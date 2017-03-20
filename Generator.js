/**
 * Module dependencies
 */

var util = require('util');
var _ = require('lodash');
var grunt = require('grunt');
_.defaults = require('merge-defaults');


/**
 * sails-generate-sails-permissions-auth-browserify-multilayout
 *
 * Usage:
 * `sails generate sails-permissions-auth-browserify-multilayout`
 *
 * @description Generates a sails-permissions-auth-browserify-multilayout
 * @help See http://links.sailsjs.org/docs/generators
 */

module.exports = {

  /**
   * `before()` is run before executing any of the `targets`
   * defined below.
   *
   * This is where we can validate user input, configure default
   * scope variables, get extra dependencies, and so on.
   *
   * @param  {Object} scope
   * @param  {Function} cb    [callback]
   */

  before: function (scope, cb) {

    // scope.args are the raw command line arguments.
    //
    // e.g. if someone runs:
    // $ sails generate sails-permissions-auth-browserify-multilayout user find create update
    // then `scope.args` would be `['user', 'find', 'create', 'update']`
    if (!scope.args[0]) {
      return cb(new Error('Please provide a name for this sails-permissions-auth-browserify-multilayout.'));
    }

    // scope.rootPath is the base path for this generator
    //
    // e.g. if this generator specified the target:
    // './Foobar.md': { copy: 'Foobar.md' }
    //
    // And someone ran this generator from `/Users/dbowie/sailsStuff`,
    // then `/Users/dbowie/sailsStuff/Foobar.md` would be created.
    if (!scope.rootPath) {
      return cb(INVALID_SCOPE_VARIABLE('rootPath'));
    }


    // Attach defaults
    _.defaults(scope, {
      createdAt: new Date()
    });

    // Decide the output filename for use in targets below:
    // scope.filename = scope.args[0];

    // Add other stuff to the scope for use in our templates:
    // scope.whatIsThis = 'an example file created at '+scope.createdAt;
    scope.layout = [scope.args[0]];
    scope.filename = scope.args[0];

    if (grunt.file.exists('./tasks/multilayouts.js')) {
      var existentes = require('../tasks/multilayouts.js')
      scope.layout = _.union(scope.layout, existentes.layouts);
    }

    // When finished, we trigger a callback with no error
    // to begin generating files/folders as specified by
    // the `targets` below.
    cb();
  },


  /**
   * The files/folders to generate.
   * @type {Object}
   */

  targets: {

    // Usage:
    // './path/to/destination.foo': { someHelper: opts }

    // Creates a dynamically-named file relative to `scope.rootPath`
    // (defined by the `filename` scope variable).
    //
    // The `template` helper reads the specified template, making the
    // entire scope available to it (uses underscore/JST/ejs syntax).
    // Then the file is copied into the specified destination (on the left).
    // './:filename': { template: 'example.template.js' },
    './tasks/register/compileAssets.js': {template: 'compileAssets.template.js'},
    './tasks/register/linkAssets.js': {template: 'linkAssets.template.js'},
    './tasks/register/prod.js': {template: 'prod.template.js'},
    './tasks/config/sails-linker.js': {template: 'sails-linker.template.js'},
    './tasks/config/concat.js': {template: 'concat.template.js'},
    './tasks/config/uglify.js': {template: 'uglify.template.js'},
    './tasks/multilayouts.js': {template: 'multilayouts.template.js'},

    './tasks/config/browserify.js': {template: 'browserify-config.template.js'},
    './tasks/config/gettext.js': {template: 'gettext-config.template.js'},
    './tasks/register/translations.js': {template: 'translations-register.template.js'},

    // './views/layouts': {folder: {}},
    // './app': {folder: {}},

    './views/layouts/:filename.ejs': {template: 'layout.template.ejs'},
    './app/:filename': {folder: {}},
    './app/:filename/app.js': {template: 'browserifyapp.template.js'},
    './app/:filename/views': {folder: {}},
    './app/:filename/controllers': {folder: {}},
    './app/:filename/models': {folder: {}},
    './app/:filename/directives': {folder: {}},
    './app/:filename/filters': {folder: {}},
    './app/:filename/services': {folder: {}},
    './app/:filename/translations': {folder: {}},
    './app/:filename/components': {folder: {}},
    './app/:filename/reducers': {folder: {}},
    './app/:filename/actions': {folder: {}},

    /*
     './assets/app': { folder: {} },
     './assets/app/:filename': { folder: {} },
     './assets/app/:filename/app.js': { template: 'webapp.template.js' },
     './assets/app/:filename/views': { folder: {} },
     './assets/app/:filename/controllers': { folder: {} },
     './assets/app/:filename/models': { folder: {} },
     './assets/app/:filename/directives': { folder: {} },
     './assets/app/:filename/filters': { folder: {} },
     './assets/app/:filename/services': { folder: {} },
     './assets/app/:filename/translations': { folder: {} },
     './assets/app/:filename/components': { folder: {} },
     './assets/app/:filename/reducers': { folder: {} },
     './assets/app/:filename/actions': { folder: {} },
     */
  },


  /**
   * The absolute path to the `templates` for this generator
   * (for use with the `template` helper)
   *
   * @type {String}
   */
  templatesDirectory: require('path').resolve(__dirname, './templates')
};


/**
 * INVALID_SCOPE_VARIABLE()
 *
 * Helper method to put together a nice error about a missing or invalid
 * scope variable. We should always validate any required scope variables
 * to avoid inadvertently smashing someone's filesystem.
 *
 * @param {String} varname [the name of the missing/invalid scope variable]
 * @param {String} details [optional - additional details to display on the console]
 * @param {String} message [optional - override for the default message]
 * @return {Error}
 * @api private
 */

function INVALID_SCOPE_VARIABLE(varname, details, message) {
  var DEFAULT_MESSAGE =
    'Issue encountered in generator "sails-permissions-auth-browserify-multilayout":\n' +
    'Missing required scope variable: `%s`"\n' +
    'If you are the author of `sails-generate-sails-permissions-auth-browserify-multilayout`, please resolve this ' +
    'issue and publish a new patch release.';

  message = (message || DEFAULT_MESSAGE) + (details ? '\n' + details : '');
  message = util.inspect(message, varname);

  return new Error(message);
}
