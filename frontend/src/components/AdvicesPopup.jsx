import React from 'react';
import PropTypes from 'prop-types';

const AdvicesPopup = ({ message, close }) => (
  <div
    className="absolute w-full h-full flex justify-center items-start"
    style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
  >
    <div
      style={{ backgroundColor: '#7A6F9B' }}
      className="flex flex-col m-20 items-center p-3 pt-0 rounded-lg"
    >
      <button
        className="bg-black w-8 h-8 rounded-full text-white text-xl font-bold self-end m-2"
        type="button"
        onClick={close}
      >
        x
      </button>
      <p className="text-lg text-center">{message}</p>
    </div>
  </div>
);

AdvicesPopup.propTypes = {
  message: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};

export default AdvicesPopup;
