const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const miniCss = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { config } = require('process');
const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }

  if(isProd) {
    config.minimizer = [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin()
    ]
  }

  return config
}

module.exports = {
  context: path.resolve(__dirname, 'src'),

  mode: 'development',

  entry: './app/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/[name].bundle.js'
  },

  module: {
    rules: [
      {
        test:/.(s*)css$/,
        use: [
          miniCss.loader,
          'css-loader',
          'sass-loader',
        ]
      },

      {
        test: /.(eot|ttf|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[ext]'
        }
      },

      {
        test: /.(png|jpg|svg|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name][ext]'
        }
      }
      /*
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }*/
    ]
  },
  optimization: optimization(),
  /*devtool: isDev ? 'source-map' : '',*/
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true,
      minify: {
        collapseWhitespace: isProd
      }
    }),

    new miniCss({
      filename: 'css/[name].css'
    }),

    new CopyWebpackPlugin({
      patterns: [
            {
                from: "./assets/img/",
                to: "assets/img"
            }
        ]}),

    new CleanWebpackPlugin()
  ]
}
