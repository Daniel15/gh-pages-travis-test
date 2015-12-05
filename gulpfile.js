var gulp = require('gulp');
var webpackStream = require('webpack-stream');

var SITE_OUTPUT_DIR = '_site/';

gulp.task('build', function() {
  return gulp.src('main.js')
    .pipe(webpackStream({
      module: {
        loaders: [
          {
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
              presets: ['es2015']
            },
            test: /\.jsx?$/
          }
        ]
      },
      output: {
        filename: '[name].generated.js',
        libraryTarget: 'umd'
      }
    }))
    .pipe(gulp.dest(SITE_OUTPUT_DIR));
});

gulp.task('copy-misc', function() {
  return gulp.src(['README.md'])
    .pipe(gulp.dest(SITE_OUTPUT_DIR));
});

gulp.task('deploy', ['build', 'copy-misc'], function() {

});
