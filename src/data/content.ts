import { Project, Experience, SocialLink } from "../types";
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
  { label: "Experience", href: "#experience" },
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

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    title: "Team Lead (Intern) at Lambda School",
    description:
      "Mentored a 5-person cohort through its capstone (React + Node).",
    date: "2019",
    icon: "Briefcase",
  },
  {
    id: "2",
    title: "React Native Team Lead at Connect Our Kids (Beta)",
    description:
      "Guided 5 engineers to ship the first TestFlight build of a child-welfare case-management app.",
    date: "2019",
    icon: "Briefcase",
  },
  {
    id: "3",
    title: "Software Engineer III · American Express — Business Banking",
    description:
      "Core contributor to the historic launch of **Amex Business Checking**. Built the React micro-front-end for customer onboarding.",
    date: "2020 – 2021",
    icon: "Briefcase",
  },
  {
    id: "4",
    title: "Software Engineer II · American Express – Business Blueprint",
    description:
      "Migrated Kabbage micro-front-ends and built new account-management UI for Business Blueprint, cutting UI regressions 30 %.",
    date: "2022 – 2023",
    icon: "Briefcase",
  },
  {
    id: "5",
    title: "Freelance Full-Stack Developer",
    description:
      "Builds React / Next.js & Node apps for clients—most notably a Stripe-powered platform. Automates CI/CD with GitHub Actions + Vercel.",
    date: "2023",
    icon: "Briefcase",
  },
  {
    id: "6",
    title: "Software Engineer (Contract) · Match Hat",
    description:
      "Works alongside three other engineers at a fast-moving startup, independently designing and shipping features.",
    date: "2024 – Present",
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
