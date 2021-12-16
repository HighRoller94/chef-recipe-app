import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Search from './components/Search';
import Results from './pages/Results';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import ScrollToTop from './ScrollToTop';

import './styles/styles.scss'

function App() {
  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Switch>
        <Route path='/search/:id'>
            <Navbar />
            <Results />
            <Footer />
          </Route>
          <Route path='/'>
            <Navbar />
            <Search />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
