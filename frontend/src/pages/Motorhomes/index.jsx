import React, { useContext } from 'react';
import MotorhomeCard from '../../components/MotorhomeCard';
import MouturismDataContext from '../../context/MouturismDataContext';
import '../../styles/Motorhomes.css';

const Motorhomes = () => {
  const { motorhomes } = useContext(MouturismDataContext);

  return (
    <main className="my-8 flex flex-col items-center text-center">
      <h1 className="text-3xl mt-4 mb-8 text-2xl">Motorhomes</h1>
      <div className="mx-4">
        <p className="text-xl">
          Confira nossos modelos disponíveis e escolha o que melhor se
          adapte ao seu roteiro e necessidades
        </p>
        <div className="mt-8">
          <h2 className="my-8 text-2xl">
            Modelos
          </h2>
          {motorhomes.map((motorhome) => (
            <MotorhomeCard key={motorhome.id} motorhome={motorhome} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Motorhomes;
