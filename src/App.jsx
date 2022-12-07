import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import UserDetails from "./pages/UserDetails/UserDetails";
import New from "./pages/New/New";
import "./styleApp/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Login from "./pages/Login/Login";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
const App = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Router>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route
                index
                element={
                  <RequireAuth>
                    <Users />
                  </RequireAuth>
                }
              />
              <Route
                path=":userId"
                element={
                  <RequireAuth>
                    <UserDetails />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New
                      inputs={userInputs}
                      title="Add New User"
                      coll="users"
                    />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="products">
              <Route index element={<Products />} />
              <Route path=":productId" element={<ProductDetails />} />
              <Route
                path="new"
                element={
                  <New
                    inputs={productInputs}
                    title="Add New Product"
                    coll="products"
                  />
                }
              />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
