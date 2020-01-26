import React, {useState} from 'react';
import './App.css';

function App() {

  const update = function() {
    setcount(count + 1)
  };

  const [count, setcount] = useState(0);
  return (
    <div>
      <p>Has hecho click {count} veces</p>
      <button onClick={() => update()}>Pulsa hijo de puta</button>
    </div>
  );
}

export default App;
