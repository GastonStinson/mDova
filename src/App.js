import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './Views/Home/Home'
import Propuestas from './Views/Propuestas/Propuestas';
import NavBar from './Components/NavBar/NavBar';
import Detalle from './Views/Detalle/Detalle';

function App() {
  return (
    <div>
      <NavBar /> {/* El NavBar se muestra en todas las vistas */}
      <Routes>
        <Route path='/' element={<Outlet />}>
          <Route index element={<Home />} />
        </Route>
        <Route path='/propuestas' element={<Outlet />}>
          <Route index element={<Propuestas />} />
        </Route>
        <Route path='/propuestas/:id' element={<Outlet />}>
          <Route index element={<Detalle />} />
        </Route >
      </Routes>
    </div>
  );
}

export default App;
