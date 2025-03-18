import './App.css';
import React,{JSX} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header'
import Til from './components/Til';
import MyWallet from './components/MyWallet';
import Dummy2 from './components/Dummy2';

function App():JSX.Element {
  return (
   <BrowserRouter>

    <div className="App">
      <Header/>
      <Routes>
        {/*Til 에서 라우트 사용중이라 til내부 라우팅 작동불가*/}
        <Route path='/wallet' element={<MyWallet/>}/>
        <Route path='/dummy2' element={<Dummy2/>}/>
      </Routes>
      <Til/>
    </div>
    </BrowserRouter>
  );
}

export default App;
