import * as THREE from "three"

const icosGeometry = new THREE.IcosahedronGeometry(5);
const icosMaterial = new THREE.MeshStandardMaterial({color: "#df678c", wireframe: true})
export const icos = new THREE.Mesh(icosGeometry, icosMaterial);
