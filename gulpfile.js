"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var copy = require("gulp-contrib-copy");

gulp.task("style", function() {
  gulp.src("sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 2 versions"
      ]})
    ]))
    .pipe(gulp.dest("css"))
    .pipe(server.reload({stream: true}));
});

gulp.task("build", function() {

  gulp.src(["*.html"])
    .pipe(copy())
      .pipe(gulp.dest('build'));

  gulp.src(['e-store/*', 'e-store/**/*'])
    .pipe(copy())
      .pipe(gulp.dest('build/e-store'));

  gulp.src(['lookshop/*', 'lookshop/**/*'])
    .pipe(copy())
      .pipe(gulp.dest('build/lookshop'));

  gulp.src(['sedona/*', 'sedona/**/*'])
    .pipe(copy())
      .pipe(gulp.dest('build/sedona'));

  gulp.src(['shoes/*', 'shoes/**/*'])
    .pipe(copy())
      .pipe(gulp.dest('build/shoes'));

  gulp.src(['pink/*', 'pink/**/*'])
    .pipe(copy())
      .pipe(gulp.dest('build/pink'));

  gulp.src('fonts/*')
    .pipe(copy())
      .pipe(gulp.dest('build/fonts'));

  gulp.src("js/*")
    .pipe(copy())
      .pipe(gulp.dest('build/js'));

  gulp.src("css/style.css")
    .pipe(gulp.dest("build/css"));

    return gulp.src("img/**/*.{png,jpg,gif,svg}")
  .pipe(imagemin({
    optimizationLevel: 3,
    progressive: true
    }))
  .pipe(gulp.dest("build/img"));
});


gulp.task("server", ["style"], function() {
  server.init({
    server: ".",
    notify: false,
    open: true,
    ui: false
  });

  gulp.watch("sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("*.html").on("change", server.reload);
});
