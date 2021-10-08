import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Galaxies from './components/pages/Galaxies';
import Stars from './components/pages/Stars';
import Gallery from './components/pages/Gallery';



function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
       <Route path='/galaxies' component={Galaxies} />
        <Route path='/stars' component={Stars} />
        <Route path='/gallery' component={Gallery} />
        <Footer />
      </Switch>
    </Router>
  </>
  );
}

export default App;