import * as THREE from "three";

// Get the canvas element
const canvas = document.querySelector("canvas.webgl");

// Create a scene
const scene = new THREE.Scene();

// Create a cube geometry
const geometry = new THREE.BoxGeometry();
// Create a basic material with a different color
const material = new THREE.MeshBasicMaterial({ color: "blue" });
// Combine geometry and material to create a mesh
const mesh = new THREE.Mesh(geometry, material);
// Position the mesh away from the camera
mesh.position.z = -4; // Move it towards the camera
// Add the mesh to the scene
scene.add(mesh);

// Create a perspective camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
// Set camera position so that it's not inside the geometry
camera.position.z = 5; // Move the camera back

// Create a WebGL renderer
const renderer = new THREE.WebGLRenderer({ canvas });
// Set the size of the renderer
renderer.setSize(window.innerWidth, window.innerHeight);

// Render the scene with the camera
renderer.render(scene, camera);
