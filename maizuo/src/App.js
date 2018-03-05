import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';
import Films from './components/Films';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
            <Route exact path="/" component={Home}/>
            <Route path="/detail/:fid" component={Detail}/>
            <Route path="/Films" component={Films}/>            
        </div>
      </Router>
    )
  }
}

export default App;
