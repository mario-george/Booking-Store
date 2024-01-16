import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />

          <Route path="/login" element={<Layout>Sign In </Layout>} />
        </Routes>
      </BrowserRouter>{" "}
    </>
  );
}

export default App;
