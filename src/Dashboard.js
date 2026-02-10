// React imports
import { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";

// Firebase imports
import { auth, db} from "./firebase";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";

// Local imports
import { susHabit } from "./susHabit.js";
import Flower from "./Flower";
import {counties} from "./counties.js";
import Habits from "./Habits";

const getTodayKey = () => new Date().toLocaleDateString("en-CA");

function Dashboard({ user }) {
  const [checkedTasks, changeTaskCheck] = useState({});
  const [county, setCounty] = useState("");
  const [rainfall, setRainfall] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);

const [totalScore, setTotalScore] = useState(0);
const [readyScores, setReadyScores] = useState(false);

// Function to toggle habit completion and store in state
  const toggleHabit = (ID) => {
  changeTaskCheck((prev) => ({
    ...prev,
    [ID]: !prev[ID],
  }));
};

// Calculate daily score based on checked habits and weather conditions the user 
// will get more points for completing certain habits in specific weather conditions. Rain and wind
// wind points are only added if it is raining

  const dailyScore = susHabit.reduce((total, habit) => {
    const isChecked = !!checkedTasks[habit.ID];
    if (!isChecked) return total;
    
    let score = habit.Score;
    if (habit.WeatherType === "Rain" && rainfall > 0) {
      score += 2;
      if(windSpeed > 5) {
        score += 1;
    }}
    return total + score;
  }, 0);

  // Logout function  
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Initialize and sync scores with Firestore
  useEffect(() => {
  if (!user?.uid) return;

  const initScores = async () => {
    const today = getTodayKey();
    const userRef = doc(db, "users", user.uid);

    const snap = await getDoc(userRef);

    // If no user data exists, create it
    if (!snap.exists()) {
      await setDoc(userRef, { dailyScore: 0, totalScore: 0, lastLoggedIn: today, checkedHabits: {} });
      setTotalScore(0);
      setReadyScores(true);
      changeTaskCheck({});
      return;
    }

    // User data exists, retrieve and process it
    const data = snap.data();
    const last = data.lastLoggedIn;
    const storedDaily = data.dailyScore ?? 0;
    let storedTotal = data.totalScore ?? 0;
    const storedChecked = data.checkedHabits ?? {};

    // If the last login date is not today, reset daily score and checked habits
    if (last !== today) {
      storedTotal = storedTotal + storedDaily;

      await updateDoc(userRef, {
        totalScore: storedTotal,
        dailyScore: 0,
        lastLoggedIn: today,
        checkedHabits: {}
      });


      changeTaskCheck({});
    }
    else {
      changeTaskCheck(storedChecked);
    }

    setTotalScore(storedTotal);
    setReadyScores(true);
  };

  initScores().catch((e) => console.error("Init scores error:", e));
}, [user?.uid]);

useEffect(() => {
  if (!readyScores) return;
  if (!user?.uid) return;

  const userRef = doc(db, "users", user.uid);

  // Update Firestore with the latest daily score and checked habits
  updateDoc(userRef, {
    dailyScore,
    checkedHabits: checkedTasks,
  }).catch((e) =>
    console.error("Firestore sync error:", e)
  );
}, [dailyScore, checkedTasks, readyScores, user?.uid]);

// Fetch weather data when county changes 
  useEffect(() => {
    if (!county) return;

    const fetchWeather = async () => {
      try {
        const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${county}&appid=${API_KEY}&units=metric`
        );

        const data = await response.json();

        setRainfall(data.rain?.["1h"] || 0);
        setWindSpeed(data.wind?.speed || 0);
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchWeather();
  }, [county]);

  return (
    // Dashboard layout
    <div className="bg-sky">
      <div className="p-3 bg-sky d-flex justify-content-between align-items-center">
        <div>
          <h2 className="mb-1">Logged in as {user.email}</h2>
          <h2 className="mb-1">Daily score: {dailyScore}</h2>
          <h2 className="mb-1">Total score: {totalScore}</h2>
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

 {/* Buttons and Navigation links */}
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
