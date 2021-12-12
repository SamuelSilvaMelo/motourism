import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Main from './pages/Main';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={ <Main /> } />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;