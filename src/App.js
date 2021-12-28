import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Author from "./pages/Author";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/blog" exect element={<Blog />} />
          <Route path="*" exect element={<NotFound />} />
          <Route path="/" exect element={<Home />} />
          <Route path="/auteur" exect element={<Author />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
