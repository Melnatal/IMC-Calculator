import { useState } from 'react';
import "./app.css";


export default function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const [message, setMessage] = useState('');

  function calculateIMC() {
    const hei = height / 100;
    const imc = weight / (hei * hei);

    if (imc < 18.6) {
      setMessage('You are skinny! Your IMC:' + imc.toFixed(2))

    } else if (imc >= 18.6 && imc < 24.9) {
      setMessage('You are Ok! Your IMC:' + imc.toFixed(2))

    } else if (imc >= 24.9 && imc < 34.9) {
      setMessage('You are a little fat! Your IMC:' + imc.toFixed(2))

    } else if (imc > 34.9) {
      setMessage('you are fat! your IMC:' + imc.toFixed(2))

    }


  }
  return (
    <div className="app">
      <h1>Calculator IMC</h1>
      <span>Let's calculate your IMC</span>
      <div className="area-input">
        <input
          type="text"
          placeholder="weight in (kg) Ex: 90"
          value={weight}
          onChange={(event) => setWeight(event.target.value)}
        />

        <input
          type="text"
          placeholder="height in (cm) Ex: 180"
          value={height}
          onChange={(event) => setHeight(event.target.value)}
        />
        <button class="button" onClick={calculateIMC}>
          calculate
        </button>
      </div>
      <h2>{message} </h2>
    </div>

  )
}
