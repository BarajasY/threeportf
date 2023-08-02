import { Component } from "solid-js";
import style from "../styles/stack.module.css";
import { Motion, Presence } from "@motionone/solid";
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
  return (
    <Presence>
      <div class={style.StackContainer}>
        <Motion.h1>Stack</Motion.h1>
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
              <FaBrandsReact class={style.Icon} fill={CurrentRingColor()} />
              <TbBrandSolidjs class={style.Icon} fill={CurrentRingColor()} />
              <TbBrandHtml5 class={style.Icon} fill={CurrentRingColor()} />
              <TbBrandCss3 class={style.Icon} fill={CurrentRingColor()} />
              <SiTypescript class={style.Icon} fill={CurrentRingColor()} />
              <SiNextdotjs class={style.Icon} fill={CurrentRingColor()} />
              <TbBrandJavascript class={style.Icon} fill={CurrentRingColor()} />
              <TbBrandRedux class={style.Icon} fill={CurrentRingColor()} />
              <TbBrandBootstrap class={style.Icon} fill={CurrentRingColor()} />
              <SiDart class={style.Icon} fill={CurrentRingColor()} />
              <SiThreedotjs class={style.Icon} fill={CurrentRingColor()} />
              <SiFlutter class={style.Icon} fill={CurrentRingColor()} />
              <SiTauri class={style.Icon} fill={CurrentRingColor()} />
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
              <FaBrandsRust class={style.Icon} fill={CurrentRingColor()} />
              <FaBrandsNodeJs class={style.Icon} fill={CurrentRingColor()} />
              <FaBrandsJava class={style.Icon} fill={CurrentRingColor()} />
              <SiSpringboot class={style.Icon} fill={CurrentRingColor()} />
              <SiExpress class={style.Icon} fill={CurrentRingColor()} />
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
              <SiFirebase class={style.Icon} fill={CurrentRingColor()} />
              <SiPostgresql class={style.Icon} fill={CurrentRingColor()} />
              <TbBrandMysql class={style.Icon} fill={CurrentRingColor()} />
              <SiMicrosoftsqlserver
                class={style.Icon}
                fill={CurrentRingColor()}
              />
              <SiUnrealengine class={style.Icon} fill={CurrentRingColor()} />
              <SiPostman class={style.Icon} fill={CurrentRingColor()} />
            </div>
          </Motion.div>
        </div>
      </div>
    </Presence>
  );
};

export default Stack;
