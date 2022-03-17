/**
 * date: 2022-03-14, Mon, 20:36
 * author: Wang
 * feature： Webpack 配置
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const friendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'production',
  devtool: 'inline-source-map',
  // 项目入口， webpack 会从这个地方开始
  entry: {
    app: './src/test.jsx',
    // app: './src/index.tsx', // app 就会是下面的 [name] 的值
    // another: './src/another.tsx',
  },
  // output webpack 打包完成后的文件会在这里
  output: {
    path: path.resolve(__dirname, './dist'),
    // 之前这部分是 bundle 现在改成了 [name].[hash:8].js
    filename: '[name].[chunkhash].js', // 注意这个 name 会是我们打包的那个文件的名称（比如 index
    publicPath: '/', // 刚刚在这个地方懵逼了一下， 现在理解这个的作用
    // 是 我们通过 browser 访问这个 项目的时候， 的入口
    // 比如我设置 public path 为 /shuaibi
    // 那么最后当我用 web dev middleware 结合 node express 访问的时候
    // 就会是 localhost:端口号/shuaibi 这样
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  // },
  // web dev server config
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, './dist'),
    },
    open: false,
    hot: true, // hot load ,检测文件的更改
    port: 8082,
  },
  //loader
  module: {
    rules: [
      // JavaScript
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // CSS, PostCSS, and Sass
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      // Fonts and SVGs
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  // 安装的 plugin 工具
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].imstyle.css' }),
    new HtmlWebpackPlugin({
      title: '大帅比的1f1',
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new friendlyErrorsWebpackPlugin(),
    new BundleAnalyzerPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.json', '.tsx'],
  },
};
