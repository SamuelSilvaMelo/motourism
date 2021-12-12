import React from 'react';
import { useParams } from 'react-router-dom';

function RoadMapDetails() {
  const { id } = useParams();
  
  return (
    <h1>Detalhes { id }</h1>
  )
}

export default RoadMapDetails;