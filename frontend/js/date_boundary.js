import { getMaterials } from "./material";
import { createCube, findDateNeighbors } from "./cube";
import DateCube from "../../models/date-cube";
import DateReference from "../../models/date-reference";
import { BASE_OPACITY, CUBE_COLOR } from "./constants";

export function runDateBoundaryAnalysis(scene) {
  let date = new Date(275756, 0, 1, 12, 0, 0, 0);
  let year = date.getFullYear();
  let cubes = [];

  while (true) {
    if (isNaN(date.getDate() + 1)) {
      break;
    }
    let x = date.getMonth() + 1;
    let y = date.getDate();
    let z = date.getFullYear() - year - 1;
    const material = getMaterials(BASE_OPACITY, CUBE_COLOR);
    var tmpCube = createCube(x, y, z, material);
    cubes.push(
      new DateCube(date, tmpCube, new DateReference(date.getFullYear(), x, y))
    );
    scene.add(tmpCube);
    date.setDate(date.getDate() + 1);
  }
  cubes.forEach((el) => {
    findDateNeighbors(el);
  });
}
