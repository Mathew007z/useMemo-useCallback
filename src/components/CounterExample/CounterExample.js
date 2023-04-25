import { useState, useCallback } from "react";
import CounterChild from "../CounterChild/CounterChild";
const initialState = 0;

const CounterExample = () => {
  const [counter, setCounter] = useState(initialState);
  const [input, setInput] = useState("");
  // El use Callback me ayuda a guardar  una funcion pura, para que al pasarselas
  // al hijo, queden guardadas en memoria, de esta manera el input que no tiene que ver nada
  // con nuestro contador, ya no modifica a nuestro estado counter.
  const suma = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  const resta = useCallback(() => {
    setCounter(counter - 1);
  }, [counter]);

  const reset = useCallback(() => {
    setCounter(initialState);
  }, [counter]);

  const styles = {
    display:'flex',
    flexDirection:'column',
    alignItems:'center', 
    justifyContent:'center'
  }
  // PASO 1
  // const suma = () => {
  //     setCounter(counter + 1)
  // }
  // const resta = () => {
  //     setCounter(counter - 1)
  // }
  // const reset = () => {
  //     setCounter(initialState)
  // }

  // ev form
  const handleForm = (e) => {
    setInput(e.target.value);
  };

  return (
    <div style={styles}>
      <h2 style={{fontFamily:'sans-serif',fontSize:'40px'}}>Contador</h2>
      <div style={{display:'flex'}}>
        <button onClick={suma}> + </button>
        <button onClick={resta}> - </button>
      </div>
      <button onClick={reset}> reset </button>
      <input type="text" onChange={handleForm} value={input} />
      <span>{counter}</span>
      <CounterChild sumar={suma} restar={resta} reset={reset} />
    </div>
  );
};

export default CounterExample;
