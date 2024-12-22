import "./style.css";

import gatinhos from "../../assets/gatinhos.svg";
import cachorro from "../../assets/cachorro-de-pe.svg";
import gatinho from "../../assets/gatinho.svg";
import wpp from "../../assets/wpp-button.svg";

const AgendeAtendimento = () => {
  return (
    <div className="container-fluid">
      <img src={gatinhos} alt="" />
      <div className="container-agende">
        <img className="cachorro" src={cachorro} alt="" />
        <div className="container-text">
          <h3>Agende seu atendimento</h3>
          <p>
            Faça o melhor para o seu melhor amigo! Agende agora mesmo o
            atendimento do seu pet com apenas um clique. Nossa equipe está
            pronta para cuidar com carinho e dedicação.
          </p>
          <div className="fale-conosco-btn">
            Fale conosco
            <img src={wpp} alt="" />
          </div>
        </div>
        <img className="teste" src={gatinho} alt="" />
      </div>
    </div>
  );
};

export default AgendeAtendimento;
