'use strict';

/**
 * Concat version files and clean up
 */

var gutil = require('gulp-util');
var path = require('path');
var del = require('del');

module.exports = function(gulp, config) {
	return function(done) {
    gutil.log(gutil.colors.yellow('Cleaning compiled CSS files'));
    var d = path.resolve(config.root, config.css_dest);
    del([d + '/*.css'])
      .then(function(paths) {
        paths.forEach(function(p, i, a) {
          gutil.log(gutil.colors.green('Deleted: ' + p));
        });
      });
    done();
	};
};
