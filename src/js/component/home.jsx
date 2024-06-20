import React, { useState } from "react";
import "../../styles/home.css";
import Boton from "./boton";
import Pantalla from "./pantalla";
import BotonClear from "./botonClear";
import { Footer } from "./footer";
import { GiCoronation } from "react-icons/gi";
import { evaluate } from "mathjs";
import { CSSTransition } from "react-transition-group";


//create your first component
const Home = () => {
  const [input, setInput] = useState('');
  const [ocultarOperador, setOcultarOperador] = useState('');

  const maxInput = 18;

  const mensajesAleatorios = [
    
    "Hola Lindo!",
    "Ya te dije que eres muy guapo?",
    "Eres lo que me receto el doctor",
    "Vamos por unos mojitos?",
    "Que sexy te ves hoy",
    "Tu sonrisa me ilumina la vida",
    "Eres mi persona favorita",
    "Eres arte en movimiento",
    "Haces que mi corazón sonría",
    "Contigo, todo es mejor"
    
  ];

  const agregarInput = (value) => {
    if (value === '.' || !isNaN(value)) {
      if (input.length < maxInput) {
        setInput((prevInput) => prevInput + value);
        setOcultarOperador((prevOcultarOperador) => prevOcultarOperador + value);
      }
    } else {
      setInput('');
      setOcultarOperador((prevOcultarOperador) => prevOcultarOperador + value);
    }
  };

  const calcularResultado = () => {
    try {
      setInput(evaluate(ocultarOperador).toString());
      setOcultarOperador(evaluate(ocultarOperador).toString());
    } catch {
      setInput("Error, TARADO");
      setOcultarOperador('');
    }
  };

  const clearInput = () => {
    setInput('');
    setOcultarOperador('');
  };

  const mensajeAleatorio = () => {
    let mensaje = mensajesAleatorios[Math.floor(Math.random() * mensajesAleatorios.length)];
    setInput(mensaje);
  };

  return (
    <div className="container">
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={clearInput}>Clear</BotonClear>
          <BotonClear manejarClear={mensajeAleatorio}>
            <GiCoronation />
          </BotonClear>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
