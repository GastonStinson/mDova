import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Views/Home/Home'
import Propuestas from './Views/Propuestas/Propuestas';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/propuestas' element={<Propuestas />} />
    </Routes>
  );
}

export default App;
