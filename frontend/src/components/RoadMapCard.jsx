import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RoadMapCard = ({ roadMap }) => {
  const {
    _id, imgs, name, totalDistance, time,
  } = roadMap;

  const randomImg = (max) => Math.floor(Math.random() * max);

  return (
    <Link to={`/roteiros/${_id}`}>
      <div
        style={{
          backgroundImage: `url("${imgs[randomImg(imgs.length)]}")`,
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
          <h3>{name}</h3>
          <h3>{totalDistance}</h3>
          <h3>{time}</h3>
        </div>
      </div>
    </Link>
  );
};

RoadMapCard.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  totalDistance: PropTypes.string,
  time: PropTypes.string,
  imgs: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default RoadMapCard;
