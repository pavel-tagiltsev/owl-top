import fonter from 'gulp-fonter'
import ttf2woff2 from 'gulp-ttf2woff2'

export default function ttfToWoff() {
  const {src, dest} = app.gulp
  const {fonts: build} = app.path.build
  const {fonts: source} = app.path.src
  const {plumber, notify} = app.plugins

  return src(`${source}*.ttf`)
    .pipe(
      plumber(
        notify.onError({
          title: 'TTF_TO_WOFF',
          message: 'Error: <%= error.message %>'
        })
      )
    )
    .pipe(
      fonter({
        formats: ['woff']
      })
    )
    .pipe(dest(build))
    .pipe(src(`${source}*.ttf`))
    .pipe(ttf2woff2())
    .pipe(dest(build))
}
