import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p><Link to="/auth">Login</Link></p>
      <p><Link to="/feed">Feed</Link></p>
    </div>
  );
}
