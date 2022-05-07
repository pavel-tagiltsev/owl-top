import fonter from 'gulp-fonter'

export default function otfToTtf() {
  const {src, dest} = app.gulp
  const {fonts: source} = app.path.src
  const {plumber, notify} = app.plugins

  return src(`${source}*.otf`)
    .pipe(
      plumber(
        notify.onError({
          title: 'OTF_TO_TTF',
          message: 'Error: <%= error.message %>'
        })
      )
    )
    .pipe(
      fonter({
        formats: ['ttf']
      })
    )
    .pipe(dest(source))
}
