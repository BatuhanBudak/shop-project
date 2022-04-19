import "./style.css";
import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { Routes, Route } from "react-router-dom";
import Item from "./pages/Item";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="main-container">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/:itemId" element={<Item />} />
        <Route path="cart" element={<Cart />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
