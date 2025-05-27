import { Project, Achievement, SocialLink } from "../types";
import {
  Github,
  Linkedin,
  Mail,
  Award,
  Briefcase,
  GraduationCap,
} from "lucide-react";

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/fixmylifedesigns",
    icon: "Github",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/irvingduran",
    icon: "Linkedin",
  },
  {
    platform: "Email",
    url: "mailto:contact@duranirving.com",
    icon: "Mail",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Kanji Study",
    description:
      "A full-stack Kanji Study platform built with Next.js, Firebase, and capacitor. Features include user authentication, learning games, web and mobile.",
    tags: ["Next.js", "Firebase", "Capacitor.Js", "Context"],
    imageUrl:
      "https://github.com/fixmylifedesigns/reactjs-portfolio/blob/master/src/images/projects/kanjistudy.png?raw=true",
    demoUrl: "https://kanjistudy.minnastudy.com",
    githubUrl: "https://github.com/fixmylifedesigns/Kanji-study",
  },
  {
    id: "2",
    title: "Nihongo With Moeno Online School",
    description:
      "Student/Teacher platform. Teachers can login and manage their students, Heygen Video tutorials translated into the teachers native language. Students can login and schedual classes",
    tags: ["Next.js", "Firebase", "Stripe"],
    imageUrl:
      "https://github.com/fixmylifedesigns/reactjs-portfolio/blob/master/src/images/projects/moeno.png?raw=true",
    demoUrl:
      "https://www.linkedin.com/posts/irvingduran_decided-i-will-start-sharing-some-of-my-process-activity-7304889047456325632-t57F?utm_source=share&utm_medium=member_desktop&rcm=ACoAACrRehYBYSranSnbAH5DOz0obws9sbylrqM",
    githubUrl: "https://github.com/fixmylifedesigns/nihongowithmoeno",
  },
  {
    id: "3",
    title: "AI Dialect Translator",
    description:
      "An application that utilizes machine learning to generate custom images based on text prompts. Integrated with various AI models to provide diverse style options.",
    tags: ["Next.js", "Typescript", "Stripe", "Firebase"],
    imageUrl:
      "https://github.com/fixmylifedesigns/reactjs-portfolio/blob/master/src/images/projects/translate.png?raw=true",
    demoUrl: "https://anydialect.duranirving.com/marketing",
    githubUrl: "https://github.com/fixmylifedesigns/anydialectv2",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "1",
    title: "Team Lead at Lambdaschool (internship)",
    description:
      "Graduated with honors from a prestigious university, specializing in artificial intelligence and machine learning.",
    date: "2019",
    icon: "Briefcase",
  },
  {
    id: "2",
    title: "React Native Developer / Team Lead at Connectourkids.org",
    description:
      "Led a team of 5 developers to successfully deliver a major enterprise software solution that increased client productivity by 35%.",
    date: "2019",
    icon: "Briefcase",
  },
  {
    id: "3",
    title: "Software Engineer III at American Express",
    description:
      "Contributed towards the historic launch of the American Express Buisiness Banking Platform",
    date: "2020",
    icon: "Briefcase",
  },
    {
    id: "4",
    title: "Software Engineer II at American Express",
    description:
      "Recognized for developing a groundbreaking algorithm that reduced processing time by 50% while maintaining accuracy.",
    date: "2022",
    icon: "Briefcase",
  },
];

export const ABOUT_ME = {
  name: "Irving Duran",
  title: "Full Stack Engineer",
  location: "Brooklyn, NY",
  birthYear: "1993",
  birthPlace: "Brooklyn, New York",
  bio: "Creating stuff was my escape from the world. My love for building and making Art eventually lead me to want to learn how to build and create with code.",
};
