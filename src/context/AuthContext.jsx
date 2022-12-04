import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
const INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  const logOut = () => {
    signOut(auth);
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser));
  }, [state.currentUser]);

  return (
    <AuthContext.Provider
      value={{ currentUser: state.currentUser, dispatch, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
