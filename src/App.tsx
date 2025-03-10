import React,{JSX} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header'
import './App.css';
import Til from './components/Til';

function App():JSX.Element {
  return (
   <BrowserRouter>

    <div className="App">
      <Header/>
      <Til/>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
