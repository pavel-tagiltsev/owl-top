import dartSass from 'sass'
import gulpSass from 'gulp-sass'

import csso from 'postcss-csso' // Сжатие CSS файла
import postcss from 'gulp-postcss' // Для обработки CSS
import autoprefixer from 'autoprefixer' // Добавление вендорных префиксов
import sourcemaps from 'gulp-sourcemaps' // Создание sourcemaps
import groupCssMediaQueries from 'gulp-group-css-media-queries' // Группировка медиа запросов

const sass = gulpSass(dartSass) // Преобразование CSCC в CSS

export default () => {
  const { isDev, isBuild } = app
  const { src, dest } = app.gulp
  const { plumber, notify, rename, replace, gulpIf, browserSync } = app.plugins

  return src(app.path.src.scss)
    .pipe(plumber(
      notify.onError({
        title: 'SCSS',
        message: 'Error: <%= error.message %>'
      })
    ))
    .pipe(gulpIf(isDev, sourcemaps.init()))
    .pipe(replace(/@img\//g, '../images/'))
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(gulpIf(isBuild, groupCssMediaQueries()))
    .pipe(gulpIf(isBuild, postcss([ autoprefixer() ])))
    .pipe(gulpIf(isBuild, rename('style.css')))
    .pipe(gulpIf(isBuild, dest(app.path.build.css)))
    .pipe(postcss([ csso() ]))
    .pipe(rename('style.min.css'))
    .pipe(gulpIf(isDev, sourcemaps.write('.')))
    .pipe(dest(app.path.build.css))
    .pipe(browserSync.stream())
}
