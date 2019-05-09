import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/HeaderComponent";
import HomeComponent from "./components/HomeComponent";
import Footer from "./components/FooterComponent"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header-container">
          <Header />
        </div>
        <Route exact path="/" component={HomeComponent} />
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
