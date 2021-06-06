/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkboundary_value_exploration"] = self["webpackChunkboundary_value_exploration"] || []).push([["frontend_js_three_js"],{

/***/ "./frontend/js/BMI_boundary.js":
/*!*************************************!*\
  !*** ./frontend/js/BMI_boundary.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"runBMIBoundarySimulation\": () => (/* binding */ runBMIBoundarySimulation)\n/* harmony export */ });\n/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material */ \"./frontend/js/material.js\");\n/* harmony import */ var _cube__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cube */ \"./frontend/js/cube.js\");\n/* harmony import */ var _models_BMI_cube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/BMI-cube */ \"./models/BMI-cube.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./frontend/js/constants.js\");\n/* harmony import */ var _helpers_BMI_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/BMI_helper */ \"./frontend/js/helpers/BMI_helper.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction runBMIBoundarySimulation(scene) {\r\n  let height = _constants__WEBPACK_IMPORTED_MODULE_3__.MIN_HEIGHT;\r\n  let weight = _constants__WEBPACK_IMPORTED_MODULE_3__.MIN_WEIGHT;\r\n  let z = 0;\r\n  let x = 0 - (_constants__WEBPACK_IMPORTED_MODULE_3__.MAX_WEIGHT - _constants__WEBPACK_IMPORTED_MODULE_3__.MIN_WEIGHT) / _constants__WEBPACK_IMPORTED_MODULE_3__.WEIGHT_GAP;\r\n  x = x / 2;\r\n  let y = 0;\r\n  let cubes = [];\r\n\r\n  while (true) {\r\n    if (weight > _constants__WEBPACK_IMPORTED_MODULE_3__.MAX_WEIGHT - 1) {\r\n      break;\r\n    }\r\n\r\n    if ((0,_helpers_BMI_helper__WEBPACK_IMPORTED_MODULE_4__.validateBMI)(height, weight).length < 6) {\r\n      const material = (0,_material__WEBPACK_IMPORTED_MODULE_0__.getMaterials)(_constants__WEBPACK_IMPORTED_MODULE_3__.BASE_OPACITY, _constants__WEBPACK_IMPORTED_MODULE_3__.CUBE_COLOR);\r\n      var tmpCube = (0,_cube__WEBPACK_IMPORTED_MODULE_1__.createCube)(x, y, z, material);\r\n      cubes.push(new _models_BMI_cube__WEBPACK_IMPORTED_MODULE_2__.default(height, weight, tmpCube));\r\n      scene.add(tmpCube);\r\n    } else {\r\n      const material = (0,_material__WEBPACK_IMPORTED_MODULE_0__.getMaterials)(1.0, _constants__WEBPACK_IMPORTED_MODULE_3__.HEIGHT_COLOR);\r\n      var tmpCube = (0,_cube__WEBPACK_IMPORTED_MODULE_1__.createCube)(x, y, z, material);\r\n      cubes.push(new _models_BMI_cube__WEBPACK_IMPORTED_MODULE_2__.default(height, weight, tmpCube));\r\n      scene.add(tmpCube);\r\n    }\r\n    height += _constants__WEBPACK_IMPORTED_MODULE_3__.HEIGHT_GAP;\r\n    y++;\r\n\r\n    if (height > _constants__WEBPACK_IMPORTED_MODULE_3__.MAX_HEIGHT && weight < _constants__WEBPACK_IMPORTED_MODULE_3__.MAX_WEIGHT) {\r\n      height = _constants__WEBPACK_IMPORTED_MODULE_3__.MIN_HEIGHT;\r\n      weight += _constants__WEBPACK_IMPORTED_MODULE_3__.WEIGHT_GAP;\r\n      y = 0;\r\n      x++;\r\n    }\r\n  }\r\n  cubes.forEach((el) => {\r\n    (0,_cube__WEBPACK_IMPORTED_MODULE_1__.findBMINeighbors)(el);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://boundary-value-exploration/./frontend/js/BMI_boundary.js?");

/***/ }),

/***/ "./frontend/js/constants.js":
/*!**********************************!*\
  !*** ./frontend/js/constants.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DAY_COLOR\": () => (/* binding */ DAY_COLOR),\n/* harmony export */   \"MONTH_COLOR\": () => (/* binding */ MONTH_COLOR),\n/* harmony export */   \"AMBIENT_LIGHT_COLOR\": () => (/* binding */ AMBIENT_LIGHT_COLOR),\n/* harmony export */   \"CUBE_COLOR\": () => (/* binding */ CUBE_COLOR),\n/* harmony export */   \"BASE_OPACITY\": () => (/* binding */ BASE_OPACITY),\n/* harmony export */   \"FEBRUARY\": () => (/* binding */ FEBRUARY),\n/* harmony export */   \"HEIGHT_COLOR\": () => (/* binding */ HEIGHT_COLOR),\n/* harmony export */   \"WEIGHT_COLOR\": () => (/* binding */ WEIGHT_COLOR),\n/* harmony export */   \"MAX_WEIGHT\": () => (/* binding */ MAX_WEIGHT),\n/* harmony export */   \"MAX_HEIGHT\": () => (/* binding */ MAX_HEIGHT),\n/* harmony export */   \"MIN_WEIGHT\": () => (/* binding */ MIN_WEIGHT),\n/* harmony export */   \"MIN_HEIGHT\": () => (/* binding */ MIN_HEIGHT),\n/* harmony export */   \"BMILENGTH\": () => (/* binding */ BMILENGTH),\n/* harmony export */   \"BMI_SIMULATION\": () => (/* binding */ BMI_SIMULATION),\n/* harmony export */   \"DATE_SIMULATION\": () => (/* binding */ DATE_SIMULATION),\n/* harmony export */   \"MAX_BMI\": () => (/* binding */ MAX_BMI),\n/* harmony export */   \"MIN_BMI\": () => (/* binding */ MIN_BMI),\n/* harmony export */   \"WEIGHT_GAP\": () => (/* binding */ WEIGHT_GAP),\n/* harmony export */   \"HEIGHT_GAP\": () => (/* binding */ HEIGHT_GAP)\n/* harmony export */ });\nconst DAY_COLOR = 0x0000ff;\r\nconst MONTH_COLOR = 0x00ad14;\r\nconst AMBIENT_LIGHT_COLOR = 0xffffff;\r\nconst CUBE_COLOR = \"#e3eb00\";\r\nconst BASE_OPACITY = 0.2;\r\nconst FEBRUARY = 2;\r\nconst HEIGHT_COLOR = DAY_COLOR;\r\nconst WEIGHT_COLOR = MONTH_COLOR;\r\nconst MAX_WEIGHT = 180;\r\nconst MAX_HEIGHT = 2.2;\r\nconst MIN_WEIGHT = 45;\r\nconst MIN_HEIGHT = 1.5;\r\nconst BMILENGTH = 5;\r\nconst BMI_SIMULATION = \"BMIBoundaries\";\r\nconst DATE_SIMULATION = \"dateBoundaries\";\r\nconst MAX_BMI = 40;\r\nconst MIN_BMI = 18.5;\r\nconst WEIGHT_GAP = 1;\r\nconst HEIGHT_GAP = 0.1;\r\n\n\n//# sourceURL=webpack://boundary-value-exploration/./frontend/js/constants.js?");

/***/ }),

/***/ "./frontend/js/cube.js":
/*!*****************************!*\
  !*** ./frontend/js/cube.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCube\": () => (/* binding */ createCube),\n/* harmony export */   \"findDateNeighbors\": () => (/* binding */ findDateNeighbors),\n/* harmony export */   \"findBMINeighbors\": () => (/* binding */ findBMINeighbors),\n/* harmony export */   \"changeCubeAttr\": () => (/* binding */ changeCubeAttr)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./frontend/js/constants.js\");\n/* harmony import */ var _helpers_date_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/date_helpers */ \"./frontend/js/helpers/date_helpers.js\");\n/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/utils */ \"./frontend/js/helpers/utils.js\");\n/* harmony import */ var _helpers_BMI_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/BMI_helper */ \"./frontend/js/helpers/BMI_helper.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction createCube(x, y, z, materials) {\r\n  const box = new three__WEBPACK_IMPORTED_MODULE_4__.BoxGeometry(1.05, 1.05, 1.05);\r\n  const cube = new three__WEBPACK_IMPORTED_MODULE_4__.Mesh(box, materials);\r\n  cube.position.set(x, y, z);\r\n  return cube;\r\n}\r\n\r\nfunction findDateNeighbors(dateCube) {\r\n  let cube = dateCube.cube;\r\n  let date = dateCube.date;\r\n  let dRef = dateCube.dateReference;\r\n  let dateISO = date.toISOString();\r\n  dateISO = dateISO.split(\"T\")[0];\r\n  let nextDay;\r\n  let prevDay;\r\n  let nextMonth;\r\n  let prevMonth;\r\n  let nextYear;\r\n  let prevYear;\r\n  var y = date.getFullYear();\r\n  var m = date.getMonth() + 1;\r\n  var d = date.getDate();\r\n  nextDay = (0,_helpers_date_helpers__WEBPACK_IMPORTED_MODULE_1__.safeToString)((0,_helpers_date_helpers__WEBPACK_IMPORTED_MODULE_1__.formatDateString)(y, m, d + 1), dRef, true);\r\n  prevDay = (0,_helpers_date_helpers__WEBPACK_IMPORTED_MODULE_1__.safeToString)((0,_helpers_date_helpers__WEBPACK_IMPORTED_MODULE_1__.formatDateString)(y, m, d - 1), dRef, true);\r\n  nextMonth = (0,_helpers_date_helpers__WEBPACK_IMPORTED_MODULE_1__.safeToString)((0,_helpers_date_helpers__WEBPACK_IMPORTED_MODULE_1__.formatDateString)(y, m + 1, d), dRef, false);\r\n  prevMonth = (0,_helpers_date_helpers__WEBPACK_IMPORTED_MODULE_1__.safeToString)((0,_helpers_date_helpers__WEBPACK_IMPORTED_MODULE_1__.formatDateString)(y, m - 1, d), dRef, false);\r\n\r\n  if (nextDay.length > dateISO.length) {\r\n    changeCubeAttr(cube, 2, nextDay.length - dateISO.length, _constants__WEBPACK_IMPORTED_MODULE_0__.DAY_COLOR);\r\n  }\r\n\r\n  if (prevDay.length > dateISO.length) {\r\n    changeCubeAttr(cube, 3, prevDay.length - dateISO.length, _constants__WEBPACK_IMPORTED_MODULE_0__.DAY_COLOR);\r\n  }\r\n\r\n  if (nextMonth.length > dateISO.length) {\r\n    changeCubeAttr(cube, 0, nextMonth.length - dateISO.length, _constants__WEBPACK_IMPORTED_MODULE_0__.MONTH_COLOR);\r\n  }\r\n\r\n  if (prevMonth.length > dateISO.length) {\r\n    changeCubeAttr(cube, 1, prevMonth.length - dateISO.length, _constants__WEBPACK_IMPORTED_MODULE_0__.MONTH_COLOR);\r\n  }\r\n\r\n  if ((0,_helpers_date_helpers__WEBPACK_IMPORTED_MODULE_1__.isleapYear)(y) && d == 29 && m == _constants__WEBPACK_IMPORTED_MODULE_0__.FEBRUARY) {\r\n    prevYear = (0,_helpers_date_helpers__WEBPACK_IMPORTED_MODULE_1__.safeToString)((0,_helpers_date_helpers__WEBPACK_IMPORTED_MODULE_1__.formatDateString)(y - 1, m, d), dRef, true);\r\n\r\n    if (prevYear.length > dateISO.length) {\r\n      let deltaLength = prevYear.length - dateISO.length;\r\n      changeCubeAttr(cube, 5, deltaLength, _constants__WEBPACK_IMPORTED_MODULE_0__.MONTH_COLOR);\r\n    }\r\n    nextYear = (0,_helpers_date_helpers__WEBPACK_IMPORTED_MODULE_1__.safeToString)((0,_helpers_date_helpers__WEBPACK_IMPORTED_MODULE_1__.formatDateString)(y + 1, m, d), dRef, true);\r\n\r\n    if (nextYear.length > dateISO.length) {\r\n      let deltaLength = nextYear.length - dateISO.length;\r\n      changeCubeAttr(cube, 4, deltaLength, _constants__WEBPACK_IMPORTED_MODULE_0__.MONTH_COLOR);\r\n    }\r\n  }\r\n}\r\n\r\nfunction findBMINeighbors(BMICube) {\r\n  let cube = BMICube.cube;\r\n  let height = BMICube.height;\r\n  let weight = BMICube.weight;\r\n  let nextHeight = BMICube.height + 0.1;\r\n  let nextWeight = BMICube.weight + 2.5;\r\n  let prevWeight = BMICube.weight - 2.5;\r\n  let prevHeight = BMICube.height - 0.1;\r\n\r\n  let targetBMI = (0,_helpers_BMI_helper__WEBPACK_IMPORTED_MODULE_3__.validateBMI)(height, weight);\r\n  let prevHeightBMI = (0,_helpers_BMI_helper__WEBPACK_IMPORTED_MODULE_3__.validateBMI)(prevHeight, weight);\r\n  let prevWeightBMI = (0,_helpers_BMI_helper__WEBPACK_IMPORTED_MODULE_3__.validateBMI)(height, prevWeight);\r\n  let nextWeightBMI = (0,_helpers_BMI_helper__WEBPACK_IMPORTED_MODULE_3__.validateBMI)(height, nextWeight);\r\n  let nextHeightBMI = (0,_helpers_BMI_helper__WEBPACK_IMPORTED_MODULE_3__.validateBMI)(nextHeight, weight);\r\n\r\n  if (targetBMI.length > _constants__WEBPACK_IMPORTED_MODULE_0__.BMILENGTH) {\r\n    let deltaLength = targetBMI.length - _constants__WEBPACK_IMPORTED_MODULE_0__.BMILENGTH;\r\n    changeCubeAttr(cube, 6, deltaLength, _constants__WEBPACK_IMPORTED_MODULE_0__.HEIGHT_COLOR);\r\n  }\r\n\r\n  if (nextHeightBMI.length > targetBMI.length) {\r\n    let deltaLength = nextHeightBMI.length - targetBMI.length;\r\n    changeCubeAttr(cube, 2, deltaLength, _constants__WEBPACK_IMPORTED_MODULE_0__.HEIGHT_COLOR);\r\n  }\r\n\r\n  if (prevHeightBMI.length > targetBMI.length) {\r\n    let deltaLength = prevHeightBMI.length - targetBMI.length;\r\n    changeCubeAttr(cube, 3, deltaLength, _constants__WEBPACK_IMPORTED_MODULE_0__.HEIGHT_COLOR);\r\n  }\r\n\r\n  if (nextWeightBMI.length > targetBMI.length) {\r\n    let deltaLength = nextWeightBMI.length - targetBMI.length;\r\n    changeCubeAttr(cube, 0, deltaLength, _constants__WEBPACK_IMPORTED_MODULE_0__.WEIGHT_COLOR);\r\n  }\r\n\r\n  if (prevWeightBMI.length > targetBMI.length) {\r\n    let deltaLength = prevWeightBMI.length - targetBMI.length;\r\n    changeCubeAttr(cube, 1, deltaLength, _constants__WEBPACK_IMPORTED_MODULE_0__.WEIGHT_COLOR);\r\n  }\r\n}\r\n\r\nfunction changeCubeAttr(cube, sideIndex, lengthDifference, color) {\r\n  if (sideIndex > 5) {\r\n    for (var i = 0; i < 5; i++) {\r\n      cube.material[i].color.setHex(color);\r\n      cube.material[i].opacity = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.calculateOpacity)(lengthDifference);\r\n    }\r\n    return;\r\n  }\r\n  cube.material[sideIndex].color.setHex(color);\r\n  cube.material[sideIndex].opacity = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.calculateOpacity)(lengthDifference);\r\n  return;\r\n}\r\n\n\n//# sourceURL=webpack://boundary-value-exploration/./frontend/js/cube.js?");

/***/ }),

/***/ "./frontend/js/date_boundary.js":
/*!**************************************!*\
  !*** ./frontend/js/date_boundary.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"runDateBoundaryAnalysis\": () => (/* binding */ runDateBoundaryAnalysis)\n/* harmony export */ });\n/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material */ \"./frontend/js/material.js\");\n/* harmony import */ var _cube__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cube */ \"./frontend/js/cube.js\");\n/* harmony import */ var _models_date_cube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/date-cube */ \"./models/date-cube.js\");\n/* harmony import */ var _models_date_cube__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_date_cube__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _models_date_reference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/date-reference */ \"./models/date-reference.js\");\n/* harmony import */ var _models_date_reference__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_models_date_reference__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ \"./frontend/js/constants.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction runDateBoundaryAnalysis(scene) {\r\n  let date = new Date(275756, 0, 1, 12, 0, 0, 0);\r\n  let year = date.getFullYear();\r\n  let cubes = [];\r\n\r\n  while (true) {\r\n    if (isNaN(date.getDate() + 1)) {\r\n      break;\r\n    }\r\n    let x = date.getMonth() + 1;\r\n    let y = date.getDate();\r\n    let z = date.getFullYear() - year - 1;\r\n    const material = (0,_material__WEBPACK_IMPORTED_MODULE_0__.getMaterials)(_constants__WEBPACK_IMPORTED_MODULE_4__.BASE_OPACITY, _constants__WEBPACK_IMPORTED_MODULE_4__.CUBE_COLOR);\r\n    var tmpCube = (0,_cube__WEBPACK_IMPORTED_MODULE_1__.createCube)(x, y, z, material);\r\n    cubes.push(\r\n      new (_models_date_cube__WEBPACK_IMPORTED_MODULE_2___default())(date, tmpCube, new (_models_date_reference__WEBPACK_IMPORTED_MODULE_3___default())(date.getFullYear(), x, y))\r\n    );\r\n    scene.add(tmpCube);\r\n    date.setDate(date.getDate() + 1);\r\n  }\r\n  cubes.forEach((el) => {\r\n    (0,_cube__WEBPACK_IMPORTED_MODULE_1__.findDateNeighbors)(el);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://boundary-value-exploration/./frontend/js/date_boundary.js?");

/***/ }),

/***/ "./frontend/js/helpers/BMI_helper.js":
/*!*******************************************!*\
  !*** ./frontend/js/helpers/BMI_helper.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validateBMI\": () => (/* binding */ validateBMI)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./frontend/js/constants.js\");\n\r\n\r\n/**\r\n * Calculates BMI and ensures its in the valid range\r\n */\r\nfunction validateBMI(height, weight) {\r\n  try {\r\n    if (height > _constants__WEBPACK_IMPORTED_MODULE_0__.MAX_HEIGHT || height < _constants__WEBPACK_IMPORTED_MODULE_0__.MIN_HEIGHT) {\r\n      throw new RangeError(\"Invalid height value\");\r\n    }\r\n    if (weight < _constants__WEBPACK_IMPORTED_MODULE_0__.MIN_WEIGHT || weight > _constants__WEBPACK_IMPORTED_MODULE_0__.MAX_WEIGHT) {\r\n      throw new RangeError(\"Invalid weight value\");\r\n    }\r\n    let bmi = weight / (height * height);\r\n\r\n    if (bmi > _constants__WEBPACK_IMPORTED_MODULE_0__.MAX_BMI || bmi < _constants__WEBPACK_IMPORTED_MODULE_0__.MIN_BMI) {\r\n      throw new RangeError(\"Invalid BMI value\");\r\n    }\r\n    return Number(bmi).toFixed(2).toString();\r\n  } catch (err) {\r\n    return \"\" + err;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://boundary-value-exploration/./frontend/js/helpers/BMI_helper.js?");

/***/ }),

/***/ "./frontend/js/helpers/date_helpers.js":
/*!*********************************************!*\
  !*** ./frontend/js/helpers/date_helpers.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"safeToString\": () => (/* binding */ safeToString),\n/* harmony export */   \"isValidDate\": () => (/* binding */ isValidDate),\n/* harmony export */   \"formatDateString\": () => (/* binding */ formatDateString),\n/* harmony export */   \"isleapYear\": () => (/* binding */ isleapYear)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./frontend/js/helpers/utils.js\");\n/**\r\n * Helpers for date formatting\r\n */\r\n\r\nfunction safeToString(dateString, dCube, isDay) {\r\n  try {\r\n    var d = new Date(dateString);\r\n    if (hasExceededDay(d, dCube.day) && !isDay) {\r\n      throw new RangeError(\"invalid time value\");\r\n    }\r\n\r\n    if (hasExceededMonth(d, dCube.month) && isDay) {\r\n      throw new RangeError(\"invalid time value\");\r\n    }\r\n\r\n    return new Date(dateString).toISOString().split(\"T\")[0];\r\n  } catch (err) {\r\n    return \"\" + err;\r\n  }\r\n}\r\n\r\n/**\r\n * For chrome to check that the date doesnt skip a month instead of getting invalid\r\n */\r\nfunction hasExceededMonth(date, month) {\r\n  if (!isDate(date)) return false;\r\n  return date.getMonth() + 1 > month ? true : false;\r\n}\r\n\r\nfunction hasExceededDay(date, day) {\r\n  if (!isDate(date)) return false;\r\n  return date.getDate() < day ? true : false;\r\n}\r\n/**\r\n * Check if input is typeof date\r\n */\r\nvar isDate = function (input) {\r\n  return Object.prototype.toString.call(input) === \"[object Date]\"\r\n    ? true\r\n    : false;\r\n};\r\n/**\r\n * Checks if date is valid\r\n */\r\nfunction isValidDate(d) {\r\n  return d instanceof Date && !isNaN(d.getTime());\r\n}\r\n/**\r\n * Formats date with leading zeros to follow browsers with stricter date rules\r\n * and adds a + sign when year exceeds four digits\r\n */\r\nfunction formatDateString(y, m, d) {\r\n  let dateString = `${y}-${m}-${d}T12:00:00`;\r\n\r\n  if (y > 9999) {\r\n    dateString = \"+\" + dateString;\r\n  }\r\n\r\n  if (m < 10) {\r\n    let i = nth_occurrence(dateString, \"-\", 1);\r\n    dateString = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addStr)(dateString, i + 1, \"0\");\r\n  }\r\n\r\n  if (d < 10) {\r\n    let i = nth_occurrence(dateString, \"-\", 2);\r\n    dateString = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addStr)(dateString, i + 1, \"0\");\r\n  }\r\n  return dateString;\r\n}\r\n/**\r\n *\r\n * returns the index of the nth occurance of a char in a string\r\n */\r\nfunction nth_occurrence(string, char, nth) {\r\n  var first_index = string.indexOf(char);\r\n  var length_up_to_first_index = first_index + 1;\r\n\r\n  if (nth == 1) {\r\n    return first_index;\r\n  } else {\r\n    var string_after_first_occurrence = string.slice(length_up_to_first_index);\r\n    var next_occurrence = nth_occurrence(\r\n      string_after_first_occurrence,\r\n      char,\r\n      nth - 1\r\n    );\r\n\r\n    if (next_occurrence === -1) {\r\n      return -1;\r\n    } else {\r\n      return length_up_to_first_index + next_occurrence;\r\n    }\r\n  }\r\n}\r\n\r\nfunction isleapYear(year) {\r\n  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;\r\n}\r\n\n\n//# sourceURL=webpack://boundary-value-exploration/./frontend/js/helpers/date_helpers.js?");

/***/ }),

/***/ "./frontend/js/helpers/fps_test.js":
/*!*****************************************!*\
  !*** ./frontend/js/helpers/fps_test.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"countFPS\": () => (/* binding */ countFPS),\n/* harmony export */   \"getAverageFps\": () => (/* binding */ getAverageFps),\n/* harmony export */   \"zoomAnimation\": () => (/* binding */ zoomAnimation),\n/* harmony export */   \"moveAnimation\": () => (/* binding */ moveAnimation)\n/* harmony export */ });\n/* harmony import */ var three_examples_jsm_libs_tween_module_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/libs/tween.module.min */ \"./node_modules/three/examples/jsm/libs/tween.module.min.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\n\r\n/**Fps measure returning fps value for every 1 second */\r\nlet countFPS = (function () {\r\n  var lastLoop = new Date().getMilliseconds();\r\n  var count = 1;\r\n  var fps = 0;\r\n  return function () {\r\n    var currentLoop = new Date().getMilliseconds();\r\n    if (lastLoop > currentLoop) {\r\n      fps = count;\r\n      count = 1;\r\n    } else {\r\n      count += 1;\r\n    }\r\n    lastLoop = currentLoop;\r\n    return fps;\r\n  };\r\n})();\r\n\r\n/** returns average value of all values in fpsList */\r\nfunction getAverageFps(fpsList) {\r\n  const sum = fpsList.reduce((a, b) => a + b, 0);\r\n  const avg = sum / fpsList.length || 0;\r\n\r\n  return avg;\r\n}\r\n\r\n/**Animates zooming the camera */\r\nfunction zoomAnimation(camera) {\r\n  var zoom = {\r\n    value: camera.zoom, // from current zoom (no matter if it's more or less than 1)\r\n  };\r\n  var zoomEnd = {\r\n    value: 10, // to the zoom of 1\r\n  };\r\n  var tween = new three_examples_jsm_libs_tween_module_min__WEBPACK_IMPORTED_MODULE_0__.TWEEN.Tween(zoom).to(zoomEnd, 3000).repeat(Infinity); // duration of tweening is 0.5 second\r\n  tween.onUpdate(function () {\r\n    camera.zoom = zoom.value;\r\n    camera.updateProjectionMatrix();\r\n  });\r\n  tween.onComplete(function () {\r\n    camera.zoom = 1;\r\n  });\r\n  tween.start();\r\n}\r\n\r\n/**Animates moving the camera from @targetPosition back to start*/\r\nfunction moveAnimation(camera, controls, targetPosition) {\r\n  controls.enabled = false;\r\n  let duration = 1000;\r\n  var position = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3().copy(camera.position);\r\n\r\n  var tween = new three_examples_jsm_libs_tween_module_min__WEBPACK_IMPORTED_MODULE_0__.TWEEN.Tween(position)\r\n    .to(targetPosition, duration)\r\n    .easing(three_examples_jsm_libs_tween_module_min__WEBPACK_IMPORTED_MODULE_0__.TWEEN.Easing.Back.InOut)\r\n    .repeat(Infinity)\r\n    .onUpdate(function () {\r\n      camera.position.copy(position);\r\n      camera.lookAt(controls.target);\r\n      camera.updateProjectionMatrix();\r\n    })\r\n    .onComplete(function () {\r\n      camera.position.copy(targetPosition);\r\n      camera.lookAt(controls.target);\r\n      camera.updateProjectionMatrix();\r\n      controls.enabled = true;\r\n    })\r\n    .start();\r\n}\r\n\n\n//# sourceURL=webpack://boundary-value-exploration/./frontend/js/helpers/fps_test.js?");

/***/ }),

/***/ "./frontend/js/helpers/utils.js":
/*!**************************************!*\
  !*** ./frontend/js/helpers/utils.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calculateOpacity\": () => (/* binding */ calculateOpacity),\n/* harmony export */   \"addStr\": () => (/* binding */ addStr)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./frontend/js/constants.js\");\n/**\r\n * Calculates the opacity from @param lengthDifference\r\n */\r\n\r\n\r\n\r\nfunction calculateOpacity(lengthDifference) {\r\n  lengthDifference = parseInt(lengthDifference);\r\n\r\n  return isNaN(lengthDifference)\r\n    ? _constants__WEBPACK_IMPORTED_MODULE_0__.BASE_OPACITY\r\n    : lengthDifference / 20 + _constants__WEBPACK_IMPORTED_MODULE_0__.BASE_OPACITY > 0.9\r\n    ? 0.9\r\n    : lengthDifference / 20 + _constants__WEBPACK_IMPORTED_MODULE_0__.BASE_OPACITY;\r\n}\r\n/**\r\n * Inserts @param str at the @param index of @param stringToAdd\r\n */\r\nfunction addStr(str, index, stringToAdd) {\r\n  return (\r\n    str.substring(0, index) + stringToAdd + str.substring(index, str.length)\r\n  );\r\n}\r\n\n\n//# sourceURL=webpack://boundary-value-exploration/./frontend/js/helpers/utils.js?");

/***/ }),

/***/ "./frontend/js/material.js":
/*!*********************************!*\
  !*** ./frontend/js/material.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMaterial\": () => (/* binding */ getMaterial),\n/* harmony export */   \"getMaterials\": () => (/* binding */ getMaterials)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nfunction getMaterial(opacity, color) {\r\n  let material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({\r\n    color: color,\r\n    opacity: opacity,\r\n    transparent: true,\r\n    side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide,\r\n    depthTest: false,\r\n  });\r\n  return material;\r\n}\r\n\r\nfunction getMaterials(opacity, color) {\r\n  return [\r\n    getMaterial(opacity, color), // right outer\r\n    getMaterial(opacity, color), // left outer\r\n    getMaterial(opacity, color), // top\r\n    getMaterial(opacity, color), // bottom\r\n    getMaterial(opacity, color), // front\r\n    getMaterial(opacity, color), // back\r\n  ];\r\n}\r\n\n\n//# sourceURL=webpack://boundary-value-exploration/./frontend/js/material.js?");

/***/ }),

/***/ "./frontend/js/three.js":
/*!******************************!*\
  !*** ./frontend/js/three.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls.js */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var three_examples_jsm_libs_tween_module_min_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three/examples/jsm/libs/tween.module.min.js */ \"./node_modules/three/examples/jsm/libs/tween.module.min.js\");\n/* harmony import */ var three_examples_jsm_libs_stats_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/examples/jsm/libs/stats.module */ \"./node_modules/three/examples/jsm/libs/stats.module.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./frontend/js/constants.js\");\n/* harmony import */ var _BMI_boundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BMI_boundary */ \"./frontend/js/BMI_boundary.js\");\n/* harmony import */ var _date_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date_boundary */ \"./frontend/js/date_boundary.js\");\n/* harmony import */ var _helpers_fps_test__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/fps_test */ \"./frontend/js/helpers/fps_test.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// var validMax = new Date(275760, 8, 13);\r\n// var invalidMax = new Date(275760, 8, 14);\r\n// var invalidMin = new Date(-271821, 3, 20);\r\n// var validMin = new Date(-271821, 3, 21);\r\n\r\nconst scene = new three__WEBPACK_IMPORTED_MODULE_4__.Scene();\r\nlet camera = new three__WEBPACK_IMPORTED_MODULE_4__.PerspectiveCamera(\r\n  45,\r\n  window.innerWidth / window.innerHeight,\r\n  0.1,\r\n  100\r\n);\r\ncamera.position.set(5, 30, 40);\r\n//camera.position.set(5, 40, 80);\r\n//camera.zoom = 2;\r\ncamera.updateProjectionMatrix();\r\nconst renderer = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer();\r\nrenderer.setSize(window.innerWidth, window.innerHeight);\r\nvar controls;\r\ncontrols = new three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_5__.OrbitControls(camera, renderer.domElement);\r\n//controls.autoRotate = true;\r\ndocument.body.appendChild(renderer.domElement);\r\n\r\n{\r\n  const planeSize = 100;\r\n  const loader = new three__WEBPACK_IMPORTED_MODULE_4__.TextureLoader();\r\n  const texture = loader.load(\r\n    \"https://threejsfundamentals.org/threejs/resources/images/checker.png\"\r\n  );\r\n  texture.wrapS = three__WEBPACK_IMPORTED_MODULE_4__.RepeatWrapping;\r\n  texture.wrapT = three__WEBPACK_IMPORTED_MODULE_4__.RepeatWrapping;\r\n  texture.magFilter = three__WEBPACK_IMPORTED_MODULE_4__.NearestFilter;\r\n  const repeats = planeSize / 2;\r\n  texture.repeat.set(repeats, repeats);\r\n\r\n  const planeGeo = new three__WEBPACK_IMPORTED_MODULE_4__.PlaneGeometry(planeSize, planeSize);\r\n  const planeMat = new three__WEBPACK_IMPORTED_MODULE_4__.MeshPhongMaterial({\r\n    map: texture,\r\n    side: three__WEBPACK_IMPORTED_MODULE_4__.DoubleSide,\r\n  });\r\n  const mesh = new three__WEBPACK_IMPORTED_MODULE_4__.Mesh(planeGeo, planeMat);\r\n  mesh.rotation.x = Math.PI * -0.5;\r\n  scene.add(mesh);\r\n}\r\n\r\nlet fpsArr = [];\r\nconst intensity = 1.0;\r\nconst light = new three__WEBPACK_IMPORTED_MODULE_4__.AmbientLight(_constants__WEBPACK_IMPORTED_MODULE_0__.AMBIENT_LIGHT_COLOR, intensity);\r\nconst stats = (0,three_examples_jsm_libs_stats_module__WEBPACK_IMPORTED_MODULE_6__.default)();\r\ndocument.body.appendChild(stats.dom);\r\nscene.add(light);\r\n\r\nfunction animate() {\r\n  requestAnimationFrame(animate);\r\n  controls.update();\r\n  three_examples_jsm_libs_tween_module_min_js__WEBPACK_IMPORTED_MODULE_7__.TWEEN.update();\r\n  render();\r\n  fpsArr.push((0,_helpers_fps_test__WEBPACK_IMPORTED_MODULE_3__.countFPS)());\r\n  stats.update();\r\n}\r\n//moveAnimation(camera, controls, new THREE.Vector3(60, 40, 80));\r\n//zoomAnimation(camera);\r\n\r\nfunction render() {\r\n  console.log(camera.position);\r\n  renderer.render(scene, camera);\r\n}\r\n\r\nanimate();\r\n\r\nlet simulation = document\r\n  .getElementsByTagName(\"body\")[0]\r\n  .getAttribute(\"data-simulation\");\r\n\r\nif (simulation == _constants__WEBPACK_IMPORTED_MODULE_0__.BMI_SIMULATION) {\r\n  (0,_BMI_boundary__WEBPACK_IMPORTED_MODULE_1__.runBMIBoundarySimulation)(scene);\r\n} else {\r\n  (0,_date_boundary__WEBPACK_IMPORTED_MODULE_2__.runDateBoundaryAnalysis)(scene);\r\n}\r\n\r\nsetTimeout(function () {\r\n  console.log(\"avg fps: \", (0,_helpers_fps_test__WEBPACK_IMPORTED_MODULE_3__.getAverageFps)(fpsArr));\r\n}, 30000);\r\n\n\n//# sourceURL=webpack://boundary-value-exploration/./frontend/js/three.js?");

/***/ }),

/***/ "./models/BMI-cube.js":
/*!****************************!*\
  !*** ./models/BMI-cube.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BMICube)\n/* harmony export */ });\nclass BMICube {\r\n  constructor(height, weight, cube) {\r\n    this.height = height;\r\n    this.weight = weight;\r\n    this.cube = cube;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://boundary-value-exploration/./models/BMI-cube.js?");

/***/ }),

/***/ "./models/date-cube.js":
/*!*****************************!*\
  !*** ./models/date-cube.js ***!
  \*****************************/
/***/ ((module) => {

eval("/**\r\n * Used as container class for a cube, a date and the year,month,day of the date\r\n * to use as reference when input is invalid\r\n */\r\n\r\nmodule.exports = class DateCube {\r\n  constructor(date, cube, dateReference) {\r\n    this.date = new Date(date);\r\n    this.cube = cube;\r\n    this.dateReference = dateReference;\r\n  }\r\n\r\n  ISOdate() {\r\n    try {\r\n      return this.date.toISOString().slice(0, 10); //.replace(/-/g, \"/\");\r\n    } catch (err) {\r\n      return \"\" + err;\r\n    }\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://boundary-value-exploration/./models/date-cube.js?");

/***/ }),

/***/ "./models/date-reference.js":
/*!**********************************!*\
  !*** ./models/date-reference.js ***!
  \**********************************/
/***/ ((module) => {

eval("/**\r\n * Used as reference when date is invalid and we want access to its year,month,day parameters\r\n */\r\nmodule.exports = class DateReference {\r\n  constructor(year, month, day) {\r\n    this.year = year;\r\n    this.month = month;\r\n    this.day = day;\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://boundary-value-exploration/./models/date-reference.js?");

/***/ })

}]);