import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ToastContainer, Slide } from 'react-toastify';

// PAGES

import Results from './pages/Results';
import Home from './pages/Home';
import Recipe from './pages/Recipe'
import Favourites from './pages/Favourites';

// COMPONENTS

import Layout from './components/Layout/Layout';
import ScrollToTop from './ScrollToTop';

// STYLES

import 'react-toastify/dist/ReactToastify.css';
import './styles/styles.scss';

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
        limit={1}
        hideProgressBar="true"
        position="top-center" 
        className="toast__container" 
        toastClassName="recipe__added"
      />
        <AnimatePresence exitBeforeEnter>
        <ScrollToTop />
        <Routes>
          <Route element={ 
            <Layout savedCount={savedCount}/>
          }>
            <Route path="recipes" element={<Favourites updateCount={updateCount} savedCount={savedCount}/>} />
            <Route path="search/:id" element={<Results updateCount={updateCount}/>} />
            <Route path=":label" element={<Recipe updateCount={updateCount} count={count}/>} />
            <Route path="/" element={<Home/>} />
          </Route>
        </Routes>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;