import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/HeaderComponent";
import Home from "./components/HomeComponent";
import Detail from "./components/DetailComponent";
import Footer from "./components/FooterComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header-container">
          <Header />
        </div>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail" component={Detail} />
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
