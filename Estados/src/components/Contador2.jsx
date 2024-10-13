import { useState } from "react"

const Contador2 = () => {
  const [cuenta, setCuenta] = useState(0);
  return (
    <>
      <button onClick={() => setCuenta(cuenta + 1)}
      > Cuenta: {cuenta} </button>
    </>
  )
}
export default Contador2