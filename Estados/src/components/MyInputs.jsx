import React, { useState } from 'react';

function MyInputs() {
    const [nombre, setNombre] = useState("");

    return (
        <div>
            <input 
                type="text" onChange={(e) => setNombre(e.target.value)}/>
                
            <h4>Entrada: {nombre} </h4>
        </div>
    );
}

export default MyInputs;
