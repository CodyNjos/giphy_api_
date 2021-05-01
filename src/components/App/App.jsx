import React, { useEffect } from 'react';
import {HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { useDispatch } from 'react-redux';

import SearchPage from '../SearchPage/SearchPage'
import './App.css'
import Login from '../Login/Login'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);
  return (
    <Router>
    <div className='app'>
    <ProtectedRoute
      path="/search">
    <SearchPage/>
    </ProtectedRoute>

    <Route
      path="/login">
    <Login/>
    </Route>
    </div>
    </Router>
  )

};
export default App;