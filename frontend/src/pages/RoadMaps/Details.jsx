import React from 'react';
import { useParams } from 'react-router-dom';
import Destinations from '../../components/Destinations';
import Button from '../../components/Button';

const RoadMapDetails = () => {
  const { id } = useParams();

  return (
    <main className="text-center text-font-brown">
      <h1 className="my-8 text-2xl">
        Detalhes
        { id }
      </h1>
      <div>
        <p>
          Confira os destinos para esse roteiro
        </p>
      </div>
      <div>
        <h2 className="my-8 text-2xl">Destinos</h2>
        <Destinations />
      </div>
      <Button name="Adicionar Roteiro Completo" />
    </main>
  );
};

export default RoadMapDetails;
