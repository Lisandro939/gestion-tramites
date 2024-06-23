import React from 'react';
import { useOutletContext } from 'react-router-dom';

const CompleteDocumentation = () => {

    const { setTitle } = useOutletContext();

    setTitle("Completar documentación")

  return (
    <div>
      <h1>Completar documentación</h1>
    </div>
  );
};

export default CompleteDocumentation;
