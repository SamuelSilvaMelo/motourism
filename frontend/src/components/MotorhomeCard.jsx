import React from 'react';
import PropTypes from 'prop-types';

const MotorhomeCard = ({ img, key }) => (
  <img
    src={img}
    alt="Motorhome"
    key={key}
    className="px-6 py-2"
  />
);

MotorhomeCard.propTypes = {
  img: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
};

export default MotorhomeCard;
