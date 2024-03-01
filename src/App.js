import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import SingleHotel from "./pages/SingleHotel";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/searchresult" element={<SearchResult />} />
          <Route path="/singlehotel/:id" element={<SingleHotel />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
