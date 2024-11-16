import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Working from "./views/Working";
import Services from "./views/Services";
import Blog from "./views/Blog";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/our-services" element={<Services />} />
      <Route path="/working-with-us" element={<Working />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
};

export default App;
