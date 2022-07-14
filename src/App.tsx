import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './app/components/Home';
import Mint from './app/components/Mint';
import MyNfts from './app/components/MyNfts';
import Roadmap from './app/components/Roadmap';
import Whitelist from './app/components/Whitelist';
import Layout from './app/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/mint' element={<Mint />} />
          <Route path='/roadmap' element={<Roadmap />} />
          <Route path='/whitelist' element={<Whitelist />} />
          <Route path='/my-nfts' element={<MyNfts />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
