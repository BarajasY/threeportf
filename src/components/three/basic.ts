import * as THREE from "three";
import gradientImage from "../../assets/gradient2.webp";
import { sphere, ring } from "./home";
import { cube } from "./cube";
import { CurrentObject, CurrentRingColor, setCurrentObject, setCurrentRingColor } from "../../sharedSignals";
import { icos } from "./icos";
import { tetrahedron } from "./tetra";

export const ambientlight = new THREE.AmbientLight(0xffffff, 3);

export const scene = new THREE.Scene();
//Protfolio starts with the Sphere first.
scene.add(sphere);
//Adds the outer ring.
ring.material.color = new THREE.Color(CurrentRingColor())
scene.add(ring);

scene.add(ambientlight);

const gradient = new THREE.TextureLoader().load(gradientImage);
scene.background = gradient;
scene.backgroundBlurriness = 10
scene.backgroundIntensity = .4

export const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, .1, 1000);
camera.position.setZ(20);
camera.rotation.x = 0
camera.rotation.y = 6.2

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

function animate() {
    requestAnimationFrame(animate);
    CurrentObject().rotation.y += .005
    ring.rotation.y += .0005
    renderer.render(scene, camera);
}
animate();

export function changeToStack() {
    scene.remove(CurrentObject());
    scene.add(cube)
    setCurrentRingColor("#3bd8ac")
    ring.material.color = new THREE.Color(CurrentRingColor())
    setCurrentObject(cube);
}

export function changeToProjects() {
    scene.remove(CurrentObject());
    setCurrentRingColor("#fb4543")
    ring.material.color = new THREE.Color(CurrentRingColor())
    scene.add(icos)
    setCurrentObject(icos)
}

export function changeToContact() {
    scene.remove(CurrentObject());
    setCurrentRingColor("#3877ec")
    ring.material.color = new THREE.Color(CurrentRingColor())
    scene.add(tetrahedron);
    setCurrentObject(tetrahedron);
}


window.addEventListener("resize", onWindowResize, false)

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

document.body.appendChild(renderer.domElement);
