import React from 'react';
import LoginForm from '../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';

const Login = () => (
  <div
    style={{
      fontFamily: 'Abhaya Libre, serif',
      color: '#211A1D',
      backgroundColor: '#F8F0FB',
    }}
    className="flex flex-col items-center"
  >
    <LoginForm />
    <RegisterForm />
  </div>
);

export default Login;
