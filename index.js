/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */


// Given Parameters
const params = {
  velocity: 10000, // velocity (km/h)
  acceleration: 3, // acceleration (m/s^2)
  time: 3600, // time (seconds)
  initialDistance: 0, // initial distance (km)
  remainingFuel: 5000, // remaining fuel (kg)
  fuelBurnRate: 0.5 // fuel burn rate (kg/s)
};

// Function to calculate new velocity after acceleration
const calcNewVelocity = ({ velocity, acceleration, time }) => {
  // Check if inputs are valid numbers
  if (typeof velocity !== 'number' || typeof acceleration !== 'number' || typeof time !== 'number') {
    throw new Error("Invalid input: velocity, acceleration, and time must be numbers.");
  }
  
  // Calculate new velocity in km/h
  // Convert acceleration from m/s^2 to km/h by multiplying by 3.6
  return velocity + (acceleration * time * 3.6); 
};

// Function to calculate new distance traveled
const calcNewDistance = ({ initialDistance, velocity, time }) => {
  // Validate inputs
  if (typeof initialDistance !== 'number' || typeof velocity !== 'number' || typeof time !== 'number') {
    throw new Error("Invalid input: distance, velocity, and time must be numbers.");
  }

  // Calculate new distance in km
  // Convert time from seconds to hours (time / 3600) to match km/h
  return initialDistance + (velocity * (time / 3600)); 
};

// Function to calculate the remaining fuel
const calcRemainingFuel = ({ fuelBurnRate, time }) => {
  // Validate inputs
  if (typeof fuelBurnRate !== 'number' || typeof time !== 'number') {
    throw new Error("Invalid input: fuel burn rate and time must be numbers.");
  }

  // Calculate remaining fuel in kg
  // Subtract the total fuel consumed (fuelBurnRate * time) from the remaining fuel
  return params.remainingFuel - (fuelBurnRate * time);
};

try {
  // Perform calculations
  const newVelocity = calcNewVelocity(params); // Calculate new velocity
  const newDistance = calcNewDistance({ initialDistance: params.initialDistance, velocity: params.velocity, time: params.time }); // Calculate new distance
  const remainingFuel = calcRemainingFuel(params); // Calculate remaining fuel

  // Output results to the console
  console.log(`Corrected New Velocity: ${newVelocity} km/h`); // Log new velocity
  console.log(`Corrected New Distance: ${newDistance} km`); // Log new distance
  console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`); // Log remaining fuel
} catch (error) {
  // Handle and log any errors that occur during calculations
  console.error(error.message);
}