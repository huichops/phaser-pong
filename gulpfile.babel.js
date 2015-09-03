import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserify from 'browserify';
import babelify from 'babelify';
import watchify from 'watchify';
import browserSync from 'browser-sync';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

function lint(files, options) {
  return () => {
    return gulp.src(files)
      .pipe($.eslint(options))
      .pipe($.eslint.format())
  }
}

gulp.task('lint', lint(['app/**/*.js']));

gulp.task('browserify', () => {
  var bundler = browserify({
    entries: 'app/js/app.js',
    debug: true,
    transform: [babelify]
  });

  bundler = watchify(bundler);

  var rebundle = () => {
    return bundler.bundle()
    .on('error', $.util.log)
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe($.sourcemaps.init({ loadMaps: true }))
    .on('error', $.util.log)
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('.tmp/js'));
  }

  bundler.on('update', rebundle);

  return rebundle();

});

gulp.task('serve', ['browserify', 'lint'], () => {
  browserSync({
    notify: true,
    port: 9000,
    ui: {
      port: 9001
    },
    server: {
      baseDir: ['.tmp', 'app'],
      routes: {
        '/node_modules': 'node_modules'
      }
    }

  });

  gulp.watch([
    'app/*.html',
    'app/js/**/*.js',
    'app/assets/**/*',
    '.tmp/scripts/**/*.js'
  ]).on('change', reload);

  gulp.watch('app/js/**/*.js', ['lint']);
});

