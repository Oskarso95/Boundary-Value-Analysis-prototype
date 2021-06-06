import { MeshBasicMaterial, DoubleSide } from "three";

export function getMaterial(opacity, color) {
  let material = new MeshBasicMaterial({
    color: color,
    opacity: opacity,
    transparent: true,
    side: DoubleSide,
    depthTest: false,
  });
  return material;
}

export function getMaterials(opacity, color) {
  return [
    getMaterial(opacity, color), // right outer
    getMaterial(opacity, color), // left outer
    getMaterial(opacity, color), // top
    getMaterial(opacity, color), // bottom
    getMaterial(opacity, color), // front
    getMaterial(opacity, color), // back
  ];
}
