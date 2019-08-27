'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const cache = require('gulp-memory-cache');
const merge = require('merge-stream');

const config = require('../conf');

module.exports = () => {
  console.log('start buildPhp task');

  const phpSrc = config.paths.php.src;
  const tasks = config.pages.map(page => {
    return gulp.src([
      `${phpSrc}header.php`,
      `${phpSrc}${page}/*.php`,
      `${phpSrc}footer.php`
    ])
      .pipe(cache(page))
      .pipe(concat(`${page}.php`))
      .pipe(gulp.dest(config.paths.output));
  })

  return merge(tasks);
}