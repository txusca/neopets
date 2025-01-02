import './style.css';

import logo from '../../assets/logo.svg';
import face from '../../assets/Facebook.svg';
import insta from '../../assets/Instagram.svg';

import wpp from '../../assets/whatsapp-icon.svg';
import mail from '../../assets/mail.png';
import addres from '../../assets/addres-icon.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={logo} alt="Logo" />
            <div className="socials">
              <a href="https://www.facebook.com/clinicaneopets" target="_blank">
                <img src={face} alt="Facebook" />
              </a>
              <a
                href="https://www.instagram.com/clinicaneopets/"
                target="_blank"
              >
                <img src={insta} alt="Instagram" />
              </a>
            </div>
          </div>
          <div className="contatos col-md-4">
            <h4>Contatos</h4>
            <a href="https://wa.me/+5538997413703" target="_blank" rel="noopener noreferrer">
              <p>
                <img src={wpp} alt="Whatsapp" /> (38) 9 9741-3703
              </p>
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <p>
                <img src={mail} alt="e-mail" /> exlabneopets@hotmail.com
              </p>
            </a>
          </div>
          <div className="contatos col-md-4">
            <h4>Endereço</h4>
            <a href="https://maps.app.goo.gl/T1vJEqhQFpAvbu496" target="_blank">
              <p>
                <img src={addres} alt="endereço" /> Rua Barão Rio Branco, 326
                Centro, Curvelo
              </p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
