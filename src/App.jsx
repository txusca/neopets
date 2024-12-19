import './App.css';
import Menu from './components/Menu';
import NossosServicos from './components/NossosServicos';
import QuemSomos from './components/QuemSomos';
import PorqueEscolher from "./components/PorqueEscolher/index.jsx";

function App() {
  return (
    <div className="container col-md">
      <Menu />
      <QuemSomos />
      <NossosServicos />
      <PorqueEscolher />
    </div>
  );
}

export default App;
