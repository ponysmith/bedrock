'use strict';

/**
 * Delete setup files
 */
var gutil = require('gulp-util');
var path = require('path');
var del = require('del');

module.exports = function(gulp, config) {
	return function(done) {
    var c = path.resolve(config.root, 'config.yml');
    gutil.log(gutil.colors.yellow('Deleting config file: ' + c));
    del(c)
      .then(function(paths) {
        paths.forEach(function(p, i, a) {
          gutil.log(gutil.colors.green('Deleted: ' + p));
        });
      });
		done();
	};
};
