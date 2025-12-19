import { useState, useEffect } from "react";
import { auth, db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";
import Appbackground from "./Images/AppBackground.png";

// Helper function to get today's date used Canadian format because it is yyyy-mm-dd
  const getTodayKey = () =>
    new Date().toLocaleDateString("en-CA");

function AuthPanel() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

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

  // Sign up function
  const handleSignup = async () => {
    try {
      setStatus("Signing up...");

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      const user = userCredential.user;

      // Initialize user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
      dailyScore: 0,
      totalScore: 0,
      lastLoggedIn: getTodayKey(),
      checkedHabits: {}
    });
      
    
    } catch (error) {
      console.error("Sign up error:", error);
      setStatus("Sign up error: " + error.message);
    }
  };

  // Login function
  const handleLogin = async () => {
    try {
      setStatus("Logging in...");
      await signInWithEmailAndPassword(auth, email, password);
      
    } catch (error) {
      console.error("Login error:", error);
      setStatus("Login error: " + error.message);
    }
  };

  // Logout function
  const handleLogout = async () => {
    try {
      setStatus("Logging out...");
      await signOut(auth);
    } catch (error) {
      console.error("Logout error:", error);
      setStatus("Logout error: " + error.message);
    }
  };

  const isLoggedIn = !!currentUser;

  return (
    <div className="flower-bg d-flex justify-content-center align-items-center" style = {{backgroundImage: `url(${Appbackground})`}}> 
    <div className="border border-4 border-black bg-success p-4 rounded shadow" style={{ width: "350px" }}>

      {!isLoggedIn && (
        <>
          <h2>Login or sign up</h2>
       
          <div style={{ marginBottom: "1rem" }}>
            <label>
              Email
              <br />
              <input 
                className="border border-black border-3"
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
                className="border border-black border-3"
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
            <button className = "border border-black border-3 btn btn-info" onClick={handleSignup}>Sign Up</button>
            <button className = "border border-black border-3 btn btn-info" onClick={handleLogin}>Log In</button>
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
    </div>
  );
}

export default AuthPanel;
