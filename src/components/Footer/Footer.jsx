import { FooterStyled } from './FooterStyled';
import Icon from '../Icon/Icon';
import logoDark from '../../assets/logo-dark.svg';

const Footer = () => {
  return (
    <FooterStyled className='footer'>
      <div className='footer__container container grid'>
        <img src={logoDark} alt='' className='footer__logo' />
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
    </FooterStyled>
  );
};

export default Footer;
