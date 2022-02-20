import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "pages/Auth";
import Feed from "pages/Feed";
import Home from "pages/Home";
import RequireAuth from "components/routes/RequireAuth";

function App() {
  return (
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/feed" element={<RequireAuth><Feed /></RequireAuth>} />
        <Route index element={<Home />} />
      </Routes>
  );
}

export default App;
