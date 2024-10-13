import React, { useState } from 'react'

function Formulario() {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [edad, setEdad] = useState(0)
    const [email, setEmail] = useState("")
    const [contrasena, setContrasena] = useState("")
    const [error, setError] = useState(false); 
    const validarInput = (e) => {
        e.preventDefault();

        if (nombre === "" || apellido === "" || edad === 0 || email === "" || contrasena === "") {
            setError(true)
            return
        }
        setError(false)
        setNombre("");
        setApellido("");
        setEdad(0);
        setEmail("");
        setContrasena("");
    }


    return (
        <div>
            <form onSubmit={validarInput}>


                {error ? <p>todos los campos son obigatorios </p> : null}
                <h3> Datos Ingresados: {nombre} {apellido} {edad}</h3>

                <div>
                    <label>Nombre:</label>
                    <input type="text" name="Nombre" onChange={(e) => setNombre(e.target.value)} value={nombre} />

                </div>
                <div>
                <label>Apellido:</label>
                    <input type="text" name="Apellido" onChange={(e) => setApellido(e.target.value)} value={apellido} />

                </div>
                <div>
                <label>Edad:</label>
                    <input type="number" name="Edad" onChange={(e) => setEdad(e.target.value)} value={edad} />

                </div>
                <div>
                <label>Email:</label>
                    <input type="email" name="Email" onChange={(e) => setEmail(e.target.value)} value={email} />

                </div>
                <div>
                <label>Contraseña:</label>
                    <input type="password" name="Contrasena" onChange={(e) => setContrasena(e.target.value)} value={contrasena} />

                </div>
                <div>
                    <button type='submit'>Enviar</button>
                </div>

            </form>
        </div>
    );
}

export default Formulario