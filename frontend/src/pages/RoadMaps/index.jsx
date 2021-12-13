import React, { useContext } from 'react';
import RoadMapCard from '../../components/RoadMapCard';
import MouturismDataContext from '../../context/MouturismDataContext';

const RoadMaps = () => {
  const { roadMaps } = useContext(MouturismDataContext);

  return (
    <main
      style={{
        fontFamily: 'Abhaya Libre, serif',
        color: '#211A1D',
        backgroundColor: '#F8F0FB',
        minHeight: 'calc(100vh - 65px)',
      }}
      className="flex flex-col items-center text-center text-font-brown"
    >
      <h1 className="text-3xl my-8 text-2xl">Roteiros</h1>
      <div className="mx-4">
        <p
          className="text-xl"
        >
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
