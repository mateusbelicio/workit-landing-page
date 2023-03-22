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
        <img className='hero__image' src={heroImage} alt='' />
        <Button type='a' href='#' variation='fill'>
          Learn more
        </Button>
      </div>

      <div className='divider'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
          <path
            d='M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z'
            className='shape-fill'
            fill='currentColor'
          ></path>
        </svg>
      </div>
    </HeroStyled>
  );
};

export default Hero;
