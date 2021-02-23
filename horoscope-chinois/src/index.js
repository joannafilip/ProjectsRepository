import React, { useState, nom, image } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Happy from './Happy';
import Medal from './Medal';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <div className="flex flex-wrap">
      <Medal nom="Belgique" image="/images/belgique.png" />
      <Medal nom="France" image="/images/france.png" />
      <Medal nom="Corée" image="/images/corée.png" />
      <Medal nom="USA" image="/images/usa.jpg" />
      <Medal nom="Laos" image="/images/laos.png" />
    </div> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
