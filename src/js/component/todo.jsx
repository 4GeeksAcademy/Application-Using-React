import React from "react";
import '../../styles/todo.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea ({id,texto,completada,completarTarea,eliminarTarea}){
  return(
    <div className='tarea-contenedor'>
      <div className="tarea-texto"
      onClick={ () => completarTarea(id)}>
        {texto}
      </div>
      <div className="tarea-contendor-iconos"
      onClick={ () => eliminarTarea(id) }>
        <AiOutlineCloseCircle className="tarea-icono"/>
      </div>
    </div>
  )

}
export default Tarea;