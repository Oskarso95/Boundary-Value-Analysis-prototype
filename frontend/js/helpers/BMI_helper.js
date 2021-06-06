import {
  MAX_HEIGHT,
  MAX_WEIGHT,
  MIN_WEIGHT,
  MIN_HEIGHT,
  MAX_BMI,
  MIN_BMI,
} from "../constants";

/**
 * Calculates BMI and ensures its in the valid range
 */
export function validateBMI(height, weight) {
  try {
    if (height > MAX_HEIGHT || height < MIN_HEIGHT) {
      throw new RangeError("Invalid height value");
    }
    if (weight < MIN_WEIGHT || weight > MAX_WEIGHT) {
      throw new RangeError("Invalid weight value");
    }
    let bmi = weight / (height * height);

    if (bmi > MAX_BMI || bmi < MIN_BMI) {
      throw new RangeError("Invalid BMI value");
    }
    return Number(bmi).toFixed(2).toString();
  } catch (err) {
    return "" + err;
  }
}
