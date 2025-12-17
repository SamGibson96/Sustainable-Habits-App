# What is our app
Flower Power is a web application designed to encourage sustainable living through positive reinforcement and gamification. Users track daily eco-friendly habits (walking to work, recycling, plant-based meals, etc.) and watch a virtual flower grow through five stages based on their accumulated points. The app integrates real-time weather data to provide bonus points for habits that become more challenging in adverse conditions—specifically rewarding users who walk or cycle to work during rain and wind.

Target audience: Individuals looking to adopt more sustainable habits through an engaging, visual tracking system

# How to use it
Sign up with email and password on the login screen
Select your county from the dropdown to enable weather-based bonuses
Check off habits as you complete them throughout the day
Watch your flower grow - navigate to the Flower tab to see your progress
Monitor your daily score displayed in the header (higher scores = more growth stages)
Use the Clear Habits button to reset for a new day

Scoring System:

Each habit has a base point value (1-9 points)
Habits marked as weather-affected receive bonuses:

Rain bonus: +2 points when rainfall > 0 mm/h
Wind bonus: +3 additional points when wind speed > 5 m/s during rain
Example: "Cycle to work" (9 base points) becomes 14 points in rainy, windy weather



Flower Growth Stages:

0-9 points: Seed
10-19 points: Sprout
20-29 points: Stem with leaves and bud
30-39 points: Blooming flower
40+ points: Fully bloomed flower

# Requirements

Node.js (v14 or higher) and npm
Modern web browser

# Notes 
Assumptions:

Users will check habits as they complete them throughout the day
One flower per user per day
Weather bonuses only apply to outdoor transportation habits (Walk to Work, Cycle to Work)
Users have reliable internet connection for API calls
Firebase configuration values are kept secure

Future Improvements:

Streak Tracking: Count consecutive days and reward consistency
Historical View: Calendar showing past flower growth and scores
Customizable Habits: Allow users to create and add their own sustainable habits
Additional Weather Conditions: Expand bonuses for cold, heat, snow
Social Features: Share achievements, compare progress with friends
Notifications: Daily reminders to check off habits
Multiple Flowers: Collection/garden system for long-term engagement
Achievement Badges: Unlock rewards for milestones (100 days, perfect week, etc.)

Technical Details Worth Noting:

Component Architecture: App uses React functional components with hooks (useState, useEffect)
Routing: HashRouter used for GitHub Pages compatibility
State Management: Local state management (no Redux/Context API needed for current scope)
API Calls: Weather data fetched on county selection change, not on every render
Animation System: Pure CSS keyframe animations for performance
Responsive Scoring: Score recalculates automatically when habits checked/unchecked or weather changes

# File Structure 
src/
├── App.js                 # Root component, auth state management
├── AuthPanel.js          # Login/signup interface
├── Dashboard.js          # Main app container, weather API, scoring logic
├── Habits.js             # Habit checklist component
├── Flower.js             # Visual flower growth display
├── firebase.js           # Firebase configuration
├── susHabit.js           # Habit data array (19 habits)
├── counties.js           # Irish counties array
├── styles.css            # Custom CSS and animations
├── index.js              # React DOM rendering
└── Images/               # 11 flower stage images

# Author 
Tara O'Flaherty, Sam Gibson, Rebeca Castilho
Date: December 2025

