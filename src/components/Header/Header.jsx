import { HeaderStyled } from './HeaderStyled';
import logo from '../../assets/logo-light.svg';

import React from 'react';

const Header = () => {
  return (
    <HeaderStyled className='header'>
      <div className='header__container container'>
        <img src={logo} alt='logo' />
        <button className='button'>Apply for access</button>
      </div>
    </HeaderStyled>
  );
};

export default Header;
