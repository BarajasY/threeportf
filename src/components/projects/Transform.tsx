import {
  SiCss3,
  SiHtml5,
  SiNextdotjs,
  SiRust,
  SiTauri,
  SiTypescript,
} from "solid-icons/si";
import { Component } from "solid-js";
import style from "../../styles/work.module.css";
import image from "../../assets/transform.webp";

const Transform: Component = () => {
  return (
    <div class={style.Container}>
      <div class={style.Content}>
        <div class={style.Info}>
          <h1 class={style.Title}>Transform</h1>
          <p>A Tauri based desktop application to convert .PNG images to the .WebP format.</p>
          <p>It uses Rust code to transform the image and the Next.js framework to build the UI.</p>
          <h1 class={style.Stack}>Stack</h1>
          <section class={style.StackIcons}>
            <SiNextdotjs class={style.ProjectIcon} id={style.TransformIcon} />
            <SiTauri class={style.ProjectIcon} id={style.TransformIcon} />
            <SiTypescript class={style.ProjectIcon} id={style.TransformIcon} />
            <SiRust class={style.ProjectIcon} id={style.TransformIcon} />
            <SiCss3 class={style.ProjectIcon} id={style.TransformIcon} />
            <SiHtml5 class={style.ProjectIcon} id={style.TransformIcon} />
          </section>
        </div>
        <div class={style.Image}>
          <img src={image} alt="Project Image" />
        </div>
      </div>
      <div class={style.Links}>
        <a href="https://github.com/BarajasY/transform" target="_blank">
          Github
        </a>
      </div>
    </div>
  );
};

export default Transform;
