import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Auth from "./components/Auth";

import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import FeaturedStays from "./components/FeaturedStays";
import Benefits from "./components/Benefits";
import Adventures from "./components/Adventures";
import OwnerCta from "./components/OwnerCta";
import Footer from "./components/Footer";

import {
  destinations,
  stays,
  benefits,
  adventureTypes,
} from "./data";

function Home() {
  return (
    <div className="app">
      <Navbar />

      <main id="top">
        <Hero />
        <Destinations destinations={destinations} />
        <FeaturedStays stays={stays} />
        <Benefits benefits={benefits} />
        <Adventures adventureTypes={adventureTypes} />
        <OwnerCta />
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}