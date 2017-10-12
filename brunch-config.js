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
      require('autoprefixer')(['last 8 versions']),
      require('csswring')()
    ]
  },
  babel: {
    presets: ['env']
  },
};
