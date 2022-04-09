export default () => {
	const { src, dest } = app.gulp
	const { plumber, notify, pug, browserSync } = app.plugins

	return src(app.path.src.pug)
		.pipe(plumber(
			notify.onError({
				title: 'PUG',
				message: 'Error: <%= error.message %>'
			})
		))
		.pipe(pug({ pretty: app.isDev} ))
		.pipe(dest('build'))
    .pipe(browserSync.stream())
}
