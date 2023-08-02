import { Component, onMount } from "solid-js";
import "./three/basic";
import style from "../styles/home.module.css";
import { Motion, Presence } from "@motionone/solid";

const Home = () => {
  return (
    <Presence>
      <div class={style.HomeContainer}>
          <Motion.h1
            initial={{ opacity: 0, y: 30 }}
            inView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: .5 }}
            exit={{ opacity: 0, y: 30 }}
          >
            Yahir Moreno Barajas
          </Motion.h1>
          <Motion.p
            initial={{ opacity: 0, y: 30 }}
            inView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: .5 }}
            exit={{ opacity: 0, y: 30 }}
          >
            Sophomore Software Engineer
          </Motion.p>
      </div>
    </Presence>
  );
};

export default Home;
