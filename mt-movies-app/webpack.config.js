const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const extractSass = new ExtractTextPlugin({
  filename: '[name].[hash].css',
  disable: process.env.NODE_ENV === 'development',
});
const Dotenv = require('dotenv-webpack');

module.exports = {
  // mode: 'production',
  entry: [ "regenerator-runtime/runtime.js", './src/index.js' ],
  output: {
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.(esm|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(woff|woff2|ttf|eot|otf)$/,
        use: 'file-loader?name=fonts/[name].[ext]!static'
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              // name: "./images/[name].[hash].[ext]",
              name: '[path][name]-[hash:8].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
          // use style-loader in development
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.css$/,
        use: extractSass.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
    ],
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  plugins: [
    new Dotenv(),
    extractSass,
    // new ExtractTextPlugin('[name].[hash].css'),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new CleanWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
};
