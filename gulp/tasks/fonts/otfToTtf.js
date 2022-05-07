import fonter from 'gulp-fonter'

export default function otfToTtf() {
  const {src, dest} = app.gulp
  const {fonts: source} = app.path.src

  return src(`${source}*.otf`)
    .pipe(app.errorHandler('OTF_TO_TTF'))
    .pipe(
      fonter({
        formats: ['ttf']
      })
    )
    .pipe(dest(source))
}
