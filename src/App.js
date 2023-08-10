import React from "react";
import { Route, Routes } from "react-router-dom";
import UserRegistration from "./Components/UserRegistration";
import UserProfile from "./Components/UserProfile";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserRegistration />} />
        <Route path="/UserProfile" element={<UserProfile />} />
      </Routes>
    </>
  );
};

export default App;
