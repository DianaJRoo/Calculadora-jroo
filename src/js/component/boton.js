import React from "react";


const Boton =(props) =>{

const esOperador = (valor) => {
    return (valor != '.')  && (valor != '=' ) && isNaN(valor);
}

return (
<div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ""}`} onClick={() => props.manejarClic(props.children)}>

{props.children}

</div>

);




}

export default Boton;