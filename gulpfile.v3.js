'use strict';

/**
 * This file is responsible for registering Gulp tasks and plugins
 * All additional Gulp-related files are located in the `gulp` directory in the Bedrock root
 */


/**
 * Import modules
 */
var fs = require('fs-extra');
var yaml = require('node-yaml');
var gulp = require('gulp');
var gutil = require('gulp-util');


/**
 * Import the config
 * Bedrock comes packaged with a config.yml.sample file
 * If no config.yml file exists, the sample file will be copied to create one
 */
if(!fs.existsSync()) {
  fs.copySync(__dirname + '/config.yml.sample', __dirname + '/config.yml', { overwrite: false });
}
var config = yaml.readSync(__dirname + '/config.yml');
config['root'] = __dirname;


/**
 * Load tasks
 */
function loadTask(task) {
	return require('./gulp/' + task)(gulp, config);
}


/**
 * ===========================================================
 * Gulp Tasks
 * ===========================================================
 */

/**
 * Help
 */
gulp.task('help', loadTask('help/help'));


/**
 * Config file tasks
 */
gulp.task('config:delete', loadTask('config/delete'));


/**
 * Master build task
 */


/**
 * Build styles
 */
gulp.task('build', ['clean']);
gulp.task('build:version', ['build:styles']);


/**
 * Styles
 */
gulp.task('styles:build', loadTask('styles/build'));


/**
 * Versioning
 */
gulp.task('version', ['version:concat']);
gulp.task('version:concat', ['version:styles'], loadTask('version/concat'));
gulp.task('version:styles', ['styles:build'], loadTask('version/styles'));
// gulp.task('version:scripts', loadTask('version/scripts'));
// gulp.task('version', ['version:styles', 'version:scripts']);


/**
 * Clean files
 */
gulp.task('clean', ['clean:versions']);
gulp.task('clean:versions', ['version'], loadTask('clean/versions'));


/**
 * Default task
 */
gulp.task('default', gulp.series('help'));

/**
 * Build components
 */
// gulp.task('components', loadTask('components'));


/**
 * Default task (watch for changes and rebuild dev assets)
 */
// gulp.task('watch', ['build'], function() {
	// gulp.watch('src/**/*.scss', ['build']);
  // gulp.watch('css/styles.css', ['version:styles']);
// });
