import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import MouturismDataContext from './MouturismDataContext';

const DataProvider = ({ children }) => {
  const [roadMaps, setRoadMaps] = useState([]);

  const contextValue = useMemo(() => ({
    roadMaps,
    setRoadMaps,
  }), [roadMaps]);

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
