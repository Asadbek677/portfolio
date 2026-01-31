import React from "react";
import { Header, Intro, Works, About } from "./layout";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Intro />
      <Works />
      <About />
    </div>
  );
};

export default App;
