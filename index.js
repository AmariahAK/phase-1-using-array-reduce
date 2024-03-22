const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// Using reduce() to calculate the total number of batteries
const totalBatteries = batteryBatches.reduce((total, current) => total + current, 0);

console.log(totalBatteries); // Output: 31