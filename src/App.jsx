import './App.css';
import Menu from './components/Menu';
import NossosServicos from './components/NossosServicos';
import QuemSomos from './components/QuemSomos';

function App() {
  return (
    <div className="container col-md">
      <Menu />
      <QuemSomos />
      <NossosServicos />
    </div>
  );
}

export default App;
