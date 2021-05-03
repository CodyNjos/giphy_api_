import React, { useEffect } from 'react';
import { HashRouter as Router, Redirect, Switch } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { useDispatch } from 'react-redux';
import SearchPage from '../SearchPage/SearchPage'
import './App.css'
import Login from '../Login/Login'
import Register from "../Register/Register"
import Nav from '../Nav/Nav'
import Profile from "../Profile/Profile"
import Footer from "../Footer/Footer"


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>

      <div className='app'>
        <div className='content'>
        <Nav />
        <Switch>
          <Redirect exact from="/" to="/login" />
          <ProtectedRoute
            path="/search">
            <SearchPage />
          </ProtectedRoute>

          <ProtectedRoute
            path="/user">
            <Profile />
          </ProtectedRoute>

          <ProtectedRoute
            path="/login"
            authRedirect="/search">
            <Login />
          </ProtectedRoute>

          <ProtectedRoute
            path="/register"
            authRedirect="/search">
            <Register />
          </ProtectedRoute>

        </Switch>
        </div>
        <Footer/>
      </div>
      
    </Router>
  )

};
export default App;