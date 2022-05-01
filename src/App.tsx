import React from "react";
import "./App.scss";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Routers from "./config/Router";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routers/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
