import React from 'react';
import './App.css';
import Header from "./components/HeaderComponent";
import HomeComponent from "./components/HomeComponent";
import Footer from "./components/FooterComponent"

function App() {
  return (
    <div className="App">
      <div className="header-container">
        <Header />
      </div>
      <HomeComponent />
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
