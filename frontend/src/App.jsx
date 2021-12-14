import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Header from './components/Header';
import MouturismDataProvider from './context/MouturismDataProvider';

const App = () => (
  <BrowserRouter>
    <MouturismDataProvider>
      <main>
        <Header />
        <Routes />
      </main>
    </MouturismDataProvider>
  </BrowserRouter>
);

export default App;
