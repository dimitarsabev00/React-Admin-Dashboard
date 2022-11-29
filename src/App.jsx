import React from "react";
import TopBar from "./components/TopBar/TopBar";
import "./App.css";
import Sidebar from "./components/SideBar/SideBar";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList/UserList";
import UserDetails from "./pages/UserDetails/UserDetails";
import NewUser from "./pages/NewUser/NewUser";
import ProductList from "./pages/ProductList/ProductList";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import NewProduct from "./pages/NewProduct/NewProduct";
const App = () => {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<UserDetails />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />

          <Route path="/product/:productId" element={<ProductDetails />} />

          <Route path="/newproduct" element={<NewProduct />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
