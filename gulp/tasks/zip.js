import del from 'del'
import zipPlugin from 'gulp-zip'

export default () => {
  const {src, dest} = app.gulp
  const {distFolder, rootFolder} = app.path
  const {plumber, notify} = app.plugins

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
    .pipe(zipPlugin(`${rootFolder}.zip`))
    .pipe(dest('./'))
}
