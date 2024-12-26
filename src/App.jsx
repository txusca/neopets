import './App.css';
import Menu from './components/Menu';
import NossosServicos from './components/NossosServicos';
import QuemSomos from './components/QuemSomos';
import PorqueEscolher from './components/PorqueEscolher/index.jsx';
import Carrossel from './components/Carrossel/index.jsx';
import AgendeAtendimento from './components/AgendeAtendimento/index.jsx';
import Seguir from './components/Seguir/index.jsx';
import Footer from './components/Footer/index.jsx';

function App() {
  return (
    <div className="container col-md">
      <Menu />
      <QuemSomos />
      <NossosServicos />
      <PorqueEscolher />
      <Carrossel />
      <Seguir />
      <AgendeAtendimento />
      <Footer />
    </div>
  );
}

export default App;
