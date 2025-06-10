const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: 'production', // javascript code optimized, minified
  output: {
    filename: '[name].[contenthash].js',  // files build will gonna use this as template
    publicPath: '/container/latest/' // used when some part of webpack is trying to refer to a file that is build by webpack (javascript file created)
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`,
        auth: `auth@${domain}/auth/latest/remoteEntry.js`,
        dashboard: `dashboard@${domain}/dashboard/latest/remoteEntry.js`
      },
      shared: packageJson.dependencies
    })
  ]
}

module.exports = merge(commonConfig, prodConfig);