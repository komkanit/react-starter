import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './style.css';
class App extends Component {
  onClick = () => {
    console.log('hello');
  }
  render(){
    return (
      <div>
        <h1 className="header">Hello World from React</h1>
        <p>hello</p>
        <button onClick={this.onClick}>click</button>
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('root'));
