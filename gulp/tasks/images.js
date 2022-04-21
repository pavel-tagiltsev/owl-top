import webp from 'gulp-webp'
import imagemin from 'gulp-imagemin'

export default () => {
  const {isBuild} = app
  const {src, dest} = app.gulp
  const {build, src: source} = app.path
  const {plumber, notify, newer, gulpIf, browserSync} = app.plugins

  return src(source.images)
    .pipe(
      plumber(
        notify.onError({
          title: 'IMAGES',
          message: 'Error: <%= error.message %>'
        })
      )
    )
    .pipe(newer(build.images))
    .pipe(gulpIf(isBuild, webp()))
    .pipe(gulpIf(isBuild, dest(build.images)))
    .pipe(gulpIf(isBuild, src(source.images)))
    .pipe(gulpIf(isBuild, newer(build.images)))
    .pipe(
      gulpIf(
        isBuild,
        imagemin({
          progressive: true,
          svgoPlugins: [{removeViewBox: false}],
          interlaced: true,
          optimizationLevel: 4 // 0 to 7
        })
      )
    )
    .pipe(dest(build.images))
    .pipe(src(source.svg))
    .pipe(dest(build.images))
    .pipe(browserSync.stream())
}
