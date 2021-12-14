import axios from 'axios';

const URL = 'https://motourism-backend.herokuapp.com';

export default {
  login: (user) => axios.post(`${URL}/login`, user)
    .then((res) => res.data.token)
    .catch((err) => {
      console.log(err);
      return { message: 'Usuário ou senha inválidos' };
    }),
  createUser: (user) => axios.post(`${URL}/users`, user)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
      return { message: 'Dados inválidos ou usuário já existente' };
    }),
  itineraries: () => axios.get(`${URL}/itineraries`)
    .then(({ data }) => data)
    .catch((err) => {
      console.log(err);
      return { message: 'Erro ao buscar itinerários' };
    }),
  getMotorhomes: () => axios.get(`${URL}/motorhomes`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
      return { message: 'Erro ao buscar motorhomes' };
    }),
};
