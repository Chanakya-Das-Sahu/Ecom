import React from 'react'
import Navbar from './navbar.jsx'
import Home from './home.jsx'
import Cart from './cart.jsx'
import Orders from './orders.jsx'
import AdminConsole from './adminConsole.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    <>
   
    <BrowserRouter> 
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Orders' element={<Orders/>}/>
      <Route path='/adminConsole' element={<AdminConsole/>}/>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;