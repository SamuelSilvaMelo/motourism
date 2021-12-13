import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import DataContext from './DataContext';

const DataProvider = ({ children }) => {
  const [scripts, setScripts] = useState([
    {
      id: '1',
      name: 'Script 1',
      description: 'Script 1 description',
    },
  ]);

  const contextValue = useMemo(() => ({
    scripts,
    setScripts,
  }), [scripts, setScripts]);

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;
