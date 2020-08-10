import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Components/prankPage';

class App extends Component {
  render(){
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path = '/' exact component={Main} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
