import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, name }) => (
  <button
    type="button"
    className="bg-header-blue text-white p-4 my-12 rounded-2xl text-xl"
    onClick={onClick}
  >
    { name }
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Button;
