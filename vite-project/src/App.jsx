import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import SingUp from "./page/Singup";
import SingIn from "./page/SingIn";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/SingUp"   index element={<SingUp />} />
          <Route path="/singIn" element={<SingIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
