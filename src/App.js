import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Components/PrankPage';
import Home from './Components/HomePage';
import Contact from './Components/ContactUs';
import About from './Components/AboutUs';

class App extends Component {
  render(){
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path = '/' exact component={Main} />
            <Route path = '/home' component={Home} />
            <Route path = '/contact' component={Contact} />
            <Route path = '/about' component={About} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
