import { Component } from "solid-js";
import style from "../../styles/work.module.css";
import image from "../../assets/astrobuyer.webp";
import { SiCss3, SiDart, SiFlutter, SiHtml5, SiPostgresql, SiRust, SiSolid, SiTypescript } from "solid-icons/si";

const Astrobuyer: Component = () => {
  return (
    <div class={style.Container}>
        <div class={style.Content}>
            <div class={style.Info}>
                <h1 class={style.Title}>Astrobuyer</h1>
                <p>A Full-Stack e-commerce application with both a web and a mobile version.</p>
                <p>Astrobuyer allows users to create an account and buy or add planets to their shopping cart.</p>
                <h1 class={style.Stack}>Stack</h1>
                <section class={style.StackIcons}>
                    <SiDart class={style.ProjectIcon} id={style.AstrobuyerIcon}/>
                    <SiFlutter class={style.ProjectIcon} id={style.AstrobuyerIcon}/>
                    <SiSolid class={style.ProjectIcon} id={style.AstrobuyerIcon}/>
                    <SiTypescript class={style.ProjectIcon} id={style.AstrobuyerIcon}/>
                    <SiRust class={style.ProjectIcon} id={style.AstrobuyerIcon}/>
                    <SiCss3 class={style.ProjectIcon} id={style.AstrobuyerIcon}/>
                    <SiHtml5 class={style.ProjectIcon} id={style.AstrobuyerIcon}/>
                    <SiPostgresql class={style.ProjectIcon} id={style.AstrobuyerIcon}/>
                </section>
            </div>
            <div class={style.Image}>
                <img src={image} alt="Project Image" />
            </div>
        </div>
        <div class={style.Links}>
            <a href="https://github.com/BarajasY/AstrobuyerV2" target="_blank">Github</a>
        </div>
    </div>
  );
};

export default Astrobuyer;
