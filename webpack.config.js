const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
 mode: 'development',
 entry: './src/pages/index.ts',
 output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'dogchat.bundle.js',
 },
 plugins: [
  new HtmlWebpackPlugin({
   template: './src/pages/index.html',
   filename: 'index.html',
  }),
 ],
 devServer: {
  static: {
   directory: path.join(__dirname, `dist`),
  },
  compress: false,
  open: true,
  port: 3000,
 },
 resolve: {
  extensions: ['.ts', '.js', '.json'],
  fallback: {
   fs: false,
   path: false,
   os: false,
   require: false,
  },
 },
 module: {
  rules: [
   {
    test: /\.html$/i,
    loader: 'html-loader',
   },
   {
    test: /\.less$/i,
    use: ['style-loader', 'css-loader', 'less-loader'],
    exclude: /(node_modules)/,
   },
   {
    test: /\.tsx?$/,
    use: [
     {
      loader: 'ts-loader',
      options: {
       configFile: path.resolve(__dirname, 'tsconfig.json'),
      },
     },
    ],
    exclude: /(node_modules)/,
   },
   {
    test: /\.pug/,
    use: [
     {
      loader: 'pug-plain-loader',
     },
    ],
   },
  ],
 },
 watchOptions: {
  ignored: /node_modules/,
 },
}
