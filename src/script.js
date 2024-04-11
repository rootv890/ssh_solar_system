import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Pane } from "tweakpane";
import { Planets, moonMaterial } from "./planets";
// initialize pane
const pane = new Pane();

// initialize the scene
const scene = new THREE.Scene();

const textureLoader = new THREE.TextureLoader();
const cubeTextureLoader = new THREE.CubeTextureLoader();

cubeTextureLoader.setPath("/textures/cubeMap/");
const backgroundCubeMap = cubeTextureLoader.load([
  "px.png",
  "nx.png",
  "py.png",
  "ny.png",
  "pz.png",
  "nz.png",
]);
// adding textures
const sunTexture = textureLoader.load("/textures/2k_sun.jpg");

const backgroundTexture = textureLoader.load(
  "/textures/8k_stars_milky_way.jpg"
);

scene.background = backgroundCubeMap;

// Enviornment Map is set of six images defines inside of cube

// add stuff here
// Generic Sphere
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const sunMtrl = new THREE.MeshBasicMaterial({
  map: sunTexture,
});

const sun = new THREE.Mesh(sphereGeometry, sunMtrl);

sun.scale.setScalar(5);
scene.add(sun);

// Planet Helper Functions
const createPlanet = (planet) => {
  const planetMesh = new THREE.Mesh(sphereGeometry, planet.material);
  planetMesh.scale.setScalar(planet.radius);
  planetMesh.position.x = planet.distance;
  return planetMesh;
};

const createMoon = (moon) => {
  const moonMesh = new THREE.Mesh(sphereGeometry, moonMaterial);
  moonMesh.scale.setScalar(moon.radius);
  moonMesh.position.x = moon.distance;

  return moonMesh;
};

const planetMeshes = Planets.map((planet) => {
  const planetMesh = createPlanet(planet);
  scene.add(planetMesh);
  planet.moons?.forEach((moon) => {
    const moonMesh = createMoon(moon);
    moonMesh.position.x = moon.distance;
    planetMesh.add(moonMesh);
  });
  return planetMesh;
});

// // add lights
const ambientLight = new THREE.AmbientLight("white", 0.1);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 2);
scene.add(pointLight);

// initialize the camera
const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  0.1,
  400
);
camera.position.z = 100;
camera.position.y = 5;

// initialize the renderer
const canvas = document.querySelector("canvas.threejs");
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// add controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.maxDistance = 200;
controls.minDistance = 20;

// add resize listener
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// render loop
const renderloop = () => {
  planetMeshes.forEach((planet, index) => {
    planet.rotation.y += Planets[index].speed;
    planet.position.x = Math.sin(planet.rotation.y) * Planets[index].distance;
    planet.position.z = Math.cos(planet.rotation.y) * Planets[index].distance;
    planet.children.forEach((moon, moonIndex) => {
      moon.rotation.x += Planets[index].moons[moonIndex].speed;
      moon.position.x =
        Math.sin(moon.rotation.x) * Planets[index].moons[moonIndex].distance;
      moon.position.z =
        Math.cos(moon.rotation.x) * Planets[index].moons[moonIndex].distance;
    });
  });

  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
};

renderloop();
