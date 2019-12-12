import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes";
import Navigation from './components/Navigation';
import Footer from './components/Footer'

import './App.css';


function App() {
  return (
    <Router>
      <div className="flyout">
        <Navigation />
        <main style={{ marginTop: "5px" }}>
          <Routes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
