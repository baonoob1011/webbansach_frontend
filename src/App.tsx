import React from "react";
import "./App.css";
import Navbar from "./layouts/header-footer/Navbar";
import HomePage from "./layouts/home/HomePage";
import Footer from "./layouts/header-footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
