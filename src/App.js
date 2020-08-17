import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Components/PrankPage/PrankPage';
import Home from './Components/HomePage/HomePage';
import Contact from './Components/ContactUs/ContactUs';
import About from './Components/AboutUs/AboutUs';
import Footer from './Components/Footer/Footer';

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
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
