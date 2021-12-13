import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Destinations from '../../components/Destinations';
import Button from '../../components/Button';
import motourismAPI from '../../services/motourismAPI';

const RoadMapDetails = () => {
  const { id } = useParams();

  const [currentRoadMap, setCurrentRoadMap] = useState({});

  useEffect(() => {
    motourismAPI.itineraries()
      .then((response) => {
        const filteredRoadMap = response.filter(({ _id }) => _id === id);
        setCurrentRoadMap({ ...filteredRoadMap[0] });
      });
  }, []);

  return (
    <main className="text-center text-font-brown">
      <h1 className="my-8 text-2xl">
        { currentRoadMap.name }
      </h1>
      <div>
        <p>
          Confira os destinos para esse roteiro
        </p>
      </div>
      <div>
        <h2 className="my-8 text-2xl">Destinos</h2>
        {
          (currentRoadMap.Route)
            ? currentRoadMap.Route.map((city) => <Destinations checkpoint={city} />)
            : <div>Loading...</div>
        }
      </div>
      <div>
        <p>{`Total a ser rodado: ${currentRoadMap.totalDistance}`}</p>
        <p>{`Dias Previstos: ${currentRoadMap.time}`}</p>
      </div>
      <Button name="Adicionar Roteiro Completo" />
    </main>
  );
};

export default RoadMapDetails;
