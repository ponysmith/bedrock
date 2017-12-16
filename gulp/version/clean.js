'use strict';

/**
 * Concat version files and clean up
 */

var gutil = require('gulp-util');
var path = require('path');
var fs = require('fs');

module.exports = function(gulp, config) {
	return function(done) {
    gutil.log(gutil.colors.yellow('Cleaning temporary version files'));
    var dest = path.resolve(config.root, config.css_dest);
    config.css_builds.forEach(function(build, index) {
      var f = dest + '/' + build.basename + '.tmp.version';
      if(fs.existsSync(f)) {
        fs.unlinkSync(f);
      }
    });
    setTimeout(function() {
      done();
    }, 200);
	};
};
