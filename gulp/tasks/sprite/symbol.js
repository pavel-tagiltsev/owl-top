import svgSprite from 'gulp-svg-sprite'

const svgoPlugins = [
  {removeViewBox: false},
  {removeUnusedNS: false},
  {removeUselessStrokeAndFill: true},
  {cleanupIDs: false},
  {removeComments: true},
  {removeEmptyAttrs: true},
  {removeEmptyText: true},
  {collapseGroups: true}
]

const symbolConfig = {
  shape: {
    transform: [
      {
        svgo: {
          plugins: [
            ...svgoPlugins,
            ...[{removeAttrs: {attrs: '(fill|stroke|style)'}}]
          ]
        }
      }
    ]
  },
  mode: {
    symbol: {
      dest: '.',
      sprite: 'symbol-sprite.svg'
    }
  }
}

export default () => {
  const {src, dest} = app.gulp
  const {build, src: source} = app.path
  const {plumber, notify} = app.plugins

  return src(source.sprite.symbol)
    .pipe(
      plumber(
        notify.onError({
          title: 'SVG',
          message: 'Error: <%= error.message %>'
        })
      )
    )
    .pipe(svgSprite(symbolConfig))
    .pipe(dest(build.images))
}
