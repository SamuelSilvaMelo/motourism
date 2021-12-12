import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import NotFound from './pages/NotFound';

import RoadMaps from './pages/RoadMaps/';
import RoadMapDetails from './pages/RoadMaps/Details';
import Favs from './pages/RoadMaps/Favs';

import Motorhomes from './pages/Motorhomes/';
import MotorhomeDetails from './pages/Motorhomes/Details';

import Login from './pages/User/Login';
import Register from './pages/User/Register';
import Package from './pages/User/Package';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/register" element={ <Register /> } />
        <Route exact path="/meu-roteiro" element={ <Favs /> } />
        <Route exact path="/fechar-pacote" element={ <Package /> } />
        <Route path="/roteiros/:id" element={ <RoadMapDetails /> } />
        <Route path="/motorhomes/:id" element={ <MotorhomeDetails /> } />
        <Route exact path="/roteiros" element={ <RoadMaps /> } />
        <Route exact path="/motorhomes" element={ <Motorhomes /> } />
        <Route path="*" element={ <NotFound /> } />
        <Route exact path="/" element={ <Main /> } />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;