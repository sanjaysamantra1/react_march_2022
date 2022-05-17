import "./App.css";
import React from "react";
import Carousel from "./components/carousel/Carousel";
import Footer from "./components/footer/Footer";
import MyHeader from "./components/header/Header";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <MyHeader></MyHeader>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
