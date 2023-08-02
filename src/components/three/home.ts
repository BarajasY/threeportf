import * as THREE from "three";
/* #003c66 */
const geometry = new THREE.SphereGeometry(5, 32, 16);
export const circlematerial = new THREE.MeshStandardMaterial({color: "#3877ec", wireframe: true});
export const sphere = new THREE.Mesh(geometry, circlematerial);

const ringgeometry = new THREE.TorusGeometry(20, 20, 100, 100);
ringgeometry.rotateX(90);
const ringmaterial = new THREE.PointsMaterial({
    size: .008
})
export const ring = new THREE.Points(ringgeometry, ringmaterial);
