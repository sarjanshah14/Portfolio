"use client";
import React, { useEffect, useState } from "react";
import { DiMongodb, DiNpm, DiPostgresql } from "react-icons/di";
import {
  FaCss3,
  FaEnvelope,
  FaGit,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaNodeJs,
  FaPhone,
  FaReact,
  FaJava,
} from "react-icons/fa6";
import {
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiExpress,
  SiJavascript,
  SiPrettier,
  SiTypescript,
  SiVercel,
  SiBootstrap,
  SiFlutter,
  SiDart,
  SiPython,
  SiNumpy,
  SiPandas,
  SiRender,
  SiTensorflow
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { TbTerminal2 } from "react-icons/tb";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "shahsarjan968@gmail",
    href: "mailto:shahsarjan968@gmail.com",
    icon: <FaEnvelope height={"50px"} />,
  },
  {
    name: "Phone",
    content: "+916351648593",
    href: "tel:+916351648593",
    icon: <FaPhone height={"50px"} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sarjan-shah-3324a334b/",
    content: "/sarjan-shah-3324a334b",
    icon: <FaLinkedin height={"50px"} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/sarjanshah14",
    content: "/sarjanshah14",
    icon: <FaGithub height={"50px"} />,
  },
];

const TOOLS = [
  {
    name: "JavaScript",
    content: "High-level, interpreted programming language for web development",
    icon: <SiJavascript size="50px" color="#f0db4f" />,
    color: "#f0db4f",
  },
  {
    name: "TypeScript",
    content: "Superset of JavaScript with static typing",
    icon: <SiTypescript size="50px" color="#007acc" />,
    color: "#007acc",
  },
  {
    name: "HTML",
    content: "Semantic HTML5 markup for structured web content",
    icon: <FaHtml5 size="50px" color="#e34c26" />,
    color: "#e34c26",
  },
  {
    name: "CSS",
    content: "Styling language for web design and responsive layouts",
    icon: <FaCss3 size="50px" color="#563d7c" />,
    color: "#563d7c",
  },
  {
    name: "React",
    content: "Component-based UI library for building user interfaces",
    icon: <FaReact size="50px" color="#61dafb" />,
    color: "#61dafb",
  },
  {
    name: "Next.js",
    content: "React framework with server-side rendering",
    icon: <RiNextjsFill size="50px" color="#000" />,
    color: "#000000",
  },
  {
    name: "Tailwind CSS",
    content: "Utility-first CSS framework",
    icon: <RiTailwindCssFill size="50px" color="#06b6d4" />,
    color: "#06b6d4",
  },
  {
    name: "Node.js",
    content: "JavaScript runtime for backend applications",
    icon: <FaNodeJs size="50px" color="#6cc24a" />,
    color: "#6cc24a",
  },
  {
    name: "Express",
    content: "Minimal web framework for Node.js",
    icon: <SiExpress size="50px" color="#ffffff" />,
    color: "#000000",
  },
  {
    name: "PostgreSQL",
    content: "Relational database system",
    icon: <DiPostgresql size="50px" color="#336791" />,
    color: "#336791",
  },
  {
    name: "MongoDB",
    content: "NoSQL document database",
    icon: <DiMongodb size="50px" color="#4db33d" />,
    color: "#4db33d",
  },
  {
    name: "Git",
    content: "Distributed version control system",
    icon: <FaGit size="50px" color="#f05032" />,
    color: "#f05032",
  },
  {
    name: "GitHub",
    content: "Code hosting and collaboration platform",
    icon: <FaGithub size="50px" color="#ffffff" />,
    color: "#000000",
  },
  {
    name: "Prettier",
    content: "Opinionated code formatter",
    icon: <SiPrettier size="50px" color="#f7b93c" />,
    color: "#f7b93c",
  },
  {
    name: "NPM",
    content: "JavaScript package manager",
    icon: <DiNpm size="50px" color="#CB3837" />,
    color: "#CB3837",
  },
  {
    name: "Vercel",
    content: "Frontend deployment platform",
    icon: <SiVercel size="50px" color="#ffffff" />,
    color: "#000000",
  },
  {
    name: "Flutter",
    content: "Cross-platform UI toolkit",
    icon: <SiFlutter size="50px" color="#02569B" />,
    color: "#02569B",
  },
  {
    name: "Dart",
    content: "Language optimized for UI development",
    icon: <SiDart size="50px" color="#0175C2" />,
    color: "#0175C2",
  },
  {
    name: "Bootstrap",
    content: "CSS framework for responsive design",
    icon: <SiBootstrap size="50px" color="#7952B3" />,
    color: "#7952B3",
  },
  {
    name: "Render",
    content: "Cloud platform for deploying web apps and APIs",
    icon: <SiRender size="50px" color="#46E3B7" />,
    color: "#46E3B7",
  },
  {
    name: "Python",
    content: "Language for AI, ML, and backend development",
    icon: <SiPython size="50px" color="#3776AB" />,
    color: "#3776AB",
  },
  {
    name: "Java",
    content: "Enterprise-grade programming language",
    icon: <FaJava size="50px" color="#ED8B00" />,
    color: "#ED8B00",
  },
  {
    name: "NumPy",
    content: "Numerical computing library for Python",
    icon: <SiNumpy size="50px" color="#013243" />,
    color: "#013243",
  },
  {
    name: "TensorFlow",
    content: "End-to-end machine learning framework for building and deploying models",
    icon: <SiTensorflow size="50px" color="#FF6F00" />,
    color: "#FF6F00",
  },
  {
    name: "Pandas",
    content: "Data manipulation and analysis library",
    icon: <SiPandas size="50px" color="#150458" />,
    color: "#150458",
  },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  useEffect(() => {
    setToolsLoaded(true);
  }, []);
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <aside className="w-full md:basis-1/4">
          <div
            className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600"
            style={{
              backdropFilter: "blur(2px)",
            }}
          >
            <div className="flex flex-row lg:flex-col items-center">
              <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 lg:mb-5 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="me"
                  src="/assets/me.jpg"
                />
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl">Sarjan Shah</p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  Software Developer
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md "
                      href={link.href}
                    >
                      <div className="w-8">{link.icon}</div>
                      <div className="flex flex-col">
                        <div className="text-sm">{link.name}</div>
                        <div className="text-xs text-zinc-500">
                          {link.content}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <main className="basis-3/4 w-[500px]">
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl mb-10 lg:md-20">About me</h1>
            <p className="mb-10 text-roboto">
              I build web applications using React, Next.js, and Node.js. My
              projects include full-stack applications with REST APIs, database
              integration, and responsive frontend interfaces. I work with
              PostgreSQL and MongoDB for data management, and use TypeScript for
              type-safe development.
            </p>
            <p className="mb-10">
              Currently learning backend architecture, API design patterns, and
              database optimization. Exploring deployment practices and
              containerization with Docker. Aiming for software developer roles
              where I can contribute to production applications and continue
              building practical skills in a collaborative environment.
            </p>
            <h1 className="text-3xl mb-10 lg:md-20">Stuff I use</h1>
            <div className="mb-5">
              {!toolsLoaded ? (
                <p className="h-[100px]"></p>
              ) : (
                <Splide
                  options={{
                    type: "loop",
                    interval: 2000,
                    autoplay: true,
                    pagination: false,
                    speed: 2000,
                    perPage: 5,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {TOOLS.reverse().map((tool) => (
                    <SplideSlide key={tool.name}>
                      <div
                        key={tool.name}
                        className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
                      >
                        {tool.icon}
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>
            {/* <div className="">
              <Splide
                options={{
                  type: "loop",
                  interval: 2000,
                  autoplay: true,
                  pagination: false,
                  speed: 3000,
                  perPage: 5,
                  perMove: 1,
                  rewind: true,
                  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                  arrows: false,
                }}
                aria-label="My Favorite Images"
              >
                {TOOLS.map((tool) => (
                  <SplideSlide key={tool.name}>
                    <div
                      key={tool.name}
                      className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
                    >
                      {tool.icon}
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div> */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
