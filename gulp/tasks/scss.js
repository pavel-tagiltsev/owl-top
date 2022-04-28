import dartSass from 'sass'
import gulpSass from 'gulp-sass'

import csso from 'postcss-csso'
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer'
import sourcemaps from 'gulp-sourcemaps'
import groupCssMediaQueries from 'gulp-group-css-media-queries'

const sass = gulpSass(dartSass)

export default () => {
  const {isDev, isBuild} = app
  const {src, dest} = app.gulp
  const {plumber, notify, rename, replace, gulpIf, browserSync} = app.plugins

  return src(app.path.src.scss)
    .pipe(
      plumber(
        notify.onError({
          title: 'SCSS',
          message: 'Error: <%= error.message %>'
        })
      )
    )
    .pipe(gulpIf(isDev, sourcemaps.init()))
    .pipe(replace(/@img\//g, '../images/'))
    .pipe(
      sass({
        includePaths: [
          './node_modules/normalize.css/',
          './node_modules/include-media/dist/'
        ],
        outputStyle: 'expanded'
      })
    )
    .pipe(gulpIf(isBuild, groupCssMediaQueries()))
    .pipe(gulpIf(isBuild, postcss([autoprefixer()])))
    .pipe(gulpIf(isBuild, dest(app.path.build.css)))
    .pipe(postcss([csso()]))
    .pipe(rename('styles.min.css'))
    .pipe(gulpIf(isDev, sourcemaps.write('.')))
    .pipe(dest(app.path.build.css))
    .pipe(browserSync.stream())
}
