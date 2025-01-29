import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Home from "./pages/Home/Home"

import './App.css'

function App() {
 

  return (
     <BrowserRouter>
       <Routes>
         <Route path='/' element={<Home/>}  />
         <Route path='/Projects' element={<>Projetos</>}  />
         <Route path='/Tecnologias' element={<>Tecnologias</>}  />
         <Route path='/SobreMin' element={<>Sobre min</>}  />
       </Routes>
     </BrowserRouter>
  )
}

export default App