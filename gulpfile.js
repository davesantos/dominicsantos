const { watch, src, dest, series } = require('gulp');
const { exec } = require('child_process');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;


const paths = {
  build: '_site',
  css: 'css',
  scripts: ['js']
};

const cssFiles = [
  'css/**/*',
]

const jsFiles = [
  'js/*.js'
]

const jekyllFiles = [
  '*.{html,yml,md}',
  '_posts/*.markdown',
  '_posts/*.md',
  '_layouts/*.html',
  '_includes/*.html'
]


// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean(cb) {
  // body omitted
  cb();
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb) {
  exec('bundle exec jekyll build', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
}

function serve() {

  browserSync.init({
   server: {
     baseDir: paths.build
   },
   notify: false,
   open: false
  });

  watch(cssFiles, series(build));
  watch(paths.build + '/**/*').on('all', reload);
};

exports.build = build;
exports.default = series(clean, build, serve);
