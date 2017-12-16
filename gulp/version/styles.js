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
    var dir = path.resolve(config.root, config.css_dest);
    var file_normal = path.resolve(dir, config.css_basename) + '.css';
    var file_minified = path.resolve(dir, config.css_basename) + '.min.css';
    var file_version_tmp = path.resolve(dir, config.css_basename) + '.tmp.version';
    var sha1 = checksum(file_minified).substr(0,10);
    fs.copyFileSync(file_minified, path.resolve(dir, config.css_basename) + '-' + sha1 + '.min.css');
    fs.writeFileSync(file_version_tmp, config.css_basename + '|' + sha1);

    // Hacky, but couldn't get the concat task to wait for the version tasks to complete
    setTimeout(function() {
      done();
    }, 200);
	};
};
