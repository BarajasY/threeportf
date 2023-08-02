import { Switch, type Component, Match, lazy } from "solid-js";
import style from "./styles/app.module.css";
import { Presence } from "@motionone/solid";
import { CurrentScreen } from "./sharedSignals";
import "./components/three/basic";
const Home = lazy(() => import ("./components/Home"));
const Stack = lazy(() => import ("./components/Stack"));
const Projects= lazy(() => import ("./components/Projects"));
const Contact = lazy(() => import ("./components/Contact"));
const Menu = lazy(() => import ("./components/Menu"));

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
