import './style.css';
import internacoes from '../../assets/internacoes.svg';
import clinica from '../../assets/clinica-veterinaria.svg';
import petshop from '../../assets/petshop.svg';
import banho from '../../assets/banho-tosa.svg';
import vacina from '../../assets/vacina.svg';

const NossosServicos = () => {
  return (
    <div className="services-container">
      <h2 className="title">NOSSOS SERVIÇOS</h2>
      <div className="services-list">
        <div className="service">
          <div className="service-circle">
            <img src={internacoes} alt=""/>
          </div>
          <div className="service-title">Internações</div>
        </div>
        <div className="service">
          <div className="service-circle">
            <img src={clinica} alt=""/>
          </div>
          <div className="service-title">Clínica Veterinária</div>
        </div>
        <div className="service">
          <div className="service-circle">
            <img src={petshop} alt=""/>
          </div>
          <div className="service-title">Pet Shop</div>
        </div>
        <div className="service">
          <div className="service-circle">
            <img src={banho} alt=""/>
          </div>
          <div className="service-title">Banho e Tosa</div>
        </div>
        <div className="service">
          <div className="service-circle">
            <img src={vacina} alt=""/>
          </div>
          <div className="service-title">Vacinas</div>
        </div>
      </div>
    </div>
  );
};

export default NossosServicos;
