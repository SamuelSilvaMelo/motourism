import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Star from '../assets/Star.png';

const MotorhomeCard = ({ motorhome }) => {
  const {
    _id: id, imgs, name, dailyPrice, rating,
  } = motorhome;

  function renderCard() {
    return (
      <Link to={`/motorhomes/${id}`}>
        <div
          style={{
            backgroundImage: `url("${imgs[0]}")`,
            backgroundSize: 'cover',
            height: '300px',
          }}
          className="rounded-3xl flex flex-col items-center justify-between my-8"
        >
          <div
            style={{ backgroundColor: '#7A6F9B', color: '#F8F0FB' }}
            className="mt-8 rounded-3xl px-2 w-2/4 text-lg font-bold"
          >
            <h3>{name}</h3>
            <h3>{`R$ ${dailyPrice.toFixed(2)} / dia`}</h3>
          </div>
          <div
            style={{ backgroundColor: '#7A6F9B', color: '#F8F0FB' }}
            className="flex justify-around mb-8 rounded-3xl p-2 w-1/5 text-lg font-bold"
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
