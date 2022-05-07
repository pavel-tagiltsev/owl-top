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

export default function symbol() {
  const {src, dest} = app.gulp
  const {build, src: source} = app.path

  return src(source.sprite.symbol)
    .pipe(app.errorHandler('SVG_SYMBOL'))
    .pipe(svgSprite(symbolConfig))
    .pipe(dest(build.images))
}
