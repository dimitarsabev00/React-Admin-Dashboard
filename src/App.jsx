import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import UserDetails from "./pages/UserDetails/UserDetails";
import New from "./pages/New/New";
import "./styleApp/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
const App = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="users">
              <Route index element={<Users />} />
              <Route path=":userId" element={<UserDetails />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            {/* <Route path="products">
              <Route index element={} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
