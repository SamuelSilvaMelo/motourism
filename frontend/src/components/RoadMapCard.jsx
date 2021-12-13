import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RoadMapCard = ({ roadMap }) => (
  <Link to={`/roteiros/${roadMap.id}`}>
    <div style={{ backgroundImage: `url("${roadMap.image}")` }}>
      <div>
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
