'use strict';

/**
 * Create stylesheets
 */
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var path = require('path');

module.exports = function(gulp, config) {
	return function(done) {
    var d = path.resolve(config.root, config.css_dest);
    var f = path.resolve(config.root, 'src/bedrock.scss');
    gutil.log(gutil.colors.yellow('Compiling SASS files to ' + d));

    gulp.src(f)
      .pipe(sass())
      .pipe(rename(function(p) { p.extname = '.css', p.basename = config.css_basename }))
      .pipe(gulp.dest(d));
    gulp.src(f)
      .pipe(sass({ outputStyle: 'compressed' }))
      .pipe(rename(function(p) { p.extname = '.min.css', p.basename = config.css_basename }))
      .pipe(gulp.dest(d));

    // Hacky, but couldn't get the concat task to wait for files to write
    setTimeout(function() {
      done();
    }, 200);
	};
};
