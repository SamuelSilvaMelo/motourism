import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import MenuButton from '../assets/MenuButton.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Roteiros',
      path: '/roteiros',
    },
    {
      name: 'Motorhomes',
      path: '/motorhomes',
    },
    {
      name: 'Meu Pacote',
      path: '/about',
    },
  ];
  const { pathname } = useLocation();
  const isMain = () => pathname === '/';

  return !isMain() && (
    <header
      style={{ backgroundColor: '#00B4D8' }}
      className="justify-center flex-col items-center"
    >
      <div className="flex justify-between items-center w-full">
        <Link to="/">
          <img
            src={Logo}
            alt="Logo motourism"
            className="m-2"
            style={{ width: '80px', height: 'auto', marginLeft: '20px' }}
          />
        </Link>
        <button
          className="p-2 rounded"
          style={isOpen ? { backgroundColor: 'rgba(0,0,0,0.2)', marginRight: '30px' } : { marginRight: '30px' }}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src={MenuButton}
            alt="Menu button"
            className="w-8 h-8"
          />
        </button>
      </div>
      <nav
        className={isOpen ? '' : 'hidden'}
        style={{
          backgroundColor: '#211A1D',
          color: '#F8F0FB',
        }}
      >
        {links.map((link, index) => (
          <>
            <Link
              key={link.name}
              to={link.path}
              className="block px-4 py-2"
              style={{
                color: '#F8F0FB',
                textDecoration: 'none',
              }}
            >
              {link.name}
            </Link>
            {links[index + 1] ? (
              <fieldset style={{
                backgroundColor: '#F8F0FB', height: '1px', width: '50%', marginLeft: '10px',
              }}
              />
            ) : null}
          </>
        ))}
      </nav>
    </header>
  );
};

export default Header;
