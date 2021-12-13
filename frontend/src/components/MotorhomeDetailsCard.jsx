import React from 'react';
import PropTypes from 'prop-types';

const MotorhomeDetailsCard = ({ img, key }) => (
  <img
    src={img}
    alt="Motorhome"
    key={key}
    className="px-6 py-2"
  />
);

MotorhomeDetailsCard.propTypes = {
  img: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
};

export default MotorhomeDetailsCard;
