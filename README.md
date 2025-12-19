# What is our app
Flower Power is a web application designed to encourage sustainable living through positive reinforcement and gamification. Users track daily eco-friendly habits (walking to work, recycling, plant-based meals, etc.) and watch a virtual flower grow through five stages based on their accumulated points. The app integrates real-time weather data to provide bonus points for habits that become more challenging in adverse conditions—specifically rewarding users who walk or cycle to work during rain and wind.

# Key Features Demonstrated
- Firebase authentication and Firestore database
- External weather API integration
- React Router navigation
- Conditional rendering and component-based design
- Custom scoring logic with real-time updates

# Requirements
Node.js and npm

run npm install followed by npm start in terminal

# How to use it
Sign up with email and password on the login screen (test logins provided at bottom of README)
Select your county from the dropdown to enable weather-based bonuses
Check off habits as you complete them throughout the day
Watch your flower grow - navigate to the Flower tab to see your progress
Monitor your daily score displayed in the header (higher scores = more growth stages)
Use the Clear Habits button to reset all habits 

Scoring System:

Each habit has a base point value (1-9 points)
Habits marked as weather-affected receive bonuses:

Rain bonus: +2 points when rainfall > 0 mm/h
Wind bonus: +1 additional points when wind speed > 5 m/s during rain
Example: "Cycle to work" (9 base points) becomes 12 points in rainy, windy weather

Flower Growth Stages:

0-9 points: Seed
10-19 points: Sprout
20-29 points: Stem with leaves and bud
30-39 points: Blooming flower
40+ points: Fully bloomed flower

# Notes 
Future Improvements:

Streak Tracking: Count consecutive days and reward consistency
Historical View: Calendar showing past flower growth and scores
Customizable Habits: Allow users to create and add their own sustainable habits
Additional Weather Conditions: Expand bonuses for cold, heat, snow
Social Features: Share achievements, compare progress with friends
Notifications: Daily reminders to check off habits
Multiple Flowers: Collection/garden system for long-term engagement
Achievement Badges: Unlock rewards for milestones (100 days, perfect week, etc.)

Test logins:
test@gmail.com      password: 123456
test2@gmail.com     password: 123456
test3@gmail.com     password: 123456

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


