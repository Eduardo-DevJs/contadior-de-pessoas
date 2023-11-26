import { useState } from 'react';

const App = () => {
  const [contador, setContador] = useState(0);

  const handleAdicionar = () => {
    setContador(contador + 1);
  };

  const handleReset = () => {
    setContador(0)
  }

  return (
    <div className="container">
      <div className="card_contador">
        <h1>Quantidade de pessoas:</h1>
        <p>{contador}</p>
        <div className="buttons">
          <button onClick={handleAdicionar}>Adicionar</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default App;
