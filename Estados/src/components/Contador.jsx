import React, { useState } from 'react';

function Contador() {
    const [cuenta, setCuenta] = useState(0);

    return (
        <div>
            <button onClick={() => setCuenta((cuenta) =>(cuenta += 1))}>
                Cuenta: {cuenta}
            </button>
        </div>
    );
}

export default Contador;
