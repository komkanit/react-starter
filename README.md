# react-starter
For CPSK React workshop

### Pre Require
- Nodejs >= 6.4
- npm >= 4.0

### Installation
```
npm install -g yarn
git clone https://github.com/komcal/react-starter.git
cd react-starter
yarn install
```

### Get Started
1. create `.babelrc` file at root of your project
```
{
  "presets": ["react", "es2015", "stage-0"]
}
```
2. create `webpack.config.js` at root of your project
``` javascript
module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_nodules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      }
    ]
  },
  resolve: {
    extensions: ['','.js','.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
```
3. create `index.html` at root of your project
``` html
<!DOCTYPE html>
<html>
    <body>
        <div id='root'></div>
        <script src="/bundle.js"></script>
    </body>
</html>
```
4. create folder `src` and add `index.js` to folder
``` javascript
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
class App extends Component {
  render(){
    return (
      <div>
        <h1>Hello World from React</h1>
      </div>
    );
  }
};
ReactDOM.render(<App />, document.getElementById('root'));
```
5. run `npm start` see `http://localhost:8080`
