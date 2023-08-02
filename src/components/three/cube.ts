import * as THREE from "three";

const cubeGeometry = new THREE.BoxGeometry(10, 10, 10, 6, 6, 6);
const cubeMaterial = new THREE.MeshStandardMaterial({color: "#ff0009", wireframe: true})
export const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
