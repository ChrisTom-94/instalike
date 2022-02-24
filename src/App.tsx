import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "pages/Auth";
import Feed from "pages/Feed";
import Home from "pages/Home";
import RequireAuth from "components/routes/RequireAuth";
import Navbar from "components/Navbar";
import Notifications from "components/notifications/Notifications";

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/feed" element={<RequireAuth><Feed /></RequireAuth>} />
        <Route path="/notifications" element={<RequireAuth><Notifications /></RequireAuth>} />
        <Route index element={<Home />} />
      </Routes>
    </main>

  );
}

export default App;
