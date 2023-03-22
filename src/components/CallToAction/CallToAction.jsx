import { CallToActionStyled } from './CallToActionStyled';
import founderImage from '../../assets/image-founder.webp';
import Button from '../Button/Button';

import React from 'react';

const CallToAction = () => {
  return (
    <CallToActionStyled className='cta section'>
      <div className='cta__container container grid'>
        <div className='cta__content'>
          <h2 className='section__title'>Be the first to test</h2>
          <p className='cta__text'>
            Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a
            beta tester for our app and kickstart your company. Apply for access below and I’ll be
            in touch to schedule a call.
          </p>
          <Button variation='fill'>Apply for access</Button>
        </div>

        <picture className='cta__picture'>
          <img src={founderImage} alt='Louis Graham photography' className='cta__image' />
        </picture>
      </div>
    </CallToActionStyled>
  );
};

export default CallToAction;
