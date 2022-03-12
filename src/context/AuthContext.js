import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
  onAuthStateChanged,
} from "firebase/auth";

import { createUser } from "../util/dbQueries";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const auth = getAuth();

  function signup(username, email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        const user = response.user;
        user.getIdTokenResult().then((response) => {
          const token = response.token;
          if (token) {
            sessionStorage.setItem("Auth Token", token);
          }
        });
        const data = {
          uid: user.uid,
          username,
          email,
          password,
          authProvider: "local",
        };
        createUser(data).then(() => {
          console.log("User Created");
          navigate("/");
        });
      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
  }

  function login(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        const user = response.user;
        user.getIdTokenResult().then((response) => {
          const token = response.token;
          if (token) {
            sessionStorage.setItem("Auth Token", token);
            console.log("User Logged In");
            navigate("/");
          }
        });
      })

      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
  }

  function logout() {
    return signOut(auth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsuscribe;
  }, [auth]);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
