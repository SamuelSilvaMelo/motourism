import axios from 'axios';

const URL = 'http://localhost:3000';

export default {
  login: (user) => axios.post(`${URL}/login`, user)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err)),
};
