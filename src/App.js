// src/App.js

import { react, useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

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
      <div>
        {currentUser ? (
          <Routes>
            <Route path="/*" element={<Dashboard user={currentUser} />} />
          </Routes>
        ) : (
          <AuthPanel />
        )}
      </div>
    </HashRouter>
  );
}

export default App;
