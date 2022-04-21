import svgSprite from 'gulp-svg-sprite'

export default () => {
  const {src, dest} = app.gulp
  const {build, src: source} = app.path
  const {plumber, notify} = app.plugins

  return src(source.svgSprite)
    .pipe(
      plumber(
        notify.onError({
          title: 'SVG',
          message: 'Error: <%= error.message %>'
        })
      )
    )
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: `../icons/icons.svg`,
            // Создавать страницу с перечнем иконок
            example: true
          }
        }
      })
    )
    .pipe(dest(build.images))
}
