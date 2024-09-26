import React from 'react'


//---dependencies

import { BrowserRouter,Routes,Route } from 'react-router-dom'

//-- components

import Navbar from './components/Navbar';
import Footer from './components/Footer';

//-- pages

import Home from './pages/Home';
import Generic from './pages/Generic';
import Todo from './pages/Todo';



const App = () => {
  return (
    <BrowserRouter>
    

    <Navbar/>


    <Routes>


    <Route   path='/'   element={<Home/>}    />
    <Route   path='/Generic'   element={<Generic/>}    />
    <Route   path='/Todo'   element={<Todo/>}    />



    </Routes>

    <Footer/>
    
    </BrowserRouter>
  )
}

export default App