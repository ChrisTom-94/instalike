import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "pages/Auth";
import Feed from "pages/Feed";
import Home from "pages/Home";
import RequireAuth from "components/routes/RequireAuth";
import Navbar from "components/Navbar";
import Notifications from "components/notifications/Notifications";
import NotFound from "pages/NotFound";
import User from "pages/user/User";
import UserFollowing from "pages/user/UserFollowing";
import UserFollowers from "pages/user/UserFollowers";

function App() {
  return (
    <main className="max-w-4xl m-auto">
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="login" element={<Auth />} />
        <Route
          path="profile/:username"
          element={
            <RequireAuth>
              <User />
            </RequireAuth>
          }
        >
          <Route index element={<div>Posts</div>} />
          <Route path="following" element={<UserFollowing />} />
          <Route path="followers" element={<UserFollowers />} />
        </Route>
        <Route
          path="feed"
          element={
            <RequireAuth>
              <Feed />
            </RequireAuth>
          }
        />
        <Route
          path="notifications"
          element={
            <RequireAuth>
              <Notifications />
            </RequireAuth>
          }
        />
        <Route index element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
