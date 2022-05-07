import webpack from 'webpack-stream'

export default function js() {
  const {isBuild} = app
  const {src, dest} = app.gulp
  const {browserSync} = app.plugins

  return src(app.path.src.js)
    .pipe(app.errorHandler('JS'))
    .pipe(
      webpack({
        mode: isBuild ? 'production' : 'development',
        output: {filename: 'scripts.min.js'}
      })
    )
    .pipe(dest(app.path.build.js))
    .pipe(browserSync.stream())
}
