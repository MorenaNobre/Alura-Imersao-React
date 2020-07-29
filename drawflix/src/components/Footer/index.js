import React from 'react';
import { FooterBase } from './styles';
import LogoPaint from '../../components/LogoPaint'

function Footer() {
  return (
    <FooterBase>
      <p>
        &copy;Criado para propagar a arte! <LogoPaint />      
      </p>
    </FooterBase>
  );
}

export default Footer;
