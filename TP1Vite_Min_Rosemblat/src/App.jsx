import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formulario from './assets/Componentes/Formulario.jsx'
import Listado from './assets/Componentes/Listado.jsx'
function App() 
{
  return (
    <>
    <h1>ADMINISTRADOR DE PACIENTES</h1>
      <Formulario/>
      <Listado/>
    </>
  )
}

export default App
