// src/Dashboard.js

import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";

import { auth } from "./firebase";
import { signOut } from "firebase/auth";

import { susHabit } from "./susHabit.js";
import Flower from "./Flower";
import Habits from "./Habits";

function Dashboard({ user }) {
  const [checkedTasks, changeTaskCheck] = useState({});

  const toggleHabit = (ID) => {
    changeTaskCheck((prev) => ({
      ...prev,
      [ID]: !prev[ID],
    }));
  };

  const dailyScore = susHabit.reduce((total, habit) => {
    const isChecked = !!checkedTasks[habit.ID];
    return isChecked ? total + habit.Score : total;
  }, 0);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="bg-info min-vh-100">
      <div className="p-3 d-flex justify-content-between align-items-center">
        <div>
          <h2 className="mb-1">Dashboard</h2>
          <p className="mb-0">Logged in as {user.email}</p>
          <p className="mb-0">Daily score: {dailyScore}</p>
        </div>
        <button className="btn btn-outline-dark" onClick={handleLogout}>
          Log Out
        </button>
      </div>

      <nav className="p-3 bg-info d-flex gap-2 border-top border-bottom">
        <Link to="/" className="btn btn-success">
          Habits
        </Link>
        <Link to="/flower" className="btn btn-success">
          Flower
        </Link>
      </nav>

      <div className="p-3">
        <Routes>
          <Route
            path="/"
            element={
              <Habits
                checkedTasksPD={checkedTasks}
                changeTaskCheckPD={changeTaskCheck}
                susHabitPD={susHabit}
                toggleHabitPD={toggleHabit}
                dailyScorePD={dailyScore}
              />
            }
          />
          <Route path="/flower" element={<Flower />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
