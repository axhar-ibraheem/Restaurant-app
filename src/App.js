import Header from "./components/Layout/Header";
import React from "react";
import RestuarantSummary from "./components/Layout/RestuarantSummary";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <main>
        <RestuarantSummary></RestuarantSummary>
      </main>
    </React.Fragment>
  );
}

export default App;
