import React, { useState } from 'react';
import './App.css';
import Glavnoe_menu from "./components/menu";
import Partnery from './components/partnery';
import Footer from './components/footer';
import Header from './components/header';
import SRouter from './components/sait-router';

const App = () => {
    return (
      <div>
            <Header />
            <div className='block'>
                <Glavnoe_menu />
                <SRouter />
             </div>
             <Partnery />
             <Footer />
      </div>
    )
}
export default App;