import React from "react";
import { Header, Intro, Works, About, Resume, Footer } from "./layout";

const App = () => {
  return (
    <main>
      <div className="container">
        <Header />
        <Intro />
        <Works />
        <About />
        <Resume />
      </div>
      <Footer />
    </main>
  );
};

export default App;
