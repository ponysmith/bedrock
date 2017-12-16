'use strict';

/**
 * Concat version files and clean up
 */

var gutil = require('gulp-util');
var path = require('path');
var fs = require('fs');
var del = require('del');

module.exports = function(gulp, config) {
	return function(done) {
    gutil.log(gutil.colors.yellow('Cleaning temporary version files'));
    var f = path.resolve(config.root, '/*.tmp.version');
    del(f)
      .then(function(paths) {
        paths.forEach(function(p, i, a) {
          gutil.log(gutil.colors.green('Deleted: ' + p));
        });
      });
    done();
	};
};
