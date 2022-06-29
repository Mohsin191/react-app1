// import "./App.css";
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ErrorPage from './components/ErrorPage';
// import Navbar from './components/Navbar';
// import Navbar from "./Pages/Navbar";


function App() {
  return (

    <Router>
    <nav>
      <Link to="/" className='mx-3'> Home </Link>
      <Link to="/about"> About </Link>
   
    </nav>
               

  <div className="container w-100 d-flex flex-column justify-content-center align-items-center">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </div>
    <div> Foooter </div>
  </Router>
  );
}

export default App;
