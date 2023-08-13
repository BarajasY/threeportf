import { Component } from "solid-js";
import style from "../../styles/work.module.css";

const More: Component = () => {
  return (
    <div class={style.MoreContainer}>
      <h1>Hungry for <span>more?</span></h1>
      <p>I've only displayed some of my most notable projects, I have more than <span>30</span> repositories finished.</p>
      <p>
        Check them out in my <a href="https://github.com/BarajasY" target="_blank">github</a>!
      </p>
    </div>
  );
};

export default More;
