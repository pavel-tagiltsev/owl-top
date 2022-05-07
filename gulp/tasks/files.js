export default function files() {
  return app.gulp
    .src(app.path.src.files)
    .pipe(app.gulp.dest(app.path.build.files))
}
