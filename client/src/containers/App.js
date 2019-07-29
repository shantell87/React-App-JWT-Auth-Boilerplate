import React, {Component} from 'react';
import Counter from "./Counter";
import Stuff from "./Stuff"

class App extends Component {
  render() {
    return(
      <div>
        <Counter/>
        <Stuff/>
      </div>
    )
  }
}


export default App;
