/** @format */

import React from 'react';
import '../jumbotron/welcome.css';

const Welcome = () => {
  return (
    <div className='jumbotron jumbotron-fluid'>
      <div className='container'>
        <h1 className='display-4 epic'>Epibook</h1>
        <p className='lead fs-4'>
          "Leggere, in fondo, non vuol dire altro che creare un piccolo giardino
          all'interno della nostra memoria..."
        </p>
      </div>
    </div>
  );
};

export default Welcome;
