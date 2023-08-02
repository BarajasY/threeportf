import { Component } from "solid-js";
import style from "../styles/contact.module.css";
import {
  BsGithub,
  BsLinkedin,
  BsMailbox,
  BsPhone,
  BsTwitter,
} from "solid-icons/bs";
import { TbMail, TbPhone } from "solid-icons/tb";
import { Motion } from "@motionone/solid";

const Contact: Component = () => {
  return (
    <Motion.div class={style.ContactContainer}>
      <Motion.div class={style.ContactWrapper}  initial={{ opacity: 0, x: 30 }} inView={{ opacity: 1, x: 0 }}>
        <h1>Feel free to contact me!</h1>
        <div class={style.ContactContent}>
          <section class={style.Contact}>
            <TbMail />
            <p>yahirmb7568@gmail.com</p>
          </section>
          <section class={style.Contact}>
            <TbPhone />
            <p>(+52) 866 120 3336</p>
          </section>
        </div>
        <div class={style.Socials}>
          <a href="https://www.linkedin.com/in/yahirmb/" target="_blank">
            <BsLinkedin />
          </a>
          <a href="https://github.com/BarajasY" target="_blank">
            <BsGithub />
          </a>
          <a href="https://twitter.com/MrBecauseofyes" target="_blank">
            <BsTwitter />
          </a>
        </div>
      </Motion.div>
    </Motion.div>
  );
};

export default Contact;
