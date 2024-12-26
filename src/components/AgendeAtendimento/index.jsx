import './style.css';

import gatinhos from '../../assets/gatinhos.png';
import cachorro from '../../assets/cachorro-de-pe.svg';
import gatinho from '../../assets/gatinho.png';
import wpp from '../../assets/wpp-button.svg';

const AgendeAtendimento = () => {
  return (
    <div className="container-fluid">
      <img className="gatinhos" src={gatinhos} alt="" />
      <div className="container-agende">
        <img className="cachorro" src={cachorro} alt="" />
        <div className="container-text">
          <h3>Agende seu atendimento</h3>
          <p>
            Faça o melhor para o seu melhor amigo! Agende agora mesmo o
            atendimento do seu pet com apenas um clique. Nossa equipe está
            pronta para cuidar com carinho e dedicação.
          </p>
          <a href="" target="_blank">
            <div className="fale-conosco-btn">
              Fale conosco
              <img src={wpp} alt="" />
            </div>
          </a>
        </div>
        <img className="gatinho" src={gatinho} alt="" />
      </div>
    </div>
  );
};

export default AgendeAtendimento;
