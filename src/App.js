import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx'
import Details from './components/details.jsx';
import Cart from './components/cart.jsx';
import Home from './components/home.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './components/modal';
import ProducList from './components/producList';


function App() {
  return (
    <React.Fragment>
    <Navbar />

    <Switch>
      
      <Route path="/details" component={Details} />
      <Route path="/cart" component={Cart} />
      <Route path="/products" component={ProducList} />
      <Route path="/" component={Home} />
       
    </Switch>
    <Footer />
    <Modal />
    </React.Fragment>
  );
}

export default App;
