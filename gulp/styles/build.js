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

    // var src = [];
    // config.css_builds.forEach(function(b, i) {
    //   src.push(path.resolve(config.root, b.source));
    // });

    config.css_builds.forEach(function(b, i) {
      var f = path.resolve(config.root, b.source);
      gulp.src(f)
        .pipe(sass())
        .pipe(rename(function(p) { p.extname = '.css', p.basename = b.basename }))
        .pipe(gulp.dest(d));
      gulp.src(f)
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(rename(function(p) { p.extname = '.min.css', p.basename = b.basename }))
        .pipe(gulp.dest(d));
    });


    // gulp.src(src.toString())
    //   .pipe(sass())
    //   .pipe(rename(function(p) { p.extname = '.css', p.basename = 'bedrock' }))
    //   .pipe(gulp.dest(d));
    //
    // gulp.src(src.toString())
    //   .pipe(sass({ outputStyle: 'compressed' }))
    //   .pipe(rename(function(p) { p.extname = '.min.css', p.basename = 'bedrock' }))
    //   .pipe(gulp.dest(d));

    // Allow some time for the files to write
    setTimeout(function() {
      done();
    }, 200);
	};
};
