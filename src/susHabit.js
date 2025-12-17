const habitData = [
  { ID: 1, Habit: "Walk to Work", Score: 6, WeatherType: "Rain"},
  { ID: 2, Habit: "Plant Based Meal", Score: 8 },
  { ID: 3, Habit: "Layer clothing instead of heating", Score: 9 },
  { ID: 4, Habit: "Cycle to work", Score: 9, WeatherType: "Rain"},
  { ID: 5, Habit: "Recycling", Score: 3 },
  { ID: 6, Habit: "Compost Bin", Score: 5 },
  { ID: 7, Habit: "Turn off tap when brushing teeth", Score: 1 },
  { ID: 8, Habit: "Turn off tap when shaving", Score: 1 },
  { ID: 9, Habit: "Return bottles or cans", Score: 2 },
  { ID: 10, Habit: "Freeze leftovers", Score: 3 },
  { ID: 11, Habit: "Buy seasonal produce", Score: 4 },
  { ID: 12, Habit: "Use reusable bags", Score: 2 },
  { ID: 13, Habit: "Turn off lights when leaving", Score: 1 },
  { ID: 14, Habit: "Choose products with less packaging", Score: 3 },
  { ID: 15, Habit: "Choose second-hand products", Score: 4 },
  { ID: 16, Habit: "Use reusable coffee cups", Score: 2 },
  { ID: 17, Habit: "Say no to plastic straws", Score: 1 },
  { ID: 18, Habit: "Support sustainable brands", Score: 5 },
  { ID: 19, Habit: "Use solar power energy", Score: 6, WeatherType: "Rain" },
];

// Sort the array alphabetically by Habit name
export const susHabit = habitData.sort((a, b) => a.Habit.localeCompare(b.Habit));
