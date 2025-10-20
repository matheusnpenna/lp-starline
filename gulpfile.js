var gulp = require('gulp');
// const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minifyCSS = require('gulp-css');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const purgecss = require('gulp-purgecss');
const postcss = require("gulp-postcss");

gulp.task('scss', function() {
  const tailwindcss = require("tailwindcss");
  const autoprefixer = require("autoprefixer");
  const config = require('./tailwind.config.js');
  
  return gulp.src('frontend/scss/app.scss')
    .pipe(sass())
    .pipe(postcss([tailwindcss(config), autoprefixer()]))
    .pipe(purgecss({
      content: ['dist/**/*.html'],
      defaultExtractor: (c) => c.match(/[\w\-:.\/\[#%\]]+(?<!:)/g) || [],
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/assets/css'))
});

gulp.task('js', function() {
  return gulp.src('frontend/js/*.js')
    .pipe(concat('app.js'))
    .pipe(minify())
    .pipe(gulp.dest('dist/assets/js'))
});

gulp.task('watch', function() {
  gulp.watch('dist/**/*.html', gulp.series('scss'));
  gulp.watch('dist/**/*.html', gulp.series('js'));
  gulp.watch('frontend/js/*', gulp.series('js'));
  gulp.watch('frontend/scss/*', gulp.series('scss'));
  gulp.watch('./tailwind.config.js', gulp.series('scss'));
});

gulp.task('default', gulp.series("scss", "js", "watch"));
