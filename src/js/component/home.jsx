import React, {useState} from "react";
import "../../styles/home.css";
import Boton from "./boton";
import Pantalla from "./pantalla";
import BotonClear from "./botonClear";
import { Footer } from "./footer";
import { FaPowerOff } from "react-icons/fa";

//create your first component
const Home = () => {

const [input, setInput] = useState('');

const agregarInput = (value) =>{
setInput(input + value)
};

	return (
		<div className="container">

			<div className="contenedor-calculadora">
				<Pantalla input={input}/>
				<div className="fila">
					<Boton manejasClic={agregarInput}>1</Boton>
					<Boton manejasClic={agregarInput}>2</Boton>
					<Boton manejasClic={agregarInput}>3</Boton>
					<Boton manejasClic={agregarInput}>+</Boton>

				</div>
				<div className="fila">
					<Boton manejasClic={agregarInput}>4</Boton>
					<Boton manejasClic={agregarInput}>5</Boton>
					<Boton manejasClic={agregarInput}>6</Boton>
					<Boton manejasClic={agregarInput}>-</Boton>


				</div>
				<div className="fila">
					<Boton manejasClic={agregarInput}>7</Boton>
					<Boton manejasClic={agregarInput}>8</Boton>
					<Boton manejasClic={agregarInput}>9</Boton>
					<Boton manejasClic={agregarInput}>*</Boton>


				</div>
				<div className="fila">
					<Boton manejasClic={agregarInput}>=</Boton>
					<Boton manejasClic={agregarInput}>0</Boton>
					<Boton manejasClic={agregarInput}>.</Boton>
					<Boton manejasClic={agregarInput}>/</Boton>

				</div>
				<div className="fila">
					<BotonClear >Clear</BotonClear>
					<BotonClear>
					   <FaPowerOff />
						
					</BotonClear>
				</div>
			</div>
		
				<Footer />
			
		</div>
		
		
	);
};

export default Home;
