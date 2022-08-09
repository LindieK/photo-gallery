import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import { toast } from "react-toastify";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  //updateEmail,
  //updatePassword,
  onAuthStateChanged,
} from "firebase/auth";

import { createUser } from "../util/dbQueries";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const auth = getAuth();

  const signup = (username, email, password) => {
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
          // toast.success(`Welcome ${username}!`, {
          //   position: "top-center",
          // });
          navigate("/");
        });
      })
      .catch((error) => {
        console.error(error);
        //toast.error(error.message, { position: "top-center" });
      });
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        const user = response.user;
        user.getIdTokenResult().then((response) => {
          const token = response.token;
          if (token) {
            sessionStorage.setItem("Auth Token", token);
            console.log("User Logged In");
            // toast.success(`Welcome back!`, {
            //   position: "top-center",
            // });
            navigate("/");
          }
        });
      })

      .catch((error) => {
        console.error(error);
        //toast.error(error.message, { position: "top-center" });
      });
  };

  const logout = () => {
    signOut(auth).then(() => {
      sessionStorage.removeItem("Auth Token");
      console.log(currentUser);
    });
  };

  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => alert(`A reset email has been sent to ${email}`))
      // .then(() => toast(`A reset email has been sent to ${email}`), {
      //   position: "top-center",
      // })
      .catch((error) => {
        console.error(error);
        // toast.error(error.message, {
        //   position: "top-center",
        // });
      });
  };

  const updateEmail = (email) => {
    return currentUser.updateEmail(email);
  };

  const updatePassword = (password) => {
    return currentUser.updatePassword(password);
  };

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
