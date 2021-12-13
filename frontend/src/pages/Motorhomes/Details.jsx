/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MotorhomeDetailsCard from '../../components/MotorhomeDetailsCard';
import Star from '../../assets/Star.svg';
import Button from '../../components/Button';
import Loading from '../../components/Loading';

const API = 'https://motourism-backend.herokuapp.com/motorhomes';

const MotorhomeDetails = () => {
  const { id } = useParams();
  const [motorhomes, setMotorhomes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const requestAPI = async () => {
      const result = await fetch(API);
      const response = await result.json();

      if (!response) return setLoading(true);

      setMotorhomes(response);
      return setLoading(false);
    };
    requestAPI();
  });

  if (loading) return <Loading />;

  const foundMotorhome = motorhomes.find(({ _id: motorhomeID }) => motorhomeID === id);
  const {
    name,
    _id,
    description,
    imgs,
    qualification,
    capacity,
    dailyPrice,
    rating,
  } = foundMotorhome;

  return (
    <main className="text-center flex flex-col items-center font-default text-xl">
      <h1 className="text-center text-3xl my-6">{ name }</h1>
      <p className="m-6">{ description }</p>
      { imgs.map((img, index) => <MotorhomeDetailsCard key={`${_id + index}`} img={img} />) }
      <div className="flex w-18 justify-center py-2 px-2 font-bold">
        <img
          src={Star}
          className="w-6"
          alt="Avaliação"
        />
        <p className="text-3xl">{ rating }</p>
      </div>
      <p>
        Capacidade:
        { ' ' }
        { capacity }
        { ' ' }
        pessoas
      </p>
      <p>
        Carteira necessária:
        { ' ' }
        { qualification }
      </p>
      <p>
        Aluguel por dia: R$
        { ' ' }
        { dailyPrice }
      </p>
      <Button
        name="Incluir no pacote"
      />
    </main>
  );
};

export default MotorhomeDetails;
