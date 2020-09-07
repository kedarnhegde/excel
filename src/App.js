import React, {Component} from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/HomePage/HomePage.js';
import Contact from './components/ContactUs/ContactUs.js';
import About from './components/AboutUs/AboutUs.js';
import Footer from './components/Footer/Footer.js';
import Installations from './components/Installations/Installations.js';
import Navbar from './components/Navbar/Navbar.js';
import Products from './components/Products/Productsmain';

class App extends Component {
  render(){
    return (
      <div>
        <Navbar/>
        <Route path = '/' exact component={Home} />
        <Route path = '/contact/' component={Contact} />
        <Route path = '/about/' component={About} />
        <Route path = '/installations/' component={Installations} />
        <Route path = '/products/' component={Products} />
        <Footer />
      </div>
    );
  }
}

export default App;
