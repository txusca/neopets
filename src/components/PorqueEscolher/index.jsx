import "./style.css";
import patinhas from "../../assets/patinhas-duplas.svg";

const PorqueEscolher = () => {
  return (
    <div className={"porque-escolher-container"}>
      <h2>Por que escolher a NeoPet’s?</h2>
      <div className={"porque-escolher-list"}>
        <div className={"porque-escolher-item"}>
          <img src={patinhas} alt="" />
          <div className={"porque-escolher-item-text"}>
            <h4>Atendimento personalizado</h4>
            <p>
              O PetShop oferece cuidado personalizado, orientação especializada
              e atenção meticulosa aos detalhes, promovendo laços fortes entre
              pets e seus cuidadores, assegurando que cada animal receba a
              atenção e os cuidados adequados.
            </p>
          </div>
        </div>
        <div className={"porque-escolher-item"}>
          <img src={patinhas} alt="" />
          <div className={"porque-escolher-item-text"}>
            <h4>Ambiente confortável e seguro</h4>
            <p>
              O PetShop proporciona um ambiente seguro e confortável para os
              animais de estimação, com espaços limpos, bem iluminados e
              ventilados, além de áreas dedicadas para socialização e
              exercícios.
            </p>
          </div>
        </div>
        <div className={"porque-escolher-item"}>
          <img src={patinhas} alt="" />
          <div className={"porque-escolher-item-text"}>
            <h4>Amor pelos pets</h4>
            <p>
              Aqui o cuidado e respeito pelos animais são visíveis em cada
              interação e serviço. Os funcionários demonstram amor pelos pets,
              oferecendo um ambiente acolhedor, produtos de qualidade e atenção
              individualizada, garantindo que cada animal se sinta amado.
            </p>
          </div>
        </div>
        <div className={"porque-escolher-item"}>
          <img src={patinhas} alt="" />
          <div className={"porque-escolher-item-text"}>
            <h4>Transparência</h4>
            <p>
              Desde a divulgação transparente dos produtos e serviços até a
              comunicação aberta sobre políticas de preços e procedimentos, o
              PetShop estabelece confiança através da honestidade e integridade
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PorqueEscolher;
