import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Header from './components/Header';

const App = () => (
  <BrowserRouter>
    <main>
      <Header />
      <Routes />
    </main>
  </BrowserRouter>
);

export default App;
