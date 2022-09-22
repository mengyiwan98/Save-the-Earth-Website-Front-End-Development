import './Style/App.css';
import React from 'react';
import { useState } from 'react';
import Home from './Home';
import Sign from './Sign';
import Protection from './Protection';
import About from './About';
import Privacy from './Privacy';
import Nav from './Nav';
import Footer from './Footer';


function App() {

  const [page, setPage] = useState('Home'); 
  
  return (
    <div className="app">
      <Nav page={page} setPage={setPage}/> 
      { page === 'Home' && <Home/> } 
      { page === 'Protection' && <Protection/> }
      { page === 'About' && <About/> }
      { page === 'Privacy' && <Privacy/> } 
      { page === 'Sign Up' && <Sign Up/> }
      <Footer page={page} setPage={setPage}/> 


    </div>
  );
}

export default App;
