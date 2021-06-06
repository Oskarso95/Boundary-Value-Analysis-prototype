import { Mesh, BoxGeometry, DoubleSide } from "three";
import {
  DAY_COLOR,
  FEBRUARY,
  HEIGHT_COLOR,
  MONTH_COLOR,
  WEIGHT_COLOR,
  BMILENGTH,
} from "./constants";
import { formatDateString, safeToString } from "./helpers/date_helpers";
import { calculateOpacity } from "./helpers/utils";
import { isleapYear } from "./helpers/date_helpers";
import { validateBMI } from "./helpers/BMI_helper";

export function createCube(x, y, z, materials) {
  const box = new BoxGeometry(1.05, 1.05, 1.05);
  const cube = new Mesh(box, materials);
  cube.position.set(x, y, z);
  return cube;
}

export function findDateNeighbors(dateCube) {
  let cube = dateCube.cube;
  let date = dateCube.date;
  let dRef = dateCube.dateReference;
  let dateISO = date.toISOString();
  dateISO = dateISO.split("T")[0];
  let nextDay;
  let prevDay;
  let nextMonth;
  let prevMonth;
  let nextYear;
  let prevYear;
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  var d = date.getDate();
  nextDay = safeToString(formatDateString(y, m, d + 1), dRef, true);
  prevDay = safeToString(formatDateString(y, m, d - 1), dRef, true);
  nextMonth = safeToString(formatDateString(y, m + 1, d), dRef, false);
  prevMonth = safeToString(formatDateString(y, m - 1, d), dRef, false);

  if (nextDay.length > dateISO.length) {
    changeCubeAttr(cube, 2, nextDay.length - dateISO.length, DAY_COLOR);
  }

  if (prevDay.length > dateISO.length) {
    changeCubeAttr(cube, 3, prevDay.length - dateISO.length, DAY_COLOR);
  }

  if (nextMonth.length > dateISO.length) {
    changeCubeAttr(cube, 0, nextMonth.length - dateISO.length, MONTH_COLOR);
  }

  if (prevMonth.length > dateISO.length) {
    changeCubeAttr(cube, 1, prevMonth.length - dateISO.length, MONTH_COLOR);
  }

  if (isleapYear(y) && d == 29 && m == FEBRUARY) {
    prevYear = safeToString(formatDateString(y - 1, m, d), dRef, true);

    if (prevYear.length > dateISO.length) {
      let deltaLength = prevYear.length - dateISO.length;
      changeCubeAttr(cube, 5, deltaLength, MONTH_COLOR);
    }
    nextYear = safeToString(formatDateString(y + 1, m, d), dRef, true);

    if (nextYear.length > dateISO.length) {
      let deltaLength = nextYear.length - dateISO.length;
      changeCubeAttr(cube, 4, deltaLength, MONTH_COLOR);
    }
  }
}

export function findBMINeighbors(BMICube) {
  let cube = BMICube.cube;
  let height = BMICube.height;
  let weight = BMICube.weight;
  let nextHeight = BMICube.height + 0.1;
  let nextWeight = BMICube.weight + 2.5;
  let prevWeight = BMICube.weight - 2.5;
  let prevHeight = BMICube.height - 0.1;

  let targetBMI = validateBMI(height, weight);
  let prevHeightBMI = validateBMI(prevHeight, weight);
  let prevWeightBMI = validateBMI(height, prevWeight);
  let nextWeightBMI = validateBMI(height, nextWeight);
  let nextHeightBMI = validateBMI(nextHeight, weight);

  if (targetBMI.length > BMILENGTH) {
    let deltaLength = targetBMI.length - BMILENGTH;
    changeCubeAttr(cube, 6, deltaLength, HEIGHT_COLOR);
  }

  if (nextHeightBMI.length > targetBMI.length) {
    let deltaLength = nextHeightBMI.length - targetBMI.length;
    changeCubeAttr(cube, 2, deltaLength, HEIGHT_COLOR);
  }

  if (prevHeightBMI.length > targetBMI.length) {
    let deltaLength = prevHeightBMI.length - targetBMI.length;
    changeCubeAttr(cube, 3, deltaLength, HEIGHT_COLOR);
  }

  if (nextWeightBMI.length > targetBMI.length) {
    let deltaLength = nextWeightBMI.length - targetBMI.length;
    changeCubeAttr(cube, 0, deltaLength, WEIGHT_COLOR);
  }

  if (prevWeightBMI.length > targetBMI.length) {
    let deltaLength = prevWeightBMI.length - targetBMI.length;
    changeCubeAttr(cube, 1, deltaLength, WEIGHT_COLOR);
  }
}

export function changeCubeAttr(cube, sideIndex, lengthDifference, color) {
  if (sideIndex > 5) {
    for (var i = 0; i < 5; i++) {
      cube.material[i].color.setHex(color);
      cube.material[i].opacity = calculateOpacity(lengthDifference);
    }
    return;
  }
  cube.material[sideIndex].color.setHex(color);
  cube.material[sideIndex].opacity = calculateOpacity(lengthDifference);
  return;
}
