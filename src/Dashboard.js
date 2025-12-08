import React, { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";

import { auth } from "./firebase";
import { signOut } from "firebase/auth";

import { susHabit } from "./susHabit.js";
import Flower from "./Flower";
import {counties} from "./counties.js";
import Habits from "./Habits";

function Dashboard({ user }) {
  const [checkedTasks, changeTaskCheck] = useState({});
  const [county, setCounty] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [rainfall, setRainfall] = useState(0);

  const toggleHabit = (ID) => {
    changeTaskCheck((prev) => ({
      ...prev,
      [ID]: !prev[ID],
    }));
  };

  const dailyScore = susHabit.reduce((total, habit) => {
    const isChecked = !!checkedTasks[habit.ID];
    if (!isChecked) return total;
    
    let score = habit.Score;
    if (habit.WeatherType === "Rain" && rainfall > 0) {
      score += 2;
    }
    return total + score;
  }, 0);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  useEffect(() => {
    if (!county) return;

    const fetchWeather = async () => {
      try {
        const API_KEY = "3f3ae66375bedd29a8d9a4652dd07d32";

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${county}&appid=${API_KEY}&units=metric`
        );

        const data = await response.json();

        setRainfall(data.rain?.["1h"] || 0);
        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchWeather();
  }, [county]);

  return (
    <div className="bg-sky">
      <div className="p-3 bg-sky d-flex justify-content-between align-items-center">
        <div>
          <h2 className="mb-1">Logged in as {user.email}</h2>
          <h2 className="mb-1">Daily score: {dailyScore}</h2>
          {/* <h2 className="mb-1">Rainfall level: {rainfall}</h2> */}
        </div>
       <select className = "btn btn-success" value={county} onChange={(e) => setCounty(e.target.value)}>
        <option value="">Select County</option>
        {counties.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

        <button className="btn btn-success" onClick={handleLogout}>
          Log Out
        </button>
      </div>

      <nav className="ps-3 bg-sky d-flex gap-2" >
        <Link to="/" className="btn btn-success">
          Habits
        </Link>
        <Link to="/flower" className="btn btn-success">
          Flower
        </Link>
      </nav>

      <div >
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
          <Route path="/flower" element={<Flower dailyScorePD ={dailyScore} />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
