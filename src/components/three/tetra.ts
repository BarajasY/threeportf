import * as THREE from "three"

export const tetraGeometry = new THREE.TetrahedronGeometry(5, 3);
export const tetraMaterial = new THREE.MeshStandardMaterial({color: "#fofof7", wireframe: true})
export const tetrahedron = new THREE.Mesh(tetraGeometry, tetraMaterial);
