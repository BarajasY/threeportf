import * as THREE from "three";

const cubeGeometry = new THREE.BoxGeometry(7, 7, 7, 6, 6, 6);
const cubeMaterial = new THREE.MeshStandardMaterial({color: "#ffb853", wireframe: true})
export const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
