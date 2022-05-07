import del from 'del'

export default function zip() {
  const {src, dest} = app.gulp
  const {distFolder, rootFolder} = app.path
  const {plumber, notify, zip} = app.plugins

  del(`./${rootFolder}.zip`)

  return src(`${distFolder}/**/*.*`)
    .pipe(
      plumber(
        notify.onError({
          title: 'ZIP',
          message: 'Error: <%= error.message %>'
        })
      )
    )
    .pipe(zip(`${rootFolder}.zip`))
    .pipe(dest('./'))
}
