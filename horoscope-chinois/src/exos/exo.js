import './App.css';
import Signe from './Signe';
import Bd from '../Bd';

function App() {
  const bd = Bd.map((signe) => (
    <Signe
      nom={signe.nom}
      image={signe.image}
      description={signe.description}
    />
  ));
  return (
    <div className="flex flex-wrap">
      {bd}
    </div>
  );
}

export default App;
