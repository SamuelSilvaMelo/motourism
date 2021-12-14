import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { getLocalStorage } from '../../services/localStorage';
import AdvicesPopup from '../../components/AdvicesPopup';

const Package = () => {
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
  const [showAdvice, setShowAdvice] = useState(false);
  const [adviceMessage, setAdviceMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storePackage = getLocalStorage('package');

    if (!storePackage) {
      setAdviceMessage('Você precisa escolher um motorhome ou um roteiro');
      setShowAdvice(true);
    } else {
      setCurrentPackage({ ...currentPackage, ...storePackage });
    }
  }, []);

  const checkout = () => {
    setAdviceMessage('Pacote finalizado com sucesso!');
    setShowAdvice(true);
  };

  const closeAdvice = () => {
    setShowAdvice(false);
    navigate('/');
  };

  return (
    <>
      {showAdvice && <AdvicesPopup message={adviceMessage} close={closeAdvice} />}
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
    </>
  );
};

export default Package;
