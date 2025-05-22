import deepImg from "@/assets/images/deep.webp";
import mortysImg from "@/assets/images/mortys.webp";
import excaliburImg from "@/assets/images/excalibur.webp";
import paypotImg from "@/assets/images/paypot.png";
import mui from "@/assets/icons/image_4.svg";
import next from "@/assets/icons/image_5.svg";
import react from "@/assets/icons/image_7.svg";
import expo from "@/assets/icons/image_1.svg";
import node from "@/assets/icons/image_6.svg";
import tailwind from "@/assets/icons/image_8.svg";
import typescript from "@/assets/icons/image_9.svg";
import redux from "@/assets/icons/image_12.svg";
import firebase from "@/assets/icons/image_11.svg";
import logoExcalibur from "@/assets/images/logo_excalibur.webp";
import logoStore from "@/assets/images/logo_store.svg";
import logoDeep from "@/assets/images/logo_deep.svg";
import logoPaypot from "@/assets/images/logo_paypot.svg";

export const projects = [
  {
    id: 0,
    src: deepImg,
    logo: logoDeep,
    name: "deep learning",
    description:
      "A self-initiated project designed to streamline course enrollment and allow users to view and manage their registered courses in a simple, intuitive interface.",
    stack: [
      { name: "react", src: react },
      { name: "redux", src: redux },
      { name: "tailwind", src: tailwind },
    ],
    approach: [
      "Developed a single-page application using React and Redux for managing user state and course data",
      "Employed Tailwind CSS for building responsive and consistent UI components.",
    ],
    link: "",
  },
  {
    id: 1,
    src: paypotImg,
    logo: logoPaypot,
    name: "paypot",
    description:
      "An Mobile app to split expenses and manage shared debts with your friends, created as part of a course with Women Who Code",
    stack: [
      { name: "react", src: react },
      { name: "expo", src: expo },
      { name: "Node.js", src: node },
    ],
    approach: [
      "Built with React Native and Expo Router for smooth mobile navigation.",
      "Implemented backend services with Node.js, Express, and Passport for authentication, using JWT for secure session management.",
      "Currently working on a responsive web version to extend usability beyond mobile.",
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
    name: "Freelance Work",
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
      "Project 1: Built a dynamic web app for United War Veterans Council with a strong focus on UX and responsiveness.",
      "Project 2: Developed an internal employee platform using Next.js, TypeScript, and Tailwind CSS.",
      "Project 3: Ongoing development of a cross-platform mobile app using React Native",
    ],
    link: "",
  },
];
