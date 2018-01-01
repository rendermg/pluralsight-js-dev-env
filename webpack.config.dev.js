import path from 'path';

export default {
  debug: true,  // enables debug info as run build
  devtool: 'inline-source-map',
  noInfo: false,  // lists all the files its including in the bundling
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',  // ex. node/web/electron,etc.
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [],   // hot reloading / linting styles, etc. lots to choose
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders:['style','css']}
    ]
  }
}
