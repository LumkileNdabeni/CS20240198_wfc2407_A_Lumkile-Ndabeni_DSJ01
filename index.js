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

// Function to calculate new velocity
const calcNewVelocity = ({ velocity, acceleration, time }) => {
  // Check if inputs are valid numbers
  if (typeof velocity !== 'number' || typeof acceleration !== 'number' || typeof time !== 'number') {
    throw new Error("Invalid input: velocity, acceleration, and time must be numbers.");
  }
  
  // Calculate new velocity in km/h
  return velocity + (acceleration * time * 3.6); // Convert m/s² to km/h
};

// Function to calculate new distance
const calcNewDistance = ({ initialDistance, velocity, time }) => {
  if (typeof initialDistance !== 'number' || typeof velocity !== 'number' || typeof time !== 'number') {
    throw new Error("Invalid input: distance, velocity, and time must be numbers.");
  }

  // Calculate new distance in km
  return initialDistance + (velocity * (time / 3600)); // Convert seconds to hours for km/h
};

// Function to calculate remaining fuel
const calcRemainingFuel = ({ fuelBurnRate, time }) => {
  if (typeof fuelBurnRate !== 'number' || typeof time !== 'number') {
    throw new Error("Invalid input: fuel burn rate and time must be numbers.");
  }

  // Calculate remaining fuel in kg
  return params.remainingFuel - (fuelBurnRate * time);
};




