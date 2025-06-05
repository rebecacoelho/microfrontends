const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-react', '@babel/preset-env'], // babel vai processar todo o codigo jsx react
            plugins: [ '@babel/plugin-transform-runtime'] // permitir o uso de novas features no browser (ex: async/await)
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};