import React from "react";

import AppThemeProvider from "./context/ThemeContext";
import Router from "./routes/index";
import GlobalStyle from "./common/GlobalStyles";

const App = () => {
  return (
    <AppThemeProvider>
      <GlobalStyle />
      <Router />
    </AppThemeProvider>
  );
};
export default App;
