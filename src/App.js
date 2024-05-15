import React, { Fragment } from "react";
import Header from "./components/common/Header";
import RootRoutes from "./RootRoutes";
import "./App.css";

/**
 * App is a wrapper for <Layout>, you should not need to change this file.
 */

function App() {
  return (
    <Fragment>
      <Header />
      <main className="container">
        <RootRoutes />
      </main>
    </Fragment>
  );
}

export default App;
