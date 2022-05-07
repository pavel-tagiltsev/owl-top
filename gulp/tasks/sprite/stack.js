// import svgSprite from 'gulp-svg-sprite'

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

const stackConfig = {
  shape: {
    shape: {
      transform: [
        {
          svgo: {
            plugins: svgoPlugins
          }
        }
      ]
    }
  },
  mode: {
    stack: {
      dest: '.',
      sprite: 'stack-sprite.svg',
      rootviewbox: false
    }
  }
}

export default function stack() {
  const {src, dest} = app.gulp
  const {build, src: source} = app.path

  return src(source.sprite.stack)
    .pipe(app.errorHandler('SVG_STACK'))
    .pipe(app.plugins.svgSprite(stackConfig))
    .pipe(dest(build.images))
}
