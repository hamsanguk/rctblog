import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Til from './components/Til';
import MyWallet from './components/MyWallet';
import Explorer from './components/Explorer';
import TxPage from './components/TxPage';
import BlockPage from './components/BlockPage';
import Address from './components/Address';
import MintNft from './components/MintNft';
import NFTDetail from './components/NFTdetail'
import MintForm from './components/MintForm';

function App() {
  return (
    <BrowserRouter basename="/rctblog">
      <div className="App">
        <Header />
        <Routes>
         
          <Route path="/wallet" element={<MyWallet />} />
          <Route path="/explorer" element={<Explorer />} />
          <Route path="/explorer/tx/:txHash" element={<TxPage />} />
          <Route path="/explorer/block/:blockNumber" element={<BlockPage />} />
          <Route path="/explorer/address/:address" element={<Address />} /> {/* 추가된 주소 페이지 경로 */}
          <Route path="/mintNft" element={<MintNft/>}/>
          <Route path="/nft/:tokenId" element={<NFTDetail/>}/>
          <Route path="/mint" element={<MintForm/>}/>

        </Routes>
        <Til/>
      </div>
    </BrowserRouter>
  );
}

export default App;
