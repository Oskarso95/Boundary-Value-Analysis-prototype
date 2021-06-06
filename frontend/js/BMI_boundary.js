import { getMaterial, getMaterials } from "./material";
import { createCube, findBMINeighbors, findDateNeighbors } from "./cube";
import BMICube from "../../models/BMI-cube";
import {
  BASE_OPACITY,
  CUBE_COLOR,
  HEIGHT_COLOR,
  HEIGHT_GAP,
  MAX_HEIGHT,
  MAX_WEIGHT,
  MIN_HEIGHT,
  MIN_WEIGHT,
  WEIGHT_COLOR,
  WEIGHT_GAP,
} from "./constants";
import { validateBMI } from "./helpers/BMI_helper";

export function runBMIBoundarySimulation(scene) {
  let height = MIN_HEIGHT;
  let weight = MIN_WEIGHT;
  let z = 0;
  let x = 0 - (MAX_WEIGHT - MIN_WEIGHT) / WEIGHT_GAP;
  x = x / 2;
  let y = 0;
  let cubes = [];

  while (true) {
    if (weight > MAX_WEIGHT - 1) {
      break;
    }

    if (validateBMI(height, weight).length < 6) {
      const material = getMaterials(BASE_OPACITY, CUBE_COLOR);
      var tmpCube = createCube(x, y, z, material);
      cubes.push(new BMICube(height, weight, tmpCube));
      scene.add(tmpCube);
    } else {
      const material = getMaterials(1.0, HEIGHT_COLOR);
      var tmpCube = createCube(x, y, z, material);
      cubes.push(new BMICube(height, weight, tmpCube));
      scene.add(tmpCube);
    }
    height += HEIGHT_GAP;
    y++;

    if (height > MAX_HEIGHT && weight < MAX_WEIGHT) {
      height = MIN_HEIGHT;
      weight += WEIGHT_GAP;
      y = 0;
      x++;
    }
  }
  cubes.forEach((el) => {
    findBMINeighbors(el);
  });
}
