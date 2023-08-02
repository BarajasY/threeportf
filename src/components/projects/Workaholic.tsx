import { Component } from "solid-js";
import style from "../../styles/work.module.css";
import { SiTypescript, SiCss3, SiHtml5, SiMysql, SiSpring, SiReact } from "solid-icons/si";
import { FaBrandsJava } from "solid-icons/fa";
import image from "../../assets/workaholic..webp";

const Workaholic: Component = () => {

  return (<div class={style.Container}>
    <div class={style.Content}>
        <div class={style.Info}>
            <h1 class={style.Title}>Workaholic</h1>
            <p>Full-Stack job board application.</p>
            <p>In this application users can create an account as either a worker or as a company, then apply or create jobs.</p>
            <h1 class={style.Stack}>Stack</h1>
            <section class={style.StackIcons}>
                <SiMysql class={style.ProjectIcon} id={style.WorkaholicIcon}/>
                <FaBrandsJava class={style.ProjectIcon} id={style.WorkaholicIcon}/>
                <SiSpring class={style.ProjectIcon} id={style.WorkaholicIcon}/>
                <SiReact class={style.ProjectIcon} id={style.WorkaholicIcon}/>
                <SiTypescript class={style.ProjectIcon} id={style.WorkaholicIcon}/>
                <SiCss3 class={style.ProjectIcon} id={style.WorkaholicIcon}/>
                <SiHtml5 class={style.ProjectIcon} id={style.WorkaholicIcon}/>
            </section>
        </div>
        <div class={style.Image}>
            <img src={image} alt="Project Image" />
        </div>
    </div>
    <div class={style.Links}>
        <a href="https://github.com/BarajasY/Workaholic" target="_blank">Github</a>
    </div>
</div>);
};

export default Workaholic;
