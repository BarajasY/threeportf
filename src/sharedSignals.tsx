import { Component, createSignal } from "solid-js";
import { Mesh } from "three";
import { sphere } from "./components/three/home";
import Home from "./components/Home";

export const [CameraPosition, setCameraPosition] = createSignal();
export const [CameraPositionZ, setCameraPositionZ] = createSignal(30);
export const [CurrentObject, setCurrentObject] = createSignal<Mesh>(sphere);
export const [CurrentRingColor, setCurrentRingColor] = createSignal<string>("#FFFFFF");
export const [CurrentScreen, setCurrentScreen] = createSignal<number>(0);
