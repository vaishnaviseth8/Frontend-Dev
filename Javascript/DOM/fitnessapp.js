class FitnessAnalytics {
  constructor(data) {
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error('Dataset cannot be empty.');
    }
    this.data = data;
  }

  getActiveUsers() {
    return this.data.filter(u => u.steps > 7000).map(u => u.user);
  }

  getAverageCalories() {
    const total = this.data.reduce((sum, u) => sum + u.calories, 0);
    return total / this.data.length;
  }

  getUserSummary() {
    return this.data.map(u => `User ${u.user} walked ${u.steps} steps and burned ${u.calories} calories.`);
  }
}

const workoutData = [
  { user: "A", steps: 8000, calories: 300 },
  { user: "B", steps: 12000, calories: 500 },
  { user: "C", steps: 4000, calories: 200 }
];

try {
  const analytics = new FitnessAnalytics(workoutData);

  console.log('Active Users:', analytics.getActiveUsers());
  console.log('Average Calories:', analytics.getAverageCalories());
  console.log('User Summary:\n', analytics.getUserSummary().join('\n'));
} catch (err) {
  console.error('Error:', err.message);
}
