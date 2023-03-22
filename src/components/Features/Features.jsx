import { FeaturesStyled } from './FeaturesStyled';

import React from 'react';

const Features = () => {
  return (
    <FeaturesStyled className='features section'>
      <div className='features__container container'>
        <h2 className='section__title sr-only'>Features</h2>

        <ul className='features__list'>
          <li className='features__item'>
            <h3 className='features__name'>Actionable insights</h3>
            <p className='features__description'>
              Optimize your products, improve customer satisfaction and stay ahead of the
              competition with our product data analytics.
            </p>
          </li>
          <li className='features__item'>
            <h3 className='features__name'>Data-driven decisions</h3>
            <p className='features__description'>
              Make data-driven decisions with our product data analytics. Our AI-generated reports
              help you unlock insights hidden in your product data.
            </p>
          </li>
          <li className='features__item'>
            <h3 className='features__name'>Always affordable</h3>
            <p className='features__description'>
              Always affordable pricing that scales with your business. Get top-quality product data
              analytics services without hidden costs or unexpected fees.
            </p>
          </li>
        </ul>
      </div>
    </FeaturesStyled>
  );
};

export default Features;
