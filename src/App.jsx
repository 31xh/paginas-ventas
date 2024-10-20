import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Inicio from "./pages/Inicio"
import Sesion from "./pages/Sesion"
import Tienda from "./pages/Tienda"
import Detalle from "./pages/Detalle"
import Itemcategoria from "./pages/Itemcategoria"


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <main id="main">
          <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/inicio" element={<Inicio/>}/>
            <Route path="/sesion" element={<Sesion/>}/>
            <Route path="/tienda" element={<Tienda/>}/>
            <Route path="/detalle" element={<Detalle/>}/>
            <Route path="/itemcategoria" element={<Itemcategoria/>}/>
            <Route path="*" element={<Inicio/>}/>
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
