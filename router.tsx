import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./src/pages/Home";
import Blogs from "./src/pages/Blogs";
import Contact from "./src/pages/Contact";
import NoPage from "./src/pages/NoPage";
import Layout from "./src/pages/Layout";
import React from "react";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
