import { IconStyled } from './IconStyled';

import InstagramLogo from '../../assets/icon-instagram.svg';
import TwitterLogo from '../../assets/icon-twitter.svg';
import FacebookLogo from '../../assets/icon-facebook.svg';

import React from 'react';

const Icon = ({ name }) => {
  const icons = {
    facebook: <img src={FacebookLogo} alt='' aria-hidden='true'></img>,
    twitter: <img src={TwitterLogo} alt='' aria-hidden='true'></img>,
    instagram: <img src={InstagramLogo} alt='' aria-hidden='true'></img>,
  };

  return <IconStyled className='social-icon'>{icons[name]}</IconStyled>;
};

export default Icon;
