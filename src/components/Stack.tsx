import { Component, createSignal } from "solid-js";
import style from "../styles/stack.module.css";
import { Motion, Presence, createMotion, motion} from "@motionone/solid";
import {
  TbBrandBootstrap,
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandMysql,
  TbBrandRedux,
  TbBrandSolidjs,
  TbBrandTypescript,
} from "solid-icons/tb";
import {
  FaBrandsJava,
  FaBrandsNodeJs,
  FaBrandsReact,
  FaBrandsRust,
} from "solid-icons/fa";
import {
  SiTauri,
  SiNextdotjs,
  SiDart,
  SiFlutter,
  SiExpress,
  SiFirebase,
  SiMicrosoftsqlserver,
  SiPostgresql,
  SiPostman,
  SiSpringboot,
  SiThreedotjs,
  SiUnrealengine,
  SiTypescript,
} from "solid-icons/si";
import { CurrentRingColor } from "../sharedSignals";

const Stack: Component = () => {
  const [Tech, setTech] = createSignal("");
  let TechRef: HTMLHeadingElement | undefined;

  const animateStack = (techName: string) => {
    createMotion(TechRef!, {animate:{opacity: 0}})
    setTech(techName);
    setTimeout(() => {
      createMotion(TechRef!, {animate:{opacity: 1}})
    }, 100);
  };

  return (
    <Presence>
      <div class={style.StackContainer}>
        <Motion.h1>Stack</Motion.h1>
        <Motion.h1 class={style.Tech} ref={TechRef}>&#60;{Tech()}/&#62;</Motion.h1>
        <div class={style.StackContent}>
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            inView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            class={style.Stack}
            style={{ border: `2px solid${CurrentRingColor()}` }}
          >
            <p>Frontend</p>
            <div class={style.StackIcons}>
              <FaBrandsReact
                class={style.Icon}
                fill={CurrentRingColor()}
                onmouseenter={() => animateStack("React")}
              />
              <TbBrandSolidjs class={style.Icon} fill={CurrentRingColor()} onmouseenter={() => animateStack("Solid.js")}/>
              <TbBrandHtml5 class={style.Icon} fill={CurrentRingColor()} onmouseenter={() => animateStack("HTML5")}/>
              <TbBrandCss3 class={style.Icon} fill={CurrentRingColor()} onmouseenter={() => animateStack("CSS3")}/>
              <SiTypescript class={style.Icon} fill={CurrentRingColor()} onmouseenter={() => animateStack("TypeScript")}/>
              <SiNextdotjs class={style.Icon} fill={CurrentRingColor()} onmouseenter={() => animateStack("Next.js")}/>
              <TbBrandJavascript class={style.Icon} fill={CurrentRingColor()} onmouseenter={() => animateStack("JavaScript")}/>
              <TbBrandRedux class={style.Icon} fill={CurrentRingColor()} onmouseenter={() => animateStack("Redux")}/>
              <TbBrandBootstrap class={style.Icon} fill={CurrentRingColor()} onmouseenter={() => animateStack("Bootstrap")}/>
              <SiDart class={style.Icon} fill={CurrentRingColor()} onmouseenter={() => animateStack("Dart")}/>
              <SiThreedotjs class={style.Icon} fill={CurrentRingColor()} onmouseenter={() => animateStack("Three.js")}/>
              <SiFlutter class={style.Icon} fill={CurrentRingColor()} onmouseenter={() => animateStack("Flutter")}/>
              <SiTauri class={style.Icon} fill={CurrentRingColor()} onmouseenter={() => animateStack("Tauri")}/>
            </div>
          </Motion.div>
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            inView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            class={style.Stack}
            style={{ border: `2px solid${CurrentRingColor()}` }}
          >
            <p>Backend</p>
            <div class={style.StackIcons}>
              <FaBrandsRust class={style.Icon} fill={CurrentRingColor()} onmouseenter={() => animateStack("Rust")}/>
              <FaBrandsNodeJs class={style.Icon} fill={CurrentRingColor()} onmouseenter={() => animateStack("Node.js")}/>
              <FaBrandsJava class={style.Icon} fill={CurrentRingColor()} onmouseenter={() => animateStack("Java")}/>
              <SiSpringboot class={style.Icon} fill={CurrentRingColor()} onmouseenter={() => animateStack("SpringBoot")}/>
              <SiExpress class={style.Icon} fill={CurrentRingColor()} onmouseenter={() => animateStack("Express.js")}/>
            </div>
          </Motion.div>
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            inView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            class={style.Stack}
            style={{ border: `2px solid${CurrentRingColor()}` }}
          >
            <p>Misc</p>
            <div class={style.StackIcons}>
              <SiFirebase class={style.Icon} fill={CurrentRingColor()} onmouseenter={() => animateStack("Firebase")}/>
              <SiPostgresql class={style.Icon} fill={CurrentRingColor()} onmouseenter={() => animateStack("PostgreSQL")}/>
              <TbBrandMysql class={style.Icon} fill={CurrentRingColor()} onmouseenter={() => animateStack("MySQL")}/>
              <SiMicrosoftsqlserver
                class={style.Icon}
                fill={CurrentRingColor()}
                onmouseenter={() => animateStack("SQL Servier")}
              />
              <SiUnrealengine class={style.Icon} fill={CurrentRingColor()} onmouseenter={() => animateStack("Unreal Engine")}/>
              <SiPostman class={style.Icon} fill={CurrentRingColor()} onmouseenter={() => animateStack("Postman")}/>
            </div>
          </Motion.div>
        </div>
      </div>
    </Presence>
  );
};

export default Stack;
