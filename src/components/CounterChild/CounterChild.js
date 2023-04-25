import { memo, useMemo } from "react";

const CounterChild = () => {
  // PASO 1
  // // El console log tardaria mucho al ejecutar este for
  // let superNumero = 0
  // for(let i = 0; i < 1000000000; i++){
  //     superNumero++
  // }

  // PASO 2 CON USE MEMO
  const numero = useMemo(() => {
    let numero = 0;
    for(let i = 0; i < 1000000000; i++) {
      numero++;
    }
    return numero;
  }, []);

  console.log("CounterChild se ejecuta");
  return (
    <div>
      CounterChild
      {/* <p>{superNumero}</p> */}
      <p>{numero}</p>
    </div>
  );
};

export default memo(CounterChild);
