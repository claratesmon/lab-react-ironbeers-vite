import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import {BrowserRouter,Route, Routes, Navigate} from 'react';
import React from 'react';
import AllBeersPage from "./pages/AllBeersPage";

function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      {/* <HomePage/> */}
      <Routes>
        {/* <Route path='/' element={<HomePage/>} /> */}
        <Route path="/pages/AllBeersPage" element={<AllBeersPage />} />
      
      </Routes>

    </div>
    </>
  );
}

export default App;
