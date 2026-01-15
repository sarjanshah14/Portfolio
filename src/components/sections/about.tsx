"use client";
import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { cn } from "@/lib/utils";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa6";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "shahsarjan968@gmail.com",
    href: "mailto:shahsarjan968@gmail.com",
    icon: <FaEnvelope height={"50px"} />,
  },
  {
    name: "Phone",
    content: "6351648593",
    href: "tel:6351648593",
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

const AboutSection = () => {
  return (
    <SectionWrapper id="about" className="w-full min-h-[70vh]">
      <SectionHeader id="about" title="About Me" desc="" className="mb-8" />
      <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-foreground">
        <div className="flex flex-col lg:flex-row gap-5">
          <aside className="w-full md:basis-1/4">
            <div
              className="p-6 md:p-8 lg:p-10 rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm text-card-foreground shadow-lg dark:shadow-none"
            >
              <div className="flex flex-row lg:flex-col items-center">
                <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-muted lg:mb-5 overflow-hidden">
                  <img
                    className="w-full h-full object-cover object-top scale-110 origin-top"
                    alt="me"
                    src="/assets/me.jpg"
                  />
                </div>
                <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                  <p className="text-center text-xl">Sarjan Shah</p>
                  <div className="text-xs bg-secondary text-zinc-700 dark:text-secondary-foreground w-fit px-3 py-1 rounded-full">
                    Software Developer
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <hr className="my-10 border-border" />
                <ul className="flex flex-col gap-3">
                  {CONTACT_LINKS.map((link) => (
                    <li key={link.name}>
                      <a
                        className="flex items-center px-3 gap-3 w-full h-12 border border-border bg-card hover:border-primary/50 rounded-md transition-colors"
                        href={link.href}
                      >
                        <div className="w-8">{link.icon}</div>
                        <div className="flex flex-col">
                          <div className="text-sm">{link.name}</div>
                          <div className="text-xs text-zinc-600 dark:text-muted-foreground">
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
          <main className="basis-3/4 w-full md:w-[500px] lg:w-auto">
            <div
              className="p-6 md:p-10 border rounded-md border-border/50 bg-card/80 backdrop-blur-sm text-card-foreground shadow-lg dark:shadow-none"
            >
              <h1 className="text-2xl md:text-3xl mb-10 lg:md-20 text-center font-bold">About me</h1>
              <p className="mb-6 text-roboto text-sm md:text-base">
                I am a <strong className="text-brand">Full Stack Developer</strong> driven by the challenge of building scalable, high-performance web applications. I specialize in the <strong className="text-brand">MERN Stack</strong> and <strong className="text-brand">Next.js</strong>, using <strong className="text-brand">TypeScript</strong> to create interfaces that are not just functional, but intuitive and accessible for every user.
              </p>
              <p className="mb-6 text-roboto text-sm md:text-base">
                My expertise extends to the backend, where I engineer secure <strong className="text-brand">REST</strong> and GraphQL APIs. I leverage <strong className="text-brand">Python</strong> to seamlessly integrate <strong className="text-brand">AI/ML models</strong> into production systems, while ensuring efficient data management with PostgreSQL and MongoDB.
              </p>
              <p className="mb-10 text-roboto text-sm md:text-base">
                I believe in <strong className="text-brand">future-proof software</strong>. I implement <strong className="text-brand">CI/CD</strong> pipelines and <strong className="text-brand">Docker</strong> containerization to streamline deployment, ensuring that the solutions I deliver drive real business impact and adapt to changing needs in dynamic <strong className="text-brand">Agile</strong> environments.
              </p>
            </div>
          </main>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
