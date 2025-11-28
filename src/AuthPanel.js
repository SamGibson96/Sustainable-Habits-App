// src/AuthPanel.js

import React, { useState, useEffect } from "react";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

function AuthPanel() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  // Listen to authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setStatus("Logged in as " + user.email);
      } else {
        setCurrentUser(null);
        setStatus("Not logged in.");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignup = async () => {
    try {
      setStatus("Signing up...");
      await createUserWithEmailAndPassword(auth, email, password);
      // onAuthStateChanged will update status and currentUser
    } catch (error) {
      console.error("Sign up error:", error);
      setStatus("Sign up error: " + error.message);
    }
  };

  const handleLogin = async () => {
    try {
      setStatus("Logging in...");
      await signInWithEmailAndPassword(auth, email, password);
      // onAuthStateChanged will update status and currentUser
    } catch (error) {
      console.error("Login error:", error);
      setStatus("Login error: " + error.message);
    }
  };

  const handleLogout = async () => {
    try {
      setStatus("Logging out...");
      await signOut(auth);
      // onAuthStateChanged will update status and currentUser
    } catch (error) {
      console.error("Logout error:", error);
      setStatus("Logout error: " + error.message);
    }
  };

  const isLoggedIn = !!currentUser;

  return (
    <div style={{ maxWidth: 400 }}>
      <div style={{ marginBottom: "1rem" }}>
        <strong>Current user:</strong>{" "}
        {currentUser ? currentUser.email : "None"}
      </div>

      {!isLoggedIn && (
        <>
          <h2>Login or sign up</h2>

          <div style={{ marginBottom: "1rem" }}>
            <label>
              Email
              <br />
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginTop: "0.25rem",
                }}
              />
            </label>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label>
              Password
              <br />
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginTop: "0.25rem",
                }}
              />
            </label>
          </div>

          <div style={{ marginBottom: "1rem", display: "flex", gap: "0.5rem" }}>
            <button onClick={handleSignup}>Sign Up</button>
            <button onClick={handleLogin}>Log In</button>
          </div>
        </>
      )}

      {isLoggedIn && (
        <>
          <h2>Dashboard</h2>
          <p>You are logged in as {currentUser.email}.</p>
          <button onClick={handleLogout}>Log Out</button>
        </>
      )}

      {status && (
        <p style={{ marginTop: "1rem", whiteSpace: "pre-wrap" }}>{status}</p>
      )}
    </div>
  );
}

export default AuthPanel;
