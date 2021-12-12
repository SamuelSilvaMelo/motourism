import React from 'react';
import { useParams } from 'react-router-dom';

function MotorhomeDetails() {
  const { id } = useParams();

  return (
    <h1>Motorhome { id }</h1>
  )
}

export default MotorhomeDetails;