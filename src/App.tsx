import { Switch, type Component, Match } from "solid-js";
import style from "./styles/app.module.css";
import { Presence } from "@motionone/solid";
import { CurrentScreen } from "./sharedSignals";
import Menu from "./components/Menu";
import "./components/three/basic";
import Home from "./components/Home";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App:Component = () => {
  return (
    <Presence>
      <div class={style.AppContainer}>
        <div class={style.ScreenContainer}>
          <Switch>
            <Match when={CurrentScreen() === 0}>
              <Home />
            </Match>
            <Match when={CurrentScreen() === 1}>
              <Stack />
            </Match>
            <Match when={CurrentScreen() === 2}>
              <Projects />
            </Match>
            <Match when={CurrentScreen() === 3}>
              <Contact />
            </Match>
          </Switch>
        </div>
        <div class={style.MenuContainer}>
          <Menu />
        </div>
      </div>
    </Presence>
  );
};

export default App;
