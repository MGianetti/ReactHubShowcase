import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PagesLayout from "./components/page-layout";
import HomePage from "./pages/home-page";
import UserPage from "./pages/user-page";
import NotFound from "./pages/not-found";

import "./sass/base.scss";

function App() {
  return (
    <PagesLayout className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="*" element={<NotFound />} />
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/user/:username" element={<UserPage />}></Route>
        </Routes>
      </BrowserRouter>
    </PagesLayout>
  );
}

export default App;
