import React from "react";

import AppThemeProvider from "./context/ThemeContext";
import AuthProvider from "./context/AuthContext";
import Router from "./routes/index";
import GlobalStyle from "./common/GlobalStyles";
//import { StyledToastContainer } from "./common/CommonStyles";

const App = () => {
  return (
    <AppThemeProvider>
      <GlobalStyle />
      <AuthProvider>
        {/* <StyledToastContainer position="top-center" /> */}
        <Router />
      </AuthProvider>
    </AppThemeProvider>
  );
};
export default App;
