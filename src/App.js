import React from 'react';
import { Navbar,Brand,Cta} from './components';
import {Blog, Footer, Header, Possibility, WhatGPT3, } from './containers';
import './App.css'
function App() {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar/>
          <Header/>          
        </div>
        <Brand/>                                                            
        <WhatGPT3/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
    </div>
  );
}
export default App;
