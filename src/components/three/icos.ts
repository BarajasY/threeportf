import * as THREE from "three"

const icosGeometry = new THREE.IcosahedronGeometry(5);
const icosMaterial = new THREE.MeshStandardMaterial({color: "#15f32a", wireframe: true})
export const icos = new THREE.Mesh(icosGeometry, icosMaterial);
