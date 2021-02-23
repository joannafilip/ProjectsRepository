import './App.scss';
import { useState } from 'react';
import Element from './Element';
import Modal from './Modal';
import Bd from './Bd';

function App() {
  const bd = Bd.map((element) => (
    <Element
      key={element.nom}
      nom={element.nom}
      image={element.image}
      description={element.description}
      modulo={element.modulo}
    />
  ));

  const [year, setYear] = useState('');
  function handleChange(event) {
    setYear(event.target.value);
  }

  const [signe, setSigne] = useState(null);
  const [vis, setVis] = useState(false);
  const [desc, setDesc] = useState(true);

  function handleSubmit() {
    setVis(true);
    const yearModulo = Number(year) % 12;
    setSigne(Bd.find((element) => yearModulo === element.modulo));
  }

  return (
    <div>
      <div className="partie-input font-bold">
        année : <input
          className="text-center ml-3"
          type="number"
          id="year"
          name="year"
          value={year}
          onChange={handleChange}
        />
        <button className="font-bold ml-3 border-2 border-black" type="submit" onClick={handleSubmit}>votre signe</button>
      </div>
      <div className="flex flex-wrap">{bd}</div>
      <Modal
        visible={vis}
        hide={() => setVis(!vis)}
        more={() => setDesc(!desc)}

      >
        <div>
          {signe && (
          <div>
            <h1>{signe.nom}</h1>
            <div className="description text-justify m-2.5">
              {desc ? signe.description.substr(0, 100) : signe.description}
            </div>
            <img src={`/images/${signe.image}`} alt="" />
          </div>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default App;
