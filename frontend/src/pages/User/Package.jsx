import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Button from '../../components/Button';
import { getLocalStorage } from '../../services/localStorage';

const Package = () => {
  const [finished, setFinished] = useState(false);
  const [haveStorage, setHaveStorage] = useState(false);
  const [currentPackage, setCurrentPackage] = useState({
    motorhomes: {
      name: '',
      dailyPrice: '',
    },
    startCity: {
      name: '',
      state: '',
    },
    endCity: {
      name: '',
      state: '',
    },
    time: '5',
  });

  useEffect(() => {
    const storePackage = getLocalStorage('package');

    if (!storePackage) {
      alert('Você precisa escolher um motorhome ou um roteiro.');
      setHaveStorage(true);
    } else {
      setCurrentPackage({ ...currentPackage, ...storePackage });
    }
  }, []);

  const checkout = () => {
    alert('Pacote finalizado com sucesso!');
    setFinished(true);
  };

  if (finished) return <Navigate to="/" />;

  if (haveStorage) return <Navigate to="/" />;

  return (
    <div className="flex flex-col">
      <h1
        className="text-center text-font-brown my-8 text-2xl"
      >
        Seu Pacote
      </h1>
      <section className="text-center text-xl">
        <p>
          <strong>Motorhome: </strong>
          {`${currentPackage.motorhomes.name}`}
        </p>
        <div>
          <strong>Dias: </strong>
          { `${currentPackage.time}`}
        </div>
        <p>
          <strong>Retirar em: </strong>
          {`${currentPackage.startCity.name}`}
        </p>
        <p>
          <strong>Devolver em: </strong>
          {`${currentPackage.endCity.name}`}
        </p>
        <p>
          <strong>Total R$: </strong>
          {`${currentPackage.motorhomes.dailyPrice * Number(currentPackage.time.split(' ')[0])}`}
        </p>
      </section>
      <Button name="Finalizar Pacote" onClick={checkout} />
    </div>
  );
};

export default Package;
