import A from "./Componentes/A"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./Nav"
import Login from "./Componentes/Login"
import Cart from "./Componentes/Cart"
import Become from "./Componentes/Become"
import Logo from "./Componentes/Logo"
import Signup from "./Componentes/Signup"
import Login2 from "./Componentes/Login2"


function App(){



  return(<>

  <BrowserRouter>

 <Nav/>
  <Routes>
    <Route  path="/"   element={<A/>}/>
    <Route  path="/login"   element={<Login/>}/>
    <Route  path="/cart" element={<Cart/>}/>
    <Route path="/become" element={<Become/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/login2" element={<Login2/>}/>
   




  </Routes>
  
  
  
  
  
  
  
  </BrowserRouter>


  </>)
}

export default App