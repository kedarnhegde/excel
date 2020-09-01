import React, {Component} from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/HomePage/HomePage.js';
import Contact from './components/ContactUs/ContactUs.js';
import About from './components/AboutUs/AboutUs.js';
import Footer from './components/Footer/Footer.js';
import Installments from './components/Installments/Installments.js';
import Navbar from './components/Navbar/Navbar.js';

class App extends Component {
  render(){
    return (
      <div>
        <Navbar/>
        <Route path = '/' exact component={Home} />
        <Route path = '/contact' component={Contact} />
        <Route path = '/about' component={About} />
        <Route path = '/installments' component={Installments} />
        <Footer />
      </div>
    );
  }
}

export default App;
