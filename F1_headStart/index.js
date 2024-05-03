import * as THREE from "three";

console.log(THREE);

const canvas = document.querySelector("canvas.webgl");

// Scene: a place where our object will be rendered
const scene = new THREE.Scene();

// Creating an object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "yellow" });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 2;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Render the scene
renderer.render(scene, camera);
