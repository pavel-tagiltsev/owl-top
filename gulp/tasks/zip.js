import del from 'del'

export default function zip() {
  const {src, dest} = app.gulp
  const {distFolder, rootFolder} = app.path
  const {zip} = app.plugins

  del(`./${rootFolder}.zip`)

  return src(`${distFolder}/**/*.*`)
    .pipe(app.errorHandler('ZIP'))
    .pipe(zip(`${rootFolder}.zip`))
    .pipe(dest('./'))
}
