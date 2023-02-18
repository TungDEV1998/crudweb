import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import BaseWebRouter from './components/pages/BaseWebRouter';
import Login from './components/pages/Auth/Login';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>\
    {isLogin ? (<BaseWebRouter setIsLogin={setIsLogin} />) : (<Login setIsLogin={setIsLogin} />)}
    </>

  );
}

export default App;
