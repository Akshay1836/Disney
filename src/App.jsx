import { useState } from "react";
import "./App.css";
import Header from "./Componets/Header";
import Slider from "./Componets/Slider";
import ProductionHouse from "./Componets/ProductionHouse";
import GenreMovieList from "./Componets/GenreMovieList";
import Banner from "./Componets/Banner";
import Footer from "./Componets/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Header />

      <Banner />

      <ProductionHouse />

      <GenreMovieList />
      <Footer />
    </div>
  );
}

export default App;
