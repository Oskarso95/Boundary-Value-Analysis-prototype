/**
 * Helpers for date formatting
 */
import { addStr } from "./utils";
export function safeToString(dateString, dCube, isDay) {
  try {
    var d = new Date(dateString);
    if (hasExceededDay(d, dCube.day) && !isDay) {
      throw new RangeError("invalid time value");
    }

    if (hasExceededMonth(d, dCube.month) && isDay) {
      throw new RangeError("invalid time value");
    }

    return new Date(dateString).toISOString().split("T")[0];
  } catch (err) {
    return "" + err;
  }
}

/**
 * For chrome to check that the date doesnt skip a month instead of getting invalid
 */
function hasExceededMonth(date, month) {
  if (!isDate(date)) return false;
  return date.getMonth() + 1 > month ? true : false;
}

function hasExceededDay(date, day) {
  if (!isDate(date)) return false;
  return date.getDate() < day ? true : false;
}
/**
 * Check if input is typeof date
 */
var isDate = function (input) {
  return Object.prototype.toString.call(input) === "[object Date]"
    ? true
    : false;
};
/**
 * Checks if date is valid
 */
export function isValidDate(d) {
  return d instanceof Date && !isNaN(d.getTime());
}
/**
 * Formats date with leading zeros to follow browsers with stricter date rules
 * and adds a + sign when year exceeds four digits
 */
export function formatDateString(y, m, d) {
  let dateString = `${y}-${m}-${d}T12:00:00`;

  if (y > 9999) {
    dateString = "+" + dateString;
  }

  if (m < 10) {
    let i = nth_occurrence(dateString, "-", 1);
    dateString = addStr(dateString, i + 1, "0");
  }

  if (d < 10) {
    let i = nth_occurrence(dateString, "-", 2);
    dateString = addStr(dateString, i + 1, "0");
  }
  return dateString;
}
/**
 *
 * returns the index of the nth occurance of a char in a string
 */
function nth_occurrence(string, char, nth) {
  var first_index = string.indexOf(char);
  var length_up_to_first_index = first_index + 1;

  if (nth == 1) {
    return first_index;
  } else {
    var string_after_first_occurrence = string.slice(length_up_to_first_index);
    var next_occurrence = nth_occurrence(
      string_after_first_occurrence,
      char,
      nth - 1
    );

    if (next_occurrence === -1) {
      return -1;
    } else {
      return length_up_to_first_index + next_occurrence;
    }
  }
}

export function isleapYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}
