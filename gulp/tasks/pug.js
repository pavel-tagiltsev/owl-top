import pug from 'gulp-pug'
import webpHtmlNosvg from 'gulp-webp-html-nosvg'

export default () => {
  const {src, dest} = app.gulp
  const {plumber, notify, browserSync, gulpIf, replace} = app.plugins

  return src(app.path.src.pug)
    .pipe(
      plumber(
        notify.onError({
          title: 'PUG',
          message: 'Error: <%= error.message %>'
        })
      )
    )
    .pipe(pug({pretty: app.isDev}))
    .pipe(replace(/@img\//g, 'images/'))
    .pipe(gulpIf(app.isBuild, webpHtmlNosvg()))
    .pipe(dest(app.path.build.html))
    .pipe(browserSync.stream())
}
