import React, { useState } from "react";
import TareaFormulario from "./form.jsx";
import Tarea from './todo.jsx'
import '../../styles/listtodo.css'

function ListaDeTareas() {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  }

    const eliminarTarea = id =>{
      const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
      setTareas(tareasActualizadas);
    }

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {
          tareas.map((tarea) =>
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              eliminarTarea={eliminarTarea}
            />
          )
        }
      </div>
      <div>{tareas.length}To do</div>
    </>
  )
}
export default ListaDeTareas;