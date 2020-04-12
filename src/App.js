import React,{Component} from 'react';
import '../css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>My first App with ES6</p>
        </header>
          <p>My first body...  Enjoy it!</p>
      </div>
    );
  }
}

export default App;
