'use strict';

import gulp from 'gulp';
import browserSync from 'browser-sync';
import child_process from 'child_process';
import sass from 'gulp-sass';

const exec = child_process.exec;

const paths = {
  build: '_site',
  css: 'css',
  sass: ['css'],
  scripts: ['js']
};

const sassFiles = [
  'css/**/*',
  '_sass/**/*'
]

const jsFiles = [
  'js/src/*.js',
  'js/vendor/*.js',
  'js/*.js'
]

const jekyllFiles = [
  '*.{html,yml,md}',
  '_posts/*.markdown',
  '_posts/*.md',
  '_layouts/*.html',
  '_includes/*.html'
]

// Unused
const errorHandler = error => {
  console.error(String(error));
  this.emit('end');
  browserSync.notify('Error');
}

const webpackBuild = cb => {
  exec('npm run build', function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
}

gulp.task('sass', () => {
  return gulp.src(sassFiles)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(paths.build + '/' + paths.css));
});

// gulp.task('js', function() {
//   return gulp.src(jsFiles)
//     .pipe(gulp.dest(paths.build + '/' + paths.scripts))
//   return stream;
// });

gulp.task('jekyll-build', cb => {
  exec('bundle exec jekyll build', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('js:webpack', webpackBuild );

gulp.task('serve', gulp.series(gulp.parallel('jekyll-build', 'js:webpack'), done => {

  browserSync.init({
   server: {
     baseDir: paths.build
   }
  });

   gulp.watch(sassFiles).on('change', gulp.series('jekyll-build'));
   gulp.watch(jsFiles).on('change', gulp.series('js:webpack'));
   gulp.watch(jekyllFiles).on('all', gulp.series('jekyll-build'));
   gulp.watch(paths.build + '/**/*').on('all', browserSync.reload);
   return console.log('Serve function ran'), done();
}));

gulp.task('default', gulp.series('serve'));