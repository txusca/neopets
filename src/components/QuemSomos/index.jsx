import "./style.css";
import quemsomosimage from "../../assets/quem-somos-img.svg";

const QuemSomos = () => {
  return (
    <div className="quem-somos-container">
      <img className="quem-somos-img" src={quemsomosimage} alt="" />
      <div className="quem-somos-text">
        <h1>Quem Somos</h1>
        <p>
          Aqui na NeoPets somos apaixonados por cuidar dos seus animais de estimação, oferecendo alimentos premium, brinquedos e serviços de grooming de alta qualidade. Junte-se a nós para uma jornada de diversão e amor com seu peludo!
        </p>
      </div>
    </div>
  );
};

export default QuemSomos;
