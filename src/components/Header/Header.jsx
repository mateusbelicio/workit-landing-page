import { HeaderStyled } from './HeaderStyled';
import logo from '../../assets/logo-light.svg';

import React from 'react';
import Button from '../Button/Button';

const Header = () => {
  return (
    <HeaderStyled className='header'>
      <div className='header__container container flex'>
        <img src={logo} alt='Workit logo' className='header__logo' />
        <Button type='a' href='#'>
          Apply for access
        </Button>
      </div>
    </HeaderStyled>
  );
};

export default Header;
