import React, { useState } from 'react'
import { tareasConObjetos } from '../utils/Tareasiniciales';

function TareasObjetos() {

    const [nombreTarea, setNombreTarea] = useState("");
    const [listaTareas, setListaTareas] = useState(tareasConObjetos);
    const [idTareas, setIdTareas] = useState(tareasConObjetos[tareasConObjetos.length - 1].id);
    /*funcion para enviar el formulario*/
    function handleSubmit(e) {
        e.preventDefault()

        /*generar un nuevo id*/
        const nuevoId = idTareas + 1;

        /*agregar la tarea*/
        setListaTareas([
            ...listaTareas, {
                id: nuevoId ,
                nombre: nombreTarea,
                completada: false,
            }
        ])

        /*actualizar el id*/
        setIdTareas(nuevoId)


        /*vaciar el formulario*/
        setNombreTarea("");

    }
    /*funcion para renderizar el input*/
    function mostrarInput(e) {
        setNombreTarea(e.target.value);
        
    }


    /*funcion para completar la tarea*/
    function completar(comun) {
        const nuevasTareas = [...listaTareas]


        /*buscar una coincidencia unica*/

        let encontrado = nuevasTareas.findIndex ((obj)=> obj.id === comun.id);

        nuevasTareas[encontrado].completada = true;

        setListaTareas(nuevasTareas);
        
    }




    /*funcion para eliminar una tarea */
    function eliminar(comun) {
        /*filtrar el arreglo de tareas para excluir la tarea con el id dado*/
        const nuevasTareas = listaTareas.filter((obj) => obj.id !== comun.id)

        /*actualizamos el setter*/
        setListaTareas(nuevasTareas)
        
    }
    /*funcion para el mapeo de los items*/
    const mapeoTareas = listaTareas.map((t) => (
    
    <li key={t.id}>
        {t.nombre}  
        {t.completada === false ? (
            <button onClick={()=> completar (t)}>Completar</button>) :("")}

            <button onClick={()=> eliminar (t)}>Borrar</button>
    </li>));


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={mostrarInput} value={nombreTarea} />
                <button>Agregar Tarea</button>
            </form>

            <ul>{mapeoTareas}</ul>
        </div>
    )
}

export default TareasObjetos