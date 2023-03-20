import React from 'react';

import Icon from './components/Icon/Icon';
import Header from './components/Header/Header';

function App() {
  return (
    <React.Fragment>
      <Header />

      <main className='main'>
        <div className='hero'>
          <div className='container'>
            <h1 className='header__title'>
              Apply for <br /> access
            </h1>
            <p className='header__subtitle'>Data tailored to your needs.</p>
            <a href='#' className='button'>
              Learn more
            </a>
          </div>
        </div>

        <section className='features section'>
          <div className='container'>
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
                  Make data-driven decisions with our product data analytics. Our AI-generated
                  reports help you unlock insights hidden in your product data.
                </p>
              </li>
              <li className='features__item'>
                <h3 className='features__name'>Always affordable</h3>
                <p className='features__description'>
                  Always affordable pricing that scales with your business. Get top-quality product
                  data analytics services without hidden costs or unexpected fees.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className='cta section'>
          <div className='container'>
            <h2 className='section__title'>Be the first to test</h2>
            <p className='cta__text'>
              Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a
              beta tester for our app and kickstart your company. Apply for access below and I’ll be
              in touch to schedule a call.
            </p>
            <button className='button'>Apply for access</button>
          </div>
        </section>
      </main>

      <footer className='footer'>
        <div className='container'>
          <ul className='footer__social'>
            <li>
              <a href='#' className='footer__link'>
                <Icon name='facebook' />
              </a>
            </li>
            <li>
              <a href='#' className='footer__link'>
                <Icon name='twitter' />
              </a>
            </li>
            <li>
              <a href='#' className='footer__link'>
                <Icon name='instagram' />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default App;
