import React from 'react';
import RoadMapsComponent from '../../components/RoadMaps';

function RoadMaps() {
  return (
    <main className="text-center text-font-brown">
      <h1 className="my-8 text-2xl">Roteiros</h1>
      <div className="mx-4">
        <p>
          Aqui você pode encontrar roteiros prontos incríveis ou ainda pesquisar destinos para seu roteiro personalizado
        </p>
        <div className="mt-16">
          <h2 className="my-8 text-2xl">
            Sugestões de roteiro
          </h2>
          <RoadMapsComponent />
        </div>
      </div>
    </main>
  )
}

export default RoadMaps;