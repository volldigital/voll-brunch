// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'app.js': /^app/
    }
  },
  stylesheets: {joinTo: 'app.css'}
};

exports.plugins = {
  pug: {
    basedir: 'app',
    inlineRuntimeFunctions: true,
    doctype: 'html',
    staticPretty: true,
  },
  postcss: {
    processors: [
      require('postcss-import')(),
      require('postcss-apply')(),
      require('postcss-custom-media')(),
      require("postcss-cssnext")(["last 3 versions"]),
      require('csswring')()
    ]
  },
  babel: {
    presets: ['env']
  },
};
