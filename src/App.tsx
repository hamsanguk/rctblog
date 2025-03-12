import React,{JSX} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header'
import './App.css';
import Til from './components/Til';
import Dummy1 from './components/Dummy1';
import Dummy2 from './components/Dummy2';

function App():JSX.Element {
  return (
   <BrowserRouter>

    <div className="App">
      <Header/>
      <Til/>
      <Routes>
        {/*Til 에서 라우트 사용중이라 til내부 라우팅 작동불가*/}
        <Route path='/dummy1' element={<Dummy1/>}/>
        <Route path='/dummy2' element={<Dummy2/>}/>
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
