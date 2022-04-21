import webpack from 'webpack-stream'

export default () => {
  const {isBuild} = app
  const {src, dest} = app.gulp
  const {plumber, notify, browserSync} = app.plugins

  return src(app.path.src.js)
    .pipe(
      plumber(
        notify.onError({
          title: 'JS',
          message: 'Error: <%= error.message %>'
        })
      )
    )
    .pipe(
      webpack({
        mode: isBuild ? 'production' : 'development',
        output: {filename: 'scripts.min.js'}
      })
    )
    .pipe(dest(app.path.build.js))
    .pipe(browserSync.stream())
}
