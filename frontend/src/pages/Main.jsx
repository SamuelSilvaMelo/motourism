import React from 'react';
import background from '../assets/Background.svg';
import logo from '../assets/Logo.svg';
import scrollingIcon from '../assets/scrollingIcon.png';
import '../styles/Main.css';

const Main = () => (
  <section className="First-section">
    <div className="First-section-infos">
      <img className="Logo" src={logo} alt="logo" />
      <button className="Button" type="button">Explorar Roteiros</button>
    </div>
    <img className="Background-img" src={background} alt="imagem de fundo" />
    <img className="Scrolling-icon" src={scrollingIcon} alt="scrollingIcon" />
  </section>
);

export default Main;
