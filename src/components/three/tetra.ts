import * as THREE from "three"

export const tetraGeometry = new THREE.TetrahedronGeometry(5, 2);
export const tetraMaterial = new THREE.MeshStandardMaterial({color: "#a97313", wireframe: true})
export const tetrahedron = new THREE.Mesh(tetraGeometry, tetraMaterial);
