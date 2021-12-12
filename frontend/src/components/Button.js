import React from 'react';

function Button ({ onClick, name }) {
  return (
    <button
      type="button"
      className="bg-blue text-white p-4 my-12 rounded-2xl text-xl"
      onClick={ onClick }>
      { name }
    </button>
  )
}

export default Button;