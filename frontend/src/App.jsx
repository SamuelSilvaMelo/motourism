import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Header from './components/Header';
import DataProvider from './context/DataProvider';

const App = () => (
  <BrowserRouter>
    <DataProvider>
      <main>
        <Header />
        <Routes />
      </main>
    </DataProvider>
  </BrowserRouter>
);

export default App;
