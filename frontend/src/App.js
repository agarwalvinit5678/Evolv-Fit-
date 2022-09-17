import './App.css';
import Header from "./component/layout/Header.js";
import Home from "./component/home/home";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import React from 'react';
function App() {
  return (
  <Router>
   <Header/>
    <Home/>
  </Router>
  );
}


export default App;
