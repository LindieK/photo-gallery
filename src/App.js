import React from "react";

import Router from "./routes/index";
import GlobalStyle from "./common/GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};
export default App;
