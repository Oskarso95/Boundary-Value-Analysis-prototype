import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { TWEEN } from "three/examples/jsm/libs/tween.module.min.js";
import Stats from "three/examples/jsm/libs/stats.module";
import { AMBIENT_LIGHT_COLOR, BMI_SIMULATION } from "./constants";
import { runBMIBoundarySimulation } from "./BMI_boundary";
import { runDateBoundaryAnalysis } from "./date_boundary";
import {
  countFPS,
  getAverageFps,
  moveAnimation,
  zoomAnimation,
} from "./helpers/fps_test";
// var validMax = new Date(275760, 8, 13);
// var invalidMax = new Date(275760, 8, 14);
// var invalidMin = new Date(-271821, 3, 20);
// var validMin = new Date(-271821, 3, 21);

const scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.set(5, 30, 40);
//camera.position.set(5, 40, 80);
//camera.zoom = 2;
camera.updateProjectionMatrix();
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
var controls;
controls = new OrbitControls(camera, renderer.domElement);
//controls.autoRotate = true;
document.body.appendChild(renderer.domElement);

{
  const planeSize = 100;
  const loader = new THREE.TextureLoader();
  const texture = loader.load(
    "https://threejsfundamentals.org/threejs/resources/images/checker.png"
  );
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.magFilter = THREE.NearestFilter;
  const repeats = planeSize / 2;
  texture.repeat.set(repeats, repeats);

  const planeGeo = new THREE.PlaneGeometry(planeSize, planeSize);
  const planeMat = new THREE.MeshPhongMaterial({
    map: texture,
    side: THREE.DoubleSide,
  });
  const mesh = new THREE.Mesh(planeGeo, planeMat);
  mesh.rotation.x = Math.PI * -0.5;
  scene.add(mesh);
}

let fpsArr = [];
const intensity = 1.0;
const light = new THREE.AmbientLight(AMBIENT_LIGHT_COLOR, intensity);
const stats = Stats();
document.body.appendChild(stats.dom);
scene.add(light);

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  TWEEN.update();
  render();
  fpsArr.push(countFPS());
  stats.update();
}
//moveAnimation(camera, controls, new THREE.Vector3(60, 40, 80));
//zoomAnimation(camera);

function render() {
  console.log(camera.position);
  renderer.render(scene, camera);
}

animate();

let simulation = document
  .getElementsByTagName("body")[0]
  .getAttribute("data-simulation");

if (simulation == BMI_SIMULATION) {
  runBMIBoundarySimulation(scene);
} else {
  runDateBoundaryAnalysis(scene);
}

setTimeout(function () {
  console.log("avg fps: ", getAverageFps(fpsArr));
}, 30000);
