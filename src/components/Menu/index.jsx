import { Nav, Navbar } from 'react-bootstrap';
import './style.css';
import SocialIcons from '../SocialIcons';
import logo from '../../assets/logo.svg';
import formaCabecalho from '../../assets/forma-cabecalho.svg';
import patinha1 from '../../assets/patinhas-brancas/patinha-branca-1.svg';
import patinha2 from '../../assets/patinhas-brancas/patinha-branca-2.svg';
import patinha3 from '../../assets/patinhas-brancas/patinha-branca-3.svg';

const Menu = () => {
  return (
    <div>
      <Navbar className="nav w-100">
        <div className="d-flex justify-content-between align-items-center w-100 px-3">
          <img src={patinha1} alt="" className="patinha1" />
          <img src={patinha2} alt="" className="patinha2" />
          <img src={patinha3} alt="" className="patinha3" />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand href="/">
            <img className="logo-image" src={logo} alt="Logo NeoPet's" />
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <img src={formaCabecalho} alt="" className="teste" />
            <Nav className="information-header">
              <SocialIcons icon="whatsapp" />
              <Nav.Link className="tel" href="#tel">
                (38) 9 9741-3703
              </Nav.Link>
              <SocialIcons icon="addres-icon" />
              <Nav.Link
                href="https://maps.app.goo.gl/T1vJEqhQFpAvbu496"
                target="_blank"
              >
                Rua Barão Rio Branco, 326 Centro, Curvelo
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Menu;
