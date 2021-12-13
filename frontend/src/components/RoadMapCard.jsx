import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RoadMapCard = ({ roadMap }) => (
  <Link to={`/roteiros/${roadMap.id}`}>
    <div
      style={{
        backgroundImage: `url("${roadMap.image}")`,
        backgroundSize: 'cover',
        height: '300px',
      }}
      className="rounded-3xl flex items-start justify-center"
    >
      <div
        style={{
          backgroundColor: '#7A6F9B',
          width: '50%',
          color: '#F8F0FB',
          fontSize: '1.3rem',
          fontWeight: 'bold',
        }}
        className="flex flex-col items-center justify-center mt-8 rounded-3xl"
      >
        <h3>{roadMap.name}</h3>
        <h3>{`${roadMap.distance} Km`}</h3>
        <h3>{`${roadMap.predictedDays} dias`}</h3>
      </div>
    </div>
  </Link>
);

RoadMapCard.propTypes = {
  roadMap: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    distance: PropTypes.number,
    predictedDays: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
};

export default RoadMapCard;
