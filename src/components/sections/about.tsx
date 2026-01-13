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
    content: "1234567890",
    href: "tel:1234567890",
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
              className="p-4 md:p-8 lg:p-10 rounded-2xl border border-border bg-card text-card-foreground"
            >
              <div className="flex flex-row lg:flex-col items-center">
                <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-muted lg:mb-5 overflow-hidden">
                  <img
                    className="w-full h-full object-cover object-top"
                    alt="me"
                    src="/assets/me.jpg"
                  />
                </div>
                <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                  <p className="text-center text-xl">Sarjan Shah</p>
                  <div className="text-xs bg-secondary text-secondary-foreground w-fit px-3 py-1 rounded-full">
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
                          <div className="text-xs text-muted-foreground">
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
              className="p-4 md:p-10 border rounded-md border-border bg-card text-card-foreground"
            >
              <h1 className="text-3xl mb-10 lg:md-20">About me</h1>
              <p className="mb-6 text-roboto">
                I specialize in building scalable web applications using the modern JavaScript stack,
                with a strong focus on <strong>React</strong>, <strong>Next.js</strong>, and <strong>Node.js</strong>.
                My expertise lies in crafting responsive, user-centric frontend interfaces that are both performant and accessible,
                leveraging strict <strong>TypeScript</strong> for robust type safety.
              </p>
              <p className="mb-6 text-roboto">
                On the backend, I design and implement secure <strong>RESTful</strong> and <strong>GraphQL APIs</strong>,
                working with both SQL (<strong>PostgreSQL</strong>) and NoSQL (<strong>MongoDB</strong>) databases.
                I focus on efficient data architecture and seamless integration between client and server systems.
              </p>
              <p className="mb-10 text-roboto">
                I prioritize writing clean, maintainable code and am currently exploring <strong>advanced architecture</strong> and <strong>Docker</strong> to broaden my capabilities.
              </p>
              <p className="mb-10 text-roboto">
                Beyond technical skills, I am passionate about understanding the business impact of software. I thrive in dynamic environments where I can collaborate with cross-functional teams to deliver solutions that truly help users. I am constantly seeking to refine my craft, staying updated with industry trends to build software that is not only functional but also future-proof.
              </p>
            </div>
          </main>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
