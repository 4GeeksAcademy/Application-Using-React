import React from "react";
import '../../styles/index.css'
import ListaDeTareas from './todolist.jsx'
import '../../styles/index.css'
//create your first component
const Home = () => {

	return (
		<div className="aplicacion-tareas">
		
		<div className='tareas-lisa-principal'>
		  <h1> To do list</h1>
		 <ListaDeTareas />
		</div>
		
	  </div>
	);
};

export default Home;
