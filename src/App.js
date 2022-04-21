import MainPage from "./pages/mainPage";
import AdminPage from "./pages/adminPage";
import LoginPage from "./pages/loginPage";
import Nav from "./components/nav";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import SignUpPage from "./pages/signupPage";

import React from "react";

function App() {
  return (
    <div className="App">
          <React.StrictMode>
      
      <BrowserRouter>
      <Nav></Nav>
        <Routes>
          <Route path="/" element={<LoginPage />}> </Route>
          <Route path="/main" element={<MainPage />}> </Route>
          <Route path="/admin0710" element={<AdminPage />}> </Route>
          <Route path="/signup" element={<SignUpPage/>} ></Route>
        </Routes>
      </BrowserRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
