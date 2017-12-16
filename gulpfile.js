'use strict';

/**
 * This file is responsible for registering Gulp tasks and plugins
 * All additional Gulp-related files are located in the `gulp` directory in the Bedrock root
 */


/**
 * Import modules
 */
var fs = require('fs');
var yaml = require('node-yaml');
var gulp = require('gulp');
var gutil = require('gulp-util');


/**
 * Import the config
 * Bedrock comes packaged with a config.yml.sample file
 * If no config.yml file exists, the sample file will be copied to create one
 */
if(!fs.existsSync(__dirname + '/config.yml')) {
  gutil.log(gutil.colors.yellow('No config file found: creating from config.yml.sample'));
  fs.copyFileSync(__dirname + '/config.yml.sample', __dirname + '/config.yml', { overwrite: false });
}
var config = yaml.readSync(__dirname + '/config.yml');
config['root'] = __dirname;


/**
 * Ensure there is an overrides file
 * If no overrides file exists, SASS compilation will throw an error
 * If no file is present, copy the overrides.scss.sample to create one
 */
if(!fs.existsSync(config['root'] + '/src/overrides.scss')) {
  gutil.log(gutil.colors.yellow('No overrides file found: creating from overrides.scss.sample'));
  fs.copyFileSync(config['root'] + '/src/overrides.scss.sample', config['root'] + '/src//overrides.scss', { overwrite: false });
}

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
 * Config
 */
gulp.task('config:delete', loadTask('config/delete'));

/**
 * Styles
 */
gulp.task('styles:clean', loadTask('styles/clean'));
gulp.task('styles:build', loadTask('styles/build'));
gulp.task('styles', gulp.series('styles:clean','styles:build'));

/**
 * Version
 */
gulp.task('version:styles', loadTask('version/styles'));
gulp.task('version:concat', loadTask('version/concat'));
gulp.task('version:clean', loadTask('version/clean'));
gulp.task('version', gulp.series('version:styles', 'version:concat', 'version:clean'));

/**
 * Build
 */
gulp.task('build', gulp.series('styles', 'version'));

/**
 * Default task
 */
gulp.task('default', gulp.series('help'));
