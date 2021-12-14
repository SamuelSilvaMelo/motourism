import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import MouturismDataContext from './MouturismDataContext';
import motourismAPI from '../services/motourismAPI';

const DataProvider = ({ children }) => {
  const [roadMaps, setRoadMaps] = useState([]);
  const [motorhomes, setMotorhomes] = useState([{}]);
  const [navbarLinks, setNavbarLinks] = useState([
    { name: 'Home', path: '/' },
    { name: 'Roteiros', path: '/roteiros' },
    { name: 'Motorhomes', path: '/motorhomes' },
    { name: 'Meu Pacote', path: '/about' },
  ]);

  const contextValue = useMemo(() => ({
    roadMaps,
    motorhomes,
    setRoadMaps,
    navbarLinks,
    setNavbarLinks,
  }), [roadMaps, motorhomes, navbarLinks]);

  useEffect(() => {
    motourismAPI.getMotorhomes().then((data) => {
      setMotorhomes(data);
    });
  }, []);

  useEffect(() => {
    const defaultLinks = [
      { name: 'Home', path: '/' },
      { name: 'Roteiros', path: '/roteiros' },
      { name: 'Motorhomes', path: '/motorhomes' },
      { name: 'Meu Pacote', path: '/about' },
    ];
    const token = localStorage.getItem('token');
    const loginLink = { name: 'Login', path: '/login' };
    if (token) {
      setNavbarLinks(defaultLinks);
    } else {
      setNavbarLinks([...defaultLinks, loginLink]);
    }
  }, []);

  return (
    <MouturismDataContext.Provider value={contextValue}>
      {children}
    </MouturismDataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;
