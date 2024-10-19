
import './App.css'
import Tareas from './components/Tareas'
import TareasObjetos from './components/TareasObjetos'

function App() {
  

  return (
    <>
    <h1>Renderizacion Dinamica</h1>
    <div>
      <h2>Tareas</h2>
      <Tareas/>
    </div>
    <div>
      <h2>Tareas con objetos</h2>
      <TareasObjetos/>
    </div>
    
      
    </>
  )
}

export default App
