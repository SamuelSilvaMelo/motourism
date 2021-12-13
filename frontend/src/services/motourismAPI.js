import axios from 'axios';

const URL = 'https://motourism-backend.herokuapp.com';

export default {
  login: (user) => axios.post(`${URL}/login`, user)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err)),
  itineraries: () => axios.get(`${URL}/itineraries`)
    .then(({ data }) => data)
    .catch((err) => alert(err)),
  getMotorhomes: () => axios.get(`${URL}/motorhomes`)
    .then((res) => res.data)
    .catch((err) => alert(err)),
};
