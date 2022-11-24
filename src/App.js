import React from 'react';
import Navbar from './components/Nav';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Random from './components/pages/Random';
import AllFilm from './components/pages/AllFilm';


function App() {

  return (
    <div className="App">
   <Router>
    <Navbar />
    <Routes>
      <Route path='/random' element={<Random/>}/>
      <Route path='/' element={<AllFilm/>}/>
    </Routes>
   </Router>
   </div>
  );
}

export default App;
