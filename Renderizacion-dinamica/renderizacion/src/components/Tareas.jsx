import React, { useState } from 'react'

function Tareas() {
    const colores = ["red", "green", "blue", "violet", "yellow"];
    let mapeoColores = colores.map((c) =><li key={c} style={{color:c}}>{c}</li>)

    const arrayTareas = ["Estudiar", "Pasear", "Limpiar"];
    const [nombreTarea, setNombreTarea] = useState("");
    const [listaTareas, setListaTareas] = useState(arrayTareas);


    /*funciion para enviar el formulario*/
    function hadleSubmit(e){
        e.preventDefault();

        /*agregar tarea*/
        setListaTareas([...listaTareas, nombreTarea])

        /*vaciar el formulario*/
        setNombreTarea("");
    }

    /*funcion para renderizar el input*/
    function mostrarInput(e){
        setNombreTarea(e.target.value)

    }

    /*funcion para mapeo de items*/
    const mapeoTareas = listaTareas.map((t) => <li key={t}>{t}</li>);
    return <div>
        <ol>{mapeoColores}</ol>

        <form onSubmit={hadleSubmit}>
            <input type="text" onChange={mostrarInput} value={nombreTarea} />
            <button>Agregar Tarea</button>
        </form>

        <ul>{mapeoTareas}</ul>

    </div>
  
}

export default Tareas