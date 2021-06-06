/**
 * Calculates the opacity from @param lengthDifference
 */

import { BASE_OPACITY } from "../constants";

export function calculateOpacity(lengthDifference) {
  lengthDifference = parseInt(lengthDifference);

  return isNaN(lengthDifference)
    ? BASE_OPACITY
    : lengthDifference / 20 + BASE_OPACITY > 0.9
    ? 0.9
    : lengthDifference / 20 + BASE_OPACITY;
}
/**
 * Inserts @param str at the @param index of @param stringToAdd
 */
export function addStr(str, index, stringToAdd) {
  return (
    str.substring(0, index) + stringToAdd + str.substring(index, str.length)
  );
}
