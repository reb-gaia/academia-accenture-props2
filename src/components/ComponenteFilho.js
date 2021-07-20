import React from 'react';

function ComponenteFilho(props) {
  const handleClick = () => {
    props.setEstadoPai();
  }

  return <div className="componente-filho">
    <h1>botão localizado no componente filho {props.estadoPai}</h1>
    <button onClick={handleClick}>Clique aqui para alterar o componente filho</button>
  </div>

}

export default ComponenteFilho;