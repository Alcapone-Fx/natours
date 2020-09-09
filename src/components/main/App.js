import React from "react";

import Navigation from "../navigation/Navigation";
import Header from "../header/Header";
import Body from "../body/Body";
import "../../assets/sass/main.scss";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Body />
    </div>
  );
}

export default App;
