
import './App.css';
import Inicio from './componentes/Inicio';
import NotFound from './componentes/NotFound';
import Registro from './componentes/Registro';
import SesionIniciada from './componentes/SesionIniciada';
import { Routes, Route, HashRouter} from "react-router-dom"
import Login from './componentes/Login';

function App() {
  return (
   <HashRouter>
    <Routes>
    <Route exact path='/'      element={<Inicio/>}/>
    <Route exact path='/registro'      element={<Registro/>}/>
    <Route exact path='/sesion' element={<Login/>}/>
    <Route exact path='/login' element={<Login/>}/>
    <Route exact path='/sesioniniciada' element={<SesionIniciada/>}/>

    <Route exact path='*'      element={<NotFound/>}/>
    </Routes>
   </HashRouter>
     
  );
}

export default App;
