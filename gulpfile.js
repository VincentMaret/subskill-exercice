'use strict';

const gulp = require('gulp');

const config = require('./conf');

const buildStyles = require('./tasks/build-styles');
const buildScripts = require('./tasks/build-scripts');
const buildPhp = require('./tasks/build-php');


gulp.task('buildStyles', buildStyles);
gulp.task('buildScripts', buildScripts);
gulp.task('buildPhp', buildPhp);
gulp.task('watch', watch);


function watch() {
  gulp.watch(config.paths.scripts.src, buildScripts);
  gulp.watch(config.paths.styles.src, buildStyles);
  gulp.watch(`${config.paths.php.src}**/*.php`, buildPhp);
}


