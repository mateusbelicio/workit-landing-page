import { ButtonStyled } from './ButtonStyled';

import React from 'react';

const Button = ({ type, variation, ...props }) => {
  const variationClass = variation ? `button--${variation}` : '';

  return (
    <ButtonStyled as={type} href={props.href} className={`button ${variationClass}`}>
      {props.children}
    </ButtonStyled>
  );
};

export default Button;
