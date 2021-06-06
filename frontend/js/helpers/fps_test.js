import { TWEEN } from "three/examples/jsm/libs/tween.module.min";
import { Vector3 } from "three";

/**Fps measure returning fps value for every 1 second */
export let countFPS = (function () {
  var lastLoop = new Date().getMilliseconds();
  var count = 1;
  var fps = 0;
  return function () {
    var currentLoop = new Date().getMilliseconds();
    if (lastLoop > currentLoop) {
      fps = count;
      count = 1;
    } else {
      count += 1;
    }
    lastLoop = currentLoop;
    return fps;
  };
})();

/** returns average value of all values in fpsList */
export function getAverageFps(fpsList) {
  const sum = fpsList.reduce((a, b) => a + b, 0);
  const avg = sum / fpsList.length || 0;

  return avg;
}

/**Animates zooming the camera */
export function zoomAnimation(camera) {
  var zoom = {
    value: camera.zoom, // from current zoom (no matter if it's more or less than 1)
  };
  var zoomEnd = {
    value: 10, // to the zoom of 1
  };
  var tween = new TWEEN.Tween(zoom)
    .to(zoomEnd, 3000)
    .repeat(Infinity) // duration of tweening is 0.5 second
    .onUpdate(function () {
      camera.zoom = zoom.value;
      camera.updateProjectionMatrix();
    })
    .onComplete(function () {
      camera.zoom = 1;
    });
  tween.start();
}

/**Animates moving the camera from @targetPosition back to start*/
export function moveAnimation(camera, controls, targetPosition) {
  controls.enabled = false;
  let duration = 3000;
  var position = new Vector3().copy(camera.position);

  var tween = new TWEEN.Tween(position)
    .to(targetPosition, duration)
    .easing(TWEEN.Easing.Back.InOut)
    .repeat(Infinity)
    .onUpdate(function () {
      camera.position.copy(position);
      camera.lookAt(controls.target);
      camera.updateProjectionMatrix();
    })
    .onComplete(function () {
      camera.position.copy(targetPosition);
      camera.lookAt(controls.target);
      camera.updateProjectionMatrix();
      controls.enabled = true;
    })
    .start();
}
