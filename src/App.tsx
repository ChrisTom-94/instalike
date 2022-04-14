import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "pages/Auth";
import Feed from "pages/Feed";
import Home from "pages/Home";
import RequireAuth from "components/routes/RequireAuth";
import Navbar from "components/Navbar";
import Notifications from "components/notifications/Notifications";
import NotFound from "pages/NotFound";
import User from "pages/users/User";
import UserFollowing from "pages/users/UserFollowing";
import UserFollowers from "pages/users/UserFollowers";
import UserSettings from "pages/users/UserSettings";
import ViewedUser from "pages/users/viewedUser/ViewedUser";
import ViewedUserFollowers from "pages/users/viewedUser/ViewedUserFollowers";
import ViewedUserFollowing from "pages/users/viewedUser/ViewedUserFollowing";
import ViewedUserPosts from "pages/users/viewedUser/ViewedUserPosts";
import Post from "pages/Post";
import PostForm from "forms/PostForm";
import UserPosts from "pages/users/UserPosts";

function App() {
  return (
    <main className="max-w-4xl m-auto">
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="login" element={<Auth />} />
        <Route
          path="profile/me"
          element={
            <RequireAuth>
              <User />
            </RequireAuth>
          }
        >
          <Route index element={<UserPosts />} />
          <Route path="following" element={<UserFollowing />} />
          <Route path="followers" element={<UserFollowers />} />
          <Route path="edit" element={<UserSettings />} />
        </Route>
        <Route
          path="profile/:id"
          element={
            <RequireAuth>
              <ViewedUser />
            </RequireAuth>
          }
        >
          <Route index element={<ViewedUserPosts />} />
          <Route path="following" element={<ViewedUserFollowing />} />
          <Route path="followers" element={<ViewedUserFollowers />} />
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
          path="post/add"
          element={
            <RequireAuth>
              <PostForm />
            </RequireAuth>
          }
        />
        <Route
          path="post/:id"
          element={
            <RequireAuth>
              <Post />
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
