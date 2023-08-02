import * as THREE from "three";
import { Component } from "solid-js";
import { BsPerson, BsCodeSlash, BsFileCode, BsChatLeftText } from "solid-icons/bs";
import style from "../styles/menu.module.css";
import { CurrentObject, CurrentRingColor, setCurrentObject, setCurrentRingColor, setCurrentScreen } from "../sharedSignals";
import { Motion } from "@motionone/solid";
import { scene } from "./three/basic";
import { Mesh } from "three";
import { ring, sphere } from "./three/home";
import { cube } from "./three/cube";
import { icos } from "./three/icos";
import { tetrahedron } from "./three/tetra";

const Menu: Component = () => {

  const changeScreen = (screenId:number, ringColor:string, object:Mesh) => {
    scene.remove(CurrentObject())
    setCurrentObject(object);
    scene.add(CurrentObject())
    ring.material.color = new THREE.Color(ringColor);
    setCurrentRingColor(ringColor);
    setCurrentScreen(screenId);
  }

  return (
    <div class={style.MenuContainer}>
      <Motion.div
      initial={{opacity: 0, y:-30}}
      inView={{opacity: 1, y:0}}
      transition={{delay: 1, duration: 1}}
      class={style.MenuContent}>
        <BsPerson size={26} fill={CurrentRingColor()} onClick={() => changeScreen(0, "#FFFFFF", sphere)}/>
        <BsCodeSlash size={26} fill={CurrentRingColor()} onClick={() => changeScreen(1, "#00baae", cube)}/>
        <BsFileCode size={26} fill={CurrentRingColor()} onClick={() => changeScreen(2, "#c094f0", icos)}/>
        <BsChatLeftText size={26} fill={CurrentRingColor()} onClick={() => changeScreen(3, "#3877ec", tetrahedron)}/>
      </Motion.div>
    </div>
  );
};

export default Menu;
