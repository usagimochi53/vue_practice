const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  mode: "development",
  entry: './static/src/app.js',
  output: {
    path: __dirname + '/public/dist',
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: [
            "@babel/preset-env"
          ]
        }
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
    ]
	},
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  plugins: [new VueLoaderPlugin()],
}
