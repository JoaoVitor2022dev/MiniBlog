// routers 
import { BrowserRouter, Routes, Route , Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

// hooks 
import { useState, useEffect } from "react";

// css style
import './App.css';


// context 
import { AuthProvider } from "../src/context/AuthContext";

// pages 
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

// componentes
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
    <AuthProvider>
      <BrowserRouter>
        <NavBar/>
          <div className="container">
             <Routes>
                 <Route path="/" element={<Home/>} />
                 <Route path="/about" element={<About/>}/>
                 <Route path="/login" element={<Login/>} />
                 <Route path="/register" element={<Register/>}/>
             </Routes>
           </div>
         <Footer/>  
       </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
