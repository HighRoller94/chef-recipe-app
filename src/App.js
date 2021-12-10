import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Results from './pages/Results';

import Navbar from './components/Navbar';

import './styles/styles.scss'

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
        <Route path='/search/:id'>
            <Navbar />
            <Results />
          </Route>
          <Route path='/'>
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
