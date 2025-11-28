// src/App.js

import React, { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";

import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

import AuthPanel from "./AuthPanel";
import Dashboard from "./Dashboard";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setAuthReady(true);
    });

    return () => unsubscribe();
  }, []);

  if (!authReady) {
    return <div style={{ padding: "2rem" }}>Loading...</div>;
  }

  return (
    <HashRouter>
      <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>Flower Power App</h1>

        {currentUser ? <Dashboard user={currentUser} /> : <AuthPanel />}
      </div>
    </HashRouter>
  );
}

export default App;
