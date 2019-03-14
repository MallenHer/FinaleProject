import React from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import '../App.css'

function Toolbar (){
  return(
  
    <nav className='navfi'>
    
  
    <ul className="uluf">
    <li className="nav-item">
        <NavLink className="lugo" to="/" >
           Home
         </NavLink>
    </li>
         
         <li className="nav-item">
         <NavLink className="nav-link m-2 menu-item" to="/profile" >
           Profile
         </NavLink>
         </li>
         
         <li className="nav-item">
         <NavLink className="nav-link m-2 menu-item" to="/signup" >
           Registrate
         </NavLink>
         </li>
        
        <li className="nav-item">
        <NavLink className="nav-link m-2 menu-item" to="/login" >
           Inicia
         </NavLink>
        </li>
         
         <li className="nav-item">
         <NavLink className="nav-link m-2 menu-item" to="/createnew" >
           Crear
         </NavLink>
         </li>
         
         <li className="nav-item">
         <NavLink className="nav-link m-2 menu-item" to="/projects" >
           projects
         </NavLink>
         </li>
         
         <li className="nav-item">
         <NavLink className="nav-link m-2 menu-item" to="/persons" >
           persons
         </NavLink>
         </li>
         
         <li className="nav-item">
         <button className="nav-link m-2 menu-item" onClick={() => {
           axios.get("http://localhost:3000/logout", { withCredentials: true })
             .then(res => {
               console.log(res)
             })
         }}>
           Cerrar sesión
         </button>
         </li>
         
         </ul>
         
         
     </nav>

  
  
  )
}



export default Toolbar
