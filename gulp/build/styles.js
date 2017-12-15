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
    gutil.log(gutil.colors.yellow('Compiling SASS files to ' + d));
    config.css_builds.forEach(function(build, index) {
      var s = path.resolve(config.root, build.source);
      gutil.log(gutil.colors.yellow('Building source file: ' + s));
      gulp.src(s)
        .pipe(sass())
        .pipe(rename(build.basename + '.css'))
        .pipe(gulp.dest(d));
      gulp.src(s)
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(rename(build.basename + '.min.css'))
        .pipe(gulp.dest(d));
    });
    done();
	};
};
