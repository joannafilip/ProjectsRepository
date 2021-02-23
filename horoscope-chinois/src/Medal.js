import './Medal.css';
import React, { useState } from 'react';

const Medal = ({ nom, image }) => {
  const [medal, setMedal] = useState(0);

  return (
    <div>
      <h2>{nom}</h2>
      <img src={image} />
      <button onClick={() => setMedal(medal + 1)}>Ajouter médaille</button>
      <div>{medal}</div>

    </div>
  );
};
export default Medal;
//   const [puchar, setPuchar] = useState(true);
//   function Premier() {
//     const icone = '🥇';
//     puchar ? <div>{icone}</div> : <div>""</div>;
//   }
