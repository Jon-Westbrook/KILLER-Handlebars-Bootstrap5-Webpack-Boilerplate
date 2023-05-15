'use strict';

import gulp from 'gulp';
import { paths } from '../gulpfile.js';


// -------------------------------------
//   Task: fonts
// -------------------------------------

gulp.task('videos', function () {
  return gulp.src(paths.videos.src)
    .pipe(gulp.dest(paths.videos.dist));
});
