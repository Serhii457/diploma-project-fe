import React from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Woman from './pages/Woman';
import Man from './pages/Man';
import Kids from './pages/Kids';
import Aksessuary from './pages/Aksessuary';

function App() {
  return (
    <>

    <CartProvider>
      <Router>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/man" element={<Man />} />
        <Route path="/woman" element={<Woman />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/aksessuary" element={<Aksessuary />} />
        <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </Router>
    </CartProvider>
    </>
  );
}

export default App;
