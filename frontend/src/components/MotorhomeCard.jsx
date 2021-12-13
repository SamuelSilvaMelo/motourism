import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Star from '../assets/Star.png';
import '../styles/Motorhomes.css';

const MotorhomeCard = ({ motorhome }) => {
  const {
    _id: id, imgs, name, dailyPrice, rating,
  } = motorhome;

  function renderCard() {
    return (
      <Link to={`/roteiros/${id}`}>
        <div
          style={{
            backgroundImage: `url("${imgs[0]}")`,
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
            <h3>{`R$ ${dailyPrice.toFixed(2)} / dia`}</h3>
          </div>
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
            <img width="25" src={Star} alt="rating icon" />
            <h3>{rating.toFixed(1)}</h3>
          </div>
        </div>
      </Link>
    );
  }

  return motorhome.imgs ? renderCard() : null;
};

MotorhomeCard.propTypes = {
  motorhome: PropTypes.shape({
    _id: PropTypes.number.isRequired,
    name: PropTypes.string,
    dailyPrice: PropTypes.number,
    imgs: PropTypes.arrayOf(PropTypes.string),
    rating: PropTypes.number,
  }).isRequired,
};

export default MotorhomeCard;
