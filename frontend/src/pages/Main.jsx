import React from 'react';
import background from '../assets/Background.svg';
import logo from '../assets/Logo.svg';
import scrollingIcon from '../assets/scrollingIcon.png';
import bg1 from '../assets/bg1.png';
import bg2 from '../assets/bg2.png';
import bg3 from '../assets/bg3.png';
import '../styles/Main.css';

const Main = () => (
  <div>
    <section className="First-section">
      <div className="First-section-infos">
        <img className="Logo" src={logo} alt="logo" />
        <button className="Button" type="button">Explorar Roteiros</button>
      </div>
      <img className="Background-img" src={background} alt="imagem de fundo" />
      <img className="Scrolling-icon" src={scrollingIcon} alt="scrollingIcon" />
    </section>
    <section className="Second-section">
      <p>Viva essa experiência</p>
      <div className="First-img">
        <img className="Bg1" src={bg1} alt="Bg1" />
        <div className="First-img-text">
          <p>Roteiros incríveis e personalizados</p>
        </div>
      </div>
      <div className="Second-img">
        <img className="Bg2" src={bg2} alt="Bg2" />
        <div className="Second-img-text">
          <p>Motorhomes confortáveis</p>
        </div>
      </div>
      <p>Sem burocracia</p>
      <div className="Third-img">
        <img className="Bg3" src={bg3} alt="Bg3" />
      </div>
    </section>
  </div>
);

export default Main;
