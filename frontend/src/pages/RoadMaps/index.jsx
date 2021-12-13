import React, { useContext } from 'react';
import RoadMapCard from '../../components/RoadMapCard';
import MouturismDataContext from '../../context/MouturismDataContext';

const RoadMaps = () => {
  const { roadMaps } = useContext(MouturismDataContext);

  return (
    <main className="text-center text-font-brown">
      <h1 className="my-8 text-2xl">Roteiros</h1>
      <div className="mx-4">
        <p>
          Aqui você pode encontrar roteiros prontos incríveis ou ainda pesquisar
          destinos para seu roteiro personalizado
        </p>
        <div className="mt-16">
          <h2 className="my-8 text-2xl">
            Sugestões de roteiro
          </h2>
          {roadMaps.map((roadMap) => (
            <RoadMapCard key={roadMap.id} roadMap={roadMap} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default RoadMaps;
