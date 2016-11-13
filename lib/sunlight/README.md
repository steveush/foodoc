# Sunlight Highlighter

I've compiled the sunlight source into a single JS file and I've only included the default theme which more closely matches the foo-jsdoc's theme.
 
This is not included as an NPM module as quite simply there is none available at present.

For future reference the compiled JS file was created using the following uglify configuration and version 1.22.0 of sunlight grabbed from https://github.com/tmont/sunlight:

```javascript
uglify : {
    sunlight: {
        files: {
            'lib/sunlight/sunlight.min.js': [
                'sunlight/src/sunlight.js',
                'sunlight/src/lang/sunlight.xml.js',
                'sunlight/src/jquery.sunlight.js',
                'sunlight/src/lang/*.js',
                'sunlight/src/plugins/*.js'
            ]
        }
    }
}
```

The CSS is simply the following:

```css
cssmin: {
    sunlight: {
        files: {
            'lib/sunlight/sunlight.min.css': [
                'sunlight/src/themes/sunlight.default.css'
            ]
        }
    }
}
```