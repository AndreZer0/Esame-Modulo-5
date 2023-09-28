/** @format */

import React from 'react';

import Context from './context/Context';
import { BrowserRouter, Routes, Route, Switch, Link } from 'react-router-dom';

import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import Error from './pages/Error';

const App = () => {
  return (
    <Context>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path='/'
            element={<Home />}
          />
          <Route
            path='/bookdetail/:bookasin'
            element={<BookDetails />}
          />
          <Route
            path='*'
            element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </Context>
  );
};

export default App;
