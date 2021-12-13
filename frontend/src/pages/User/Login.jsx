import React from 'react';
import User from '../../assets/User.png';
import Password from '../../assets/Password.png';

const Login = () => (
  <div
    style={{
      fontFamily: 'Abhaya Libre, serif',
      color: '#211A1D',
      backgroundColor: '#F8F0FB',
    }}
    className="flex flex-col items-center"
  >
    <div className="flex flex-col items-center justify-center w-full p-2 m-5">
      <h1 className="text-center text-3xl">Login</h1>
      <form className="flex flex-col items-center justify-center w-full p-2">
        <label
          className="flex items-center justify-center m-4 border-2 border-gray-400 rounded-lg"
          htmlFor="email"
        >
          <img width="30" className="m-2" src={User} alt="User icon" />
          <input
            style={{ background: 'none' }}
            id="email"
            type="email"
            placeholder="E-mail"
          />
        </label>
        <label
          htmlFor="password"
          className="flex items-center justify-center m-4 border-2 border-gray-400 rounded-lg"
        >
          <img width="30" src={Password} className="m-2" alt="Password icon" />
          <input
            style={{ background: 'none' }}
            id="password"
            type="password"
            placeholder="Senha"
          />
        </label>
        <button
          style={{ backgroundColor: '#C18C5D' }}
          className="bg-yellow-500 font-bold py-2 px-8 rounded text-lg m-4 font-bold"
          type="button"
        >
          Entrar
        </button>
      </form>
    </div>
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
            id="create-email"
            type="email"
            placeholder="E-mail"
          />
        </label>
        <label
          className="flex items-center justify-center m-4 border-2 border-gray-400 rounded-lg"
          htmlFor="create-name"
        >
          <img className="m-2" width="30" src={User} alt="User icon" />
          <input
            style={{ background: 'none' }}
            id="create-name"
            type="text"
            placeholder="Nome"
          />
        </label>
        <label
          className="flex items-center justify-center m-4 border-2 border-gray-400 rounded-lg"
          htmlFor="create-password"
        >
          <img className="m-2" width="30" src={Password} alt="Password icon" />
          <input
            style={{ background: 'none' }}
            id="create-password"
            type="password"
            placeholder="Senha"
          />
        </label>
        <label
          className="flex items-center justify-center m-4 border-2 border-gray-400 rounded-lg"
          htmlFor="create-confirm-password"
        >
          <img className="m-2" width="30" src={Password} alt="Password icon" />
          <input
            style={{ background: 'none' }}
            id="create-confirm-password"
            type="password"
            placeholder="Confirmar senha"
          />
        </label>
        <button
          className="bg-yellow-500 font-bold py-2 px-8 rounded text-lg m-4 font-bold"
          style={{ backgroundColor: '#C18C5D' }}
          type="button"
        >
          Criar
        </button>
      </form>
    </div>
  </div>
);

export default Login;
