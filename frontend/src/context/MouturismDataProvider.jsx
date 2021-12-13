import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import MouturismDataContext from './MouturismDataContext';
import motourismAPI from '../services/motourismAPI';

const DataProvider = ({ children }) => {

  const [roadMaps, setRoadMaps] = useState([{}]);
  const [motorhomes, setMotorhomes] = useState([{}]);


  const contextValue = useMemo(() => ({
    roadMaps,
    motorhomes,
    setRoadMaps,
  }), [roadMaps, motorhomes]);

  useEffect(() => {
    motourismAPI.getMotorhomes().then((data) => {
      setMotorhomes(data);
    });
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
