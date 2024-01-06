import React from "react";
import { Header, Info, Topics, Blog, Testimonials, Footer } from "./components";
import "./index.css";

const App = () => {
  return (
    <>
      <Header />

      <Topics />
      <Info />
      <Blog />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
