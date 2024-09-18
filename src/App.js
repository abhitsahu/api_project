import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './App.scss';
import './style/Home.scss'
import './style/Navbar.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (

<ChakraProvider>
    <BrowserRouter>


      {/* <ScrollRestoration /> */}
      <Navbar />

      <Routes>

        <Route path='/' element={<Home/>}></Route>

      </Routes>
    </BrowserRouter>
</ChakraProvider>
            
  
  );
}

export default App;
