'use strict';

/**
 * Gulp help task
 */
var gutil = require('gulp-util');

module.exports = function(gulp, config) {
	return function(done) {
    gutil.log(" ");
    gutil.log(gutil.colors.gray('------------------------- Bedrock Gulp Tasks -------------------------'));
    gutil.log('gulp', gutil.colors.yellow('[help]              '), gutil.colors.gray('# Display Bedrock Gulp commands'));
    gutil.log('gulp', gutil.colors.yellow('config:delete       '), gutil.colors.gray('# Delete Bedrock config.yml file'));
    gutil.log('gulp', gutil.colors.yellow('build               '), gutil.colors.gray('# Master build task'));
    gutil.log('gulp', gutil.colors.yellow('build:styles        '), gutil.colors.gray('# Build all registered SASS files'));
    gutil.log(" ");
		done();
	};
};
