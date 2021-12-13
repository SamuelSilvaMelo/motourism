import React from 'react';
import PropTypes from 'prop-types';

const Destinations = ({ checkpoint }) => {
  const {
    city, distance, img, state, supportCity,
  } = checkpoint;
  return (
    <div
      style={{
        backgroundImage: `url("${img}")`,
        backgroundSize: 'cover',
        height: '300px',
      }}
      className="rounded-3xl flex-col m-8 flex items-center justify-between"
    >
      <div
        style={{
          backgroundColor: '#7A6F9B',
          width: '50%',
          color: '#F8F0FB',
          fontSize: '1.3rem',
          fontWeight: 'bold',
        }}
        className="flex flex-col min-w-max p-2 items-center justify-center m-4 rounded-3xl"
      >
        <h3>{`${city}/${state}`}</h3>
        <h3>{distance}</h3>
      </div>
      {
        (supportCity)
          ? (
            <div
              style={{
                backgroundColor: '#7A6F9B',
                width: '50%',
                color: '#F8F0FB',
                fontSize: '1.3rem',
                fontWeight: 'bold',
              }}
              className="flex flex-col min-w-max p-2 items-center justify-center m-4 rounded-3xl"
            >
              <h3>Cidade Suporte</h3>
            </div>

          )
          : null
      }
    </div>
  );
};

Destinations.propTypes = {
  city: PropTypes.string,
  distance: PropTypes.string,
  img: PropTypes.arrayOf(PropTypes.string),
  state: PropTypes.string,
  supportCity: PropTypes.string,
}.isRequired;

export default Destinations;
