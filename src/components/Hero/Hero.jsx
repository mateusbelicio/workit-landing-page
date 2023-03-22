import React from 'react';
import heroImage from '../../assets/image-hero.webp';

import { HeroStyled } from './HeroStyled';
import Button from '../Button/Button';

const Hero = () => {
  return (
    <HeroStyled className='hero'>
      <div className='hero__container container'>
        <h1 className='hero__title'>
          Data <span>tailored</span> to your needs.
        </h1>
        <img
          className='hero__image'
          src={heroImage}
          alt='iPhone displaying a workit application UI.'
        />
        <Button type='a' href='#' variation='fill'>
          Learn more
        </Button>
      </div>
    </HeroStyled>
  );
};

export default Hero;
