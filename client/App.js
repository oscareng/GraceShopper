import React from "react";

import Navbar from "./components/Navbar";
import Routes from "./Routes";
import history from "./history";

const App = () => {
  return (
    <div history={history}>
      <Navbar />
      <Routes />
    </div>
  );
};

export default App;
