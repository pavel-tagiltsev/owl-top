export default function transferWoff() {
  const {src, dest} = app.gulp
  const {fonts: build} = app.path.build
  const {fonts: source} = app.path.src

  return src(`${source}*.{woff,woff2}`).pipe(dest(build))
}
