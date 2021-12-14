import React, { useState } from 'react';
import LoginForm from '../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';
import AdvicesPopup from '../../components/AdvicesPopup';

const Login = () => {
  const [showErrorAdvice, setShowErrorAdvice] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <>
      {showErrorAdvice && (
      <AdvicesPopup
        message={errorMessage}
        close={() => setShowErrorAdvice(false)}
      />
      )}
      <div
        style={{
          fontFamily: 'Abhaya Libre, serif',
          color: '#211A1D',
          backgroundColor: '#F8F0FB',
        }}
        className="flex flex-col items-center"
      >
        <LoginForm
          setErrorMessage={setErrorMessage}
          setShowErrorAdvice={setShowErrorAdvice}
        />
        <RegisterForm
          setErrorMessage={setErrorMessage}
          setShowErrorAdvice={setShowErrorAdvice}
        />
      </div>
    </>
  );
};

export default Login;
