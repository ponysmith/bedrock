'use strict';

/**
 * Create version hash for styles
 */

var gutil = require('gulp-util');
var path = require('path');
var fs = require('fs');
var checksum = require('checksum');

module.exports = function(gulp, config) {
	return function(done) {
    gutil.log(gutil.colors.yellow('Creating versioned files and version mappings'));
    var dest = path.resolve(config.root, config.css_dest);
    config.css_builds.forEach(function(build, index) {
      var dir = path.resolve(config.root, config.css_dest);
      var file_normal = path.resolve(dir, build.basename) + '.css';
      var file_minified = path.resolve(dir, build.basename) + '.min.css';
      var file_version_tmp = path.resolve(dir, build.basename) + '.tmp.version';
      var sha1 = checksum(file_minified).substr(0,10);
      fs.copyFileSync(file_minified, path.resolve(dir, build.basename) + '-' + sha1 + '.min.css');
      fs.writeFileSync(file_version_tmp, build.basename + '|' + sha1);
    });
    setTimeout(function() {
      done();
    }, 200);
	};
};
