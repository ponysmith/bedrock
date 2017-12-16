'use strict';

/**
 * Delete setup files
 */
var gutil = require('gulp-util');
var fs = require('fs');

module.exports = function(gulp, config) {
	return function(done) {
    gutil.log(gutil.colors.yellow('Deleting config file: ' + config.root + '/config.yml'));
    fs.unlinkSync(config.root + '/config.yml');
    gutil.log(gutil.colors.green('Bedrock config file deleted'));
		done();
	};
};
