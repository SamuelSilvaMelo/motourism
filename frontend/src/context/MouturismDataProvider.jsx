import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import MouturismDataContext from './MouturismDataContext';

const DataProvider = ({ children }) => {
  const [roadMaps, setRoadMaps] = useState([
    {
      id: 1,
      name: 'Script 1',
      description: 'Script 1 description',
      distance: 500,
      predictedDays: 10,
      image: 'https://s2.glbimg.com/rl8QsJdK8HiGl6KpjeP6MhuERpI=/0x0:2000x1333/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/v/D/HQZ60oQdmfN5Pmbgi4eg/pantanal-dsc1432-eduardo-palacio-g1.jpg',
    },
  ]);

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
