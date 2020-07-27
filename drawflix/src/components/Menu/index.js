import React from 'react';
import Logo from '../../assets/img/drawflix1.png'
import './Menu.css'
import Button from '../Button';

// import { Container } from './styles';

function Menu() {
  return (
      <nav className="Menu">
          <a href="/">
            <img className="Logo" src={Logo} alt="drawflix logo"/>
          </a>

          <Button as="a" className="ButtonLink" href="/">
            Novo vídeo
          </Button>
      </nav>
  );
}

export default Menu;