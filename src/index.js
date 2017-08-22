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
