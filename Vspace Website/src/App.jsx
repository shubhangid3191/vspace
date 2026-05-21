import React from "react";

import AppRouter from "./routes/AppRouter";

import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Topbar />
      <Navbar />

      <AppRouter />

      <Footer />
    </>
  );
}

export default App;