import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaPrincipal from './pages/PaginaPrincipal/paginaPrincipal.js';
import Portafolio from "./pages/Portafolio/portafolio.js";
import Usuarios from "./pages/Usuarios/usuarios.js";
import Administracion from "./pages/Administracion/administracion.js";
import InformacionGeneral from "./pages/InformacionGeneral/informacionGeneral.js";
import { ProtectedRoute } from './pages/ProtectedRoute/protectedRoute.js';

const App = () =>{
  return(
    <BrowserRouter>
      <Routes>
      <Route element={<ProtectedRoute isAllowed={true}/>}>
        <Route path="/portafolio" element = {<Portafolio/>}></Route>
        <Route path="" element = {<PaginaPrincipal/>}></Route>
        
      </Route>

        <Route path="/paginaPrincipal" element = {<PaginaPrincipal/>}></Route>
        <Route path="/usuarios" element = {<Usuarios/>}></Route>
        <Route path="/administracion" element = {<Administracion/>}></Route>
        <Route path="/informacionGeneral" element = {<InformacionGeneral/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
