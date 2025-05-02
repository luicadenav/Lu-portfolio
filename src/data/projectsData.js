import img2 from "@/assets/images/project_0.webp";
import deepImg from "@/assets/images/deep.webp";
import mortysImg from "@/assets/images/mortys.webp";
import excaliburImg from "@/assets/images/excalibur.webp";
import mui from "@/assets/icons/image_4.svg";
import next from "@/assets/icons/image_5.svg";
import react from "@/assets/icons/image_7.svg";
import tailwind from "@/assets/icons/image_8.svg";
import typescript from "@/assets/icons/image_9.svg";
import redux from "@/assets/icons/image_12.svg";
import firebase from "@/assets/icons/image_11.svg";
import logoExcalibur from "@/assets/images/logo_excalibur.webp";
import logoStore from "@/assets/images/logo_store.svg";
import logoDeep from "@/assets/images/logo_deep.svg";

export const projects = [
  {
    id: 0,
    src: deepImg,
    logo: logoDeep,
    name: "deep learning",
    description:
      "A self-initiated project designed to deepen my knowledge of Material UI, TypeScript, and modern frontend patterns — all while having fun with the Rick & Morty API.",
    stack: [
      { name: "react", src: react },
      { name: "mui", src: mui },
      { name: "TypeScript", src: typescript },
    ],
    approach: [
      "Built a dynamic web app using React, TypeScript, and Material UI, styled for accessibility and responsive behavior.",
      "Implemented user authentication with Firebase, managing sessions using sessionStorage and cookies, while integrating Redux for global state management and building a dynamic card store interface powered by the Rick and Morty API.",
    ],
    link: "",
  },
  {
    id: 1,
    src: img2,
    logo: logoStore,
    name: "projec 1",
    description: "Descripción del proyecto 1...",
    stack: [
      { name: "react", src: react },
      { name: "mui", src: mui },
      { name: "TypeScript", src: typescript },
    ],
    approach: [
      "Built a dynamic web app using Next.js, TypeScript, and Material UI, styled for accessibility and responsive behavior.",
      "Implemented user authentication with Firebase, managing sessions using sessionStorage and cookies, while integrating Redux for global state management and building a dynamic card store interface powered by the Rick and Morty API.",
    ],
    link: "",
  },
  {
    id: 2,
    src: mortysImg,
    logo: logoStore,
    name: "Mortis store",
    description:
      "A self-initiated project designed to deepen my knowledge of Material UI, TypeScript, and modern frontend patterns — all while having fun with the Rick & Morty API.",
    stack: [
      { name: "react", src: react },
      { name: "mui", src: mui },
      { name: "TypeScript", src: typescript },
      { name: "firebase", src: firebase },
      { name: "redux", src: redux },
    ],
    approach: [
      "Built a dynamic web app using Next.js, TypeScript, and Material UI, styled for accessibility and responsive behavior.",
      "Implemented user authentication with Firebase, managing sessions using sessionStorage and cookies, while integrating Redux for global state management and building a dynamic card store interface powered by the Rick and Morty API.",
    ],
    link: "",
  },
  {
    id: 3,
    src: excaliburImg,
    logo: logoExcalibur,
    name: "built in collaboration",
    description:
      "As an independent frontend developer, I collaborated with Excalibur Interactive to design and build real products with real impact, combining design systems, modern frameworks, and clean architecture.",
    stack: [
      { name: "material UI", src: mui },
      { name: "Next.js", src: next },
      { name: "React Native", src: react },
      { name: "Tailwind", src: tailwind },
      { name: "TypeScript", src: typescript },
    ],
    approach: [
      "Built a dynamic web app for United War Veterans Council with a strong focus on UX and responsiveness.",
      "Developed an internal employee platform using Next.js, TypeScript, and Tailwind CSS.",
      "Currently building a cross-platform mobile app with React Native (in progress).",
    ],
    link: "",
  },
];
