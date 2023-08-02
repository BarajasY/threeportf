import { Component, createSignal } from "solid-js";
import style from "../styles/projects.module.css";
import { Motion, createMotion } from "@motionone/solid";
import Astrobuyer from "./projects/Astrobuyer";
import Workaholic from "./projects/Workaholic";
import { AiFillCaretLeft, AiFillCaretRight } from "solid-icons/ai";
import Transform from "./projects/Transform";
import More from "./projects/More";

const Projects: Component = () => {
  let wrapper: HTMLDivElement | undefined;
  const projects = [<Astrobuyer />, <Workaholic />, <Transform />, <More />];
  const [CurrentProject, setCurrentProject] = createSignal<number>(0);

  const nextProject = () => {
    createMotion(wrapper!, { animate: { opacity: 0, x: -30 } });
    setTimeout(() => {
      if (CurrentProject() == projects.length - 1) {
        setCurrentProject(0);
        createMotion(wrapper!, { animate: { opacity: 1, x: 0 } });
      } else {
        setCurrentProject(CurrentProject() + 1);
        createMotion(wrapper!, { animate: { opacity: 1, x: 0 } });
      }
    }, 300);
  };

  const prevProject = () => {
    createMotion(wrapper!, { animate: { opacity: 0, x: 30 } });
    setTimeout(() => {
      if (CurrentProject() == 0) {
        setCurrentProject(projects.length - 1);
        createMotion(wrapper!, { animate: { opacity: 1, x: 0 } });
      } else {
        setCurrentProject(CurrentProject() - 1);
        createMotion(wrapper!, { animate: { opacity: 1, x: 0 } });
      }
    }, 200);
  };

  return (
    <div class={style.ProjectsContainer}>
      <h1 class={style.ProjectsHeader}>
        <AiFillCaretLeft
          class={style.ProjectsArrow}
          onClick={() => prevProject()}
        />{" "}
        Starred Projects
        <AiFillCaretRight
          class={style.ProjectsArrow}
          onClick={() => nextProject()}
        />
      </h1>
      <div class={style.ProjectsContent}>
        <Motion.div
          initial={{ opacity: 0, x: 30 }}
          inView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          ref={wrapper}
          class={style.WrappedProject}
        >
          {projects[CurrentProject()]}
        </Motion.div>
      </div>
    </div>
  );
};

export default Projects;
