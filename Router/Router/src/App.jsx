import { Route, Routes } from 'react-router-dom';
import Home from './Views/Home';
import Register from './Views/Register';
import Login from './Views/Login';
import Navegation from './Components/Navegation';
import NotFound from './Views/NotFound';

function App() {
  return (
    <>
      <Navegation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;

