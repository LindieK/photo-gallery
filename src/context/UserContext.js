import React, { createContext, useReducer } from "react";

const UserContext = createContext();

const userInitialState = {};

const userReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_UP":
    case "LOG_IN":
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, userInitialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
