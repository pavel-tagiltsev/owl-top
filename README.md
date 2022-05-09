## Fix some bugs

### "gulp-load-plugins"

In order to rid off a bug with "gulp-load-plugins",
need to follow this https://github.com/jackfranklin/gulp-load-plugins/issues/141

### "svg-sprite"

in order to add an option in "svg-sprite" to delete viewbox in stack mode,
need to add this code

```javascript
    var isViewBox = {}
    if (this.config.rootviewbox !== false) {
      isViewBox = {viewBox: `0 0 ${this.maxDimensions.width} ${this.maxDimensions.height}`};
    }
    var rootAttributes				= _.extend(
      {},
      this.config.svg.rootAttributes,
      isViewBox
    ),
```

at lines 88 - 96 in node_modules\svg-sprite\lib\svg-sprite\mode\stack.js
