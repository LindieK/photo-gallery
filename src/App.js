import React from "react";

import AppThemeProvider from "./context/ThemeContext";
import AuthProvider from "./context/AuthContext";
import Router from "./routes/index";
import GlobalStyle from "./common/GlobalStyles";

const App = () => {
  return (
    <AppThemeProvider>
      <GlobalStyle />
      <AuthProvider>
        <Router />
      </AuthProvider>
    </AppThemeProvider>
  );
};
export default App;
