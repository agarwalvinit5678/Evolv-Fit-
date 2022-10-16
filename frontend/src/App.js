import './App.css';
import Header from "./component/layout/Header.js";
import Home from "./component/home/home";
import LoginSignUp from './component/User/LoginSignUp';
import {BrowserRouter as Router} from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';
import React from 'react';

function App() {
  return (
  <Router>
   {/* <Header/> */}
  
     <Home/>
    
    
    {/* <LoginSignUp></LoginSignUp> */}
  </Router>
  
  );
}


export default App;
