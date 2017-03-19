/**
 * Module dependencies
 */

var util = require('util');
var _ = require('lodash');
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
    // if (!scope.args[0]) {
    //   return cb( new Error('Please provide a name for this sails-permissions-auth-browserify-multilayout.') );
    // }

    // scope.rootPath is the base path for this generator
    //
    // e.g. if this generator specified the target:
    // './Foobar.md': { copy: 'Foobar.md' }
    //
    // And someone ran this generator from `/Users/dbowie/sailsStuff`,
    // then `/Users/dbowie/sailsStuff/Foobar.md` would be created.
    if (!scope.rootPath) {
      return cb( INVALID_SCOPE_VARIABLE('rootPath') );
    }


    // Attach defaults
    _.defaults(scope, {
      createdAt: new Date()
    });

    // Decide the output filename for use in targets below:
    // scope.filename = scope.args[0];

    // Add other stuff to the scope for use in our templates:
    scope.whatIsThis = 'an example file created at '+scope.createdAt;

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
    './tasks/config/browserify.js': { template: 'browserify-config.template.js' },
    './tasks/config/babel.js': { template: 'babel-config.template.js' },
    './tasks/config/ngannotate.js': { template: 'ngannotate-config.template.js' },
    './tasks/config/gettext.js': { template: 'gettext-config.template.js' },
    './tasks/register/translations.js': { template: 'translations-register.template.js' },
    './app': { folder: { } },

    './app/public': { folder: {} },
    './app/user': { folder: {} },
    './app/admin': { folder: {} },

    './app/public/app.js': { template: 'browserifyapp.template.js' },
    './app/user/app.js': { template: 'browserifyapp.template.js' },
    './app/admin/app.js': { template: 'browserifyapp.template.js' },

    './assets/app/public/app.js': { template: 'webapp.template.js' },
    './assets/app/user/app.js': { template: 'webapp.template.js' },
    './assets/app/admin/app.js': { template: 'webapp.template.js' },


    './app/public/views': { folder: {} },
    './app/public/controllers': { folder: {} },
    './app/public/models': { folder: {} },
    './app/public/directives': { folder: {} },
    './app/public/filters': { folder: {} },
    './app/public/services': { folder: {} },
    './app/public/translations': { folder: {} },
    './app/public/components': { folder: {} },
    './app/public/reducers': { folder: {} },
    './app/public/actions': { folder: {} },

    './app/user/views': { folder: {} },
    './app/user/controllers': { folder: {} },
    './app/user/models': { folder: {} },
    './app/user/directives': { folder: {} },
    './app/user/filters': { folder: {} },
    './app/user/services': { folder: {} },
    './app/user/translations': { folder: {} },
    './app/user/components': { folder: {} },
    './app/user/reducers': { folder: {} },
    './app/user/actions': { folder: {} },

    './app/admin/views': { folder: {} },
    './app/admin/controllers': { folder: {} },
    './app/admin/models': { folder: {} },
    './app/admin/directives': { folder: {} },
    './app/admin/filters': { folder: {} },
    './app/admin/services': { folder: {} },
    './app/admin/translations': { folder: {} },
    './app/admin/components': { folder: {} },
    './app/admin/reducers': { folder: {} },
    './app/admin/actions': { folder: {} },

    './assets/app': { folder: {} },
    './assets/app/public': { folder: {} },
    './assets/app/user': { folder: {} },
    './assets/app/admin': { folder: {} },


    './assets/app/public/views': { folder: {} },
    './assets/app/public/controllers': { folder: {} },
    './assets/app/public/models': { folder: {} },
    './assets/app/public/directives': { folder: {} },
    './assets/app/public/filters': { folder: {} },
    './assets/app/public/services': { folder: {} },
    './assets/app/public/translations': { folder: {} },
    './assets/app/public/components': { folder: {} },
    './assets/app/public/reducers': { folder: {} },
    './assets/app/public/actions': { folder: {} },

    './assets/app/user/views': { folder: {} },
    './assets/app/user/controllers': { folder: {} },
    './assets/app/user/models': { folder: {} },
    './assets/app/user/directives': { folder: {} },
    './assets/app/user/filters': { folder: {} },
    './assets/app/user/services': { folder: {} },
    './assets/app/user/translations': { folder: {} },
    './assets/app/user/components': { folder: {} },
    './assets/app/user/reducers': { folder: {} },
    './assets/app/user/actions': { folder: {} },

    './assets/app/admin/views': { folder: {} },
    './assets/app/admin/controllers': { folder: {} },
    './assets/app/admin/models': { folder: {} },
    './assets/app/admin/directives': { folder: {} },
    './assets/app/admin/filters': { folder: {} },
    './assets/app/admin/services': { folder: {} },
    './assets/app/admin/translations': { folder: {} },
    './assets/app/admin/components': { folder: {} },
    './assets/app/admin/reducers': { folder: {} },
    './assets/app/admin/actions': { folder: {} },
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

function INVALID_SCOPE_VARIABLE (varname, details, message) {
  var DEFAULT_MESSAGE =
  'Issue encountered in generator "sails-permissions-auth-browserify-multilayout":\n'+
  'Missing required scope variable: `%s`"\n' +
  'If you are the author of `sails-generate-sails-permissions-auth-browserify-multilayout`, please resolve this '+
  'issue and publish a new patch release.';

  message = (message || DEFAULT_MESSAGE) + (details ? '\n'+details : '');
  message = util.inspect(message, varname);

  return new Error(message);
}
