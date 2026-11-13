import { useState, useEffect } from 'react';

//import InvoicePage from './InvoicePage.tsx';

export default function App() {
  const [counter, setCounter] = useState(11);
  //const arr = useState(11);

  //const counter = arr[0];
  // const setCounter = arr[1]; 
  
  return (
    <main>
      <span>{counter}</span><br />
      <button onClick={() => setCounter(counter + 1)}>contar</button>
    </main>
  )
}