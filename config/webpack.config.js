module.exports = [{
  entry: './public/assets/css/app.scss',
  output: {
    // This is necessary for webpack to compile
    // But we never use style-bundle.js
    filename: 'style-bundle.js',
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'bundle.css',
          },
        },
        { loader: 'extract-loader' },
        { loader: 'css-loader' },
        { 
          loader: 'sass-loader',
          options: {
            includePaths: ['./node_modules'],
          }
        },
      ]
    }]
  },
  watch: true
}];