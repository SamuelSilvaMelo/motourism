import React from 'react';
import Logo from '../assets/Logo.svg';
import Menu from '../assets/Menu.svg'

function Header() {
  return (
    <header className="flex justify-between py-4 bg-header-blue">
      <div>
        <img src={ Logo } className="w-20 mx-8" alt="Motourism Logo" />
      </div>
      <div>
        <button type="button">
          <img src={ Menu } className="w-10 mx-10" alt="Menu" />
        </button>
      </div>
    </header>
  )
}

export default Header;