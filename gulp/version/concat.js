'use strict';

/**
 * Concat version files and clean up
 */

var gutil = require('gulp-util');
var path = require('path');
var cat = require('gulp-concat');
var del = require('del');

module.exports = function(gulp, config) {
	return function(done) {
    gutil.log(gutil.colors.yellow('Concatenating temporary .version files'));
    var d = path.resolve(config.root, config.css_dest);
    gulp.src(d + '/*.tmp.version')
      .pipe(cat('.version'))
      .pipe(gulp.dest(config.css_dest));
    // Hacky, but couldn't get the concat task to wait for the version tasks to complete
    setTimeout(function() {
      done();
    }, 200);
	};
};
