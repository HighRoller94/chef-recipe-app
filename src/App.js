import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'

import Search from './components/Search';
import Results from './pages/Results';
import Home from './pages/Home';
import Recipe from './pages/Recipe'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import ScrollToTop from './ScrollToTop';

import './styles/styles.scss'

function App() {
  return (
    <div className="app">
      <Router>
        <AnimatePresence exitBeforeEnter>
        <ScrollToTop />
        <Switch>
          <Route path='/search/:id'>
            <Navbar />
            <Results />
            <Footer />
          </Route>
          <Route path='/:label'>
            <Navbar />
            <Recipe />
            <Footer />
          </Route>
          <Route path='/'>
            <Navbar />
            <Search />
            <Home />
            <Footer />
          </Route>
        </Switch>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;