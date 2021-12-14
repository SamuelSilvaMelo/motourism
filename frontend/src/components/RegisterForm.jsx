import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import motourismAPI from '../services/motourismAPI';
import User from '../assets/User.png';
import Password from '../assets/Password.png';
import MouturismDataContext from '../context/MouturismDataContext';

const RegisterForm = () => {
  const [user, setUser] = useState({
    name: '', email: '', password: '', confirmPassword: '',
  });
  const handleInputChange = ({ target }) => {
    setUser({
      ...user,
      [target.name]: target.value,
    });
  };
  const navigate = useNavigate();
  const { setNavbarLinks, navbarLinks } = useContext(MouturismDataContext);

  const createLogin = async () => {
    if (user.password !== user.confirmPassword) {
      alert('As senhas digitadas são difrentes!');
    } else {
      const createdUser = await motourismAPI.createUser({
        name: user.name,
        password: user.password,
        email: user.email,
      });
      if (createdUser) {
        const token = await motourismAPI.login({
          email: user.email, password: user.password,
        });
        localStorage.setItem('token', token);
        setNavbarLinks(navbarLinks.filter((link) => link.name !== 'Login'));
        navigate('/fechar-pacote');
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full p-2 mb-5">
      <h1 className="text-center text-2xl">Ou criar conta</h1>
      <form className="flex flex-col items-center justify-center w-full p-2">
        <label
          className="flex items-center justify-center m-4 border-2 border-gray-400 rounded-lg"
          htmlFor="create-email"
        >
          <img className="m-2" width="30" src={User} alt="User icon" />
          <input
            style={{ background: 'none' }}
            name="email"
            id="create-email"
            type="email"
            placeholder="E-mail"
            onChange={handleInputChange}
          />
        </label>
        <label
          className="flex items-center justify-center m-4 border-2 border-gray-400 rounded-lg"
          htmlFor="create-name"
        >
          <img className="m-2" width="30" src={User} alt="User icon" />
          <input
            style={{ background: 'none' }}
            name="name"
            id="create-name"
            type="text"
            placeholder="Nome"
            onChange={handleInputChange}
          />
        </label>
        <label
          className="flex items-center justify-center m-4 border-2 border-gray-400 rounded-lg"
          htmlFor="create-password"
        >
          <img className="m-2" width="30" src={Password} alt="Password icon" />
          <input
            style={{ background: 'none' }}
            name="password"
            id="create-password"
            type="password"
            placeholder="Senha"
            onChange={handleInputChange}
          />
        </label>
        <label
          className="flex items-center justify-center m-4 border-2 border-gray-400 rounded-lg"
          htmlFor="create-confirm-password"
        >
          <img className="m-2" width="30" src={Password} alt="Password icon" />
          <input
            style={{ background: 'none' }}
            name="confirmPassword"
            id="create-confirm-password"
            type="password"
            placeholder="Confirmar senha"
            onChange={handleInputChange}
          />
        </label>
        <button
          className="bg-yellow-500 font-bold py-2 px-8 rounded text-lg m-4 font-bold"
          style={{ backgroundColor: '#C18C5D' }}
          type="button"
          onClick={createLogin}
        >
          Criar
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
