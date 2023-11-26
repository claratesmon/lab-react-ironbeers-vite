import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import AllBeersPage from "./pages/AllBeersPage";
import RandomBeerPage from "./pages/RandomBeerPage"
import AddBeerPage from "./pages/AddBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import { useState } from "react";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>

          <Route path='/' element={<HomePage />} />
          <Route path='/pages/AllBeersPage' element={<AllBeersPage />} />
          <Route path='/random-beer' element={<RandomBeerPage />} />
          <Route path='/new-beer' element={<AddBeerPage />} />
          <Route path='/beers/:beerId' element={<BeerDetailsPage />} />
          

        </Routes>

      </div>
    </>
  );
}

export default App;
