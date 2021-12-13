import React from 'react';
import User from '../../assets/User.png';
import Password from '../../assets/Password.png';

const Login = () => (
  <div>
    <div>
      <h1>Login</h1>
      <form>
        <label htmlFor="email">
          <img width="30" src={User} alt="User icon" />
          <input id="email" type="email" placeholder="E-mail" />
        </label>
        <label htmlFor="password">
          <img width="30" src={Password} alt="Password icon" />
          <input id="password" type="password" placeholder="Senha" />
        </label>
        <button type="button">Entrar</button>
      </form>
    </div>
    <div>
      <h1>Ou criar conta</h1>
      <form>
        <label htmlFor="create-email">
          <img width="30" src={User} alt="User icon" />
          <input id="create-email" type="email" placeholder="E-mail" />
        </label>
        <label htmlFor="create-name">
          <img width="30" src={User} alt="User icon" />
          <input id="create-name" type="text" placeholder="Nome" />
        </label>
        <label htmlFor="create-password">
          <img width="30" src={Password} alt="Password icon" />
          <input id="create-password" type="password" placeholder="Senha" />
        </label>
        <label htmlFor="create-confirm-password">
          <img width="30" src={Password} alt="Password icon" />
          <input id="create-confirm-password" type="password" placeholder="Confirmar senha" />
        </label>
        <button type="button">Entrar</button>
      </form>
    </div>
  </div>
);

export default Login;
