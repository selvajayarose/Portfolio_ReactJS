import React from "react";
import Header from "./components/AppHeader";
import LandingPage from "./components/LandingPage";

import "./app.css";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div style={{ height: `calc(${window.innerHeight} - 90px)` }}>
        <LandingPage />
      </div>
    </React.Fragment>
  );
};

export default App;
