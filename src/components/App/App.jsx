import React, { useEffect } from 'react';
import {HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { useDispatch } from 'react-redux';
import SearchPage from '../SearchPage/SearchPage'
import './App.css'
import Login from '../Login/Login'
import Register from "../Register/Register"
import Nav from '../Nav/Nav'
import Profile from "../Profile/Profile"


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);
  
  return (
    <Router>
      
    <div className='app'>
    <Nav/>
    <ProtectedRoute
      path="/search">
    <SearchPage/>
    </ProtectedRoute>

    <ProtectedRoute
      path="/user">
    <Profile/>
    </ProtectedRoute>

    <ProtectedRoute
      path="/login"
      authRedirect="/search">
    <Login/>
    </ProtectedRoute>

    <ProtectedRoute
      path="/register"
      authRedirect="/search">
    <Register/>
    </ProtectedRoute>

    </div>
    </Router>
  )

};
export default App;