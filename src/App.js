import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'
import { ToastContainer, Slide } from 'react-toastify';

// PAGES

import Results from './pages/Results';
import Home from './pages/Home';
import Recipe from './pages/Recipe'
import Favourites from './pages/Favourites';

// COMPONENTS

import Search from './components/Search';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import ScrollToTop from './ScrollToTop';

import 'react-toastify/dist/ReactToastify.css';
import './styles/styles.scss'

function App() {
  const [savedCount, setSavedCount] = useState();
  const [count, setCount] = useState();

  useEffect(() => {
      if (localStorage.getItem('savedRecipes') == null) {
        localStorage.setItem('savedRecipes', '[]');
      }

      getRecipeCount();
  }, [count])

  const getRecipeCount = () => {
    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes'));
    setSavedCount(savedRecipes.length);
    setCount(0);
  }

  const updateCount = () => {
    setCount(count+1);
  }

  return (
    <div className="app">
      <Router>
      <ToastContainer 
        autoClose={2000}
        transition={Slide}
        hideProgressBar="true"
        position="top-right" 
        className="toast__container" 
        toastClassName="recipe__added"
      />
        <AnimatePresence exitBeforeEnter>
        <ScrollToTop />
        <Switch>
          <Route path='/recipes'>
            <Navbar savedCount={savedCount} />
            <Favourites updateCount={updateCount} savedCount={savedCount}/>
            <Footer />
          </Route>
          <Route path='/search/:id'>
            <Navbar savedCount={savedCount} />
            <Results updateCount={updateCount}/>
            <Footer />
          </Route>
          <Route path='/:label'>
            <Navbar savedCount={savedCount} />
            <Recipe count={count} updateCount={updateCount} />
            <Footer />
          </Route>
          <Route path='/'>
            <Navbar savedCount={savedCount} />
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