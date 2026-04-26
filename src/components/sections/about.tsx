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
                    src="/assets/IMG_3620.jpg"
                  />
                </div>
                <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                  <p className="text-center text-xl">Sarjan Shah</p>
                  <div className="text-xs bg-secondary text-zinc-700 dark:text-secondary-foreground w-fit px-3 py-1 rounded-full">
                    AI Engineer
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
                I am an <strong className="text-brand">AI Engineer</strong> building production-grade intelligent systems at the intersection of machine learning and software engineering. Currently interning at <strong className="text-brand">eInfochips – An Arrow Company</strong>, where I execute <strong className="text-brand">parameter-efficient LLM fine-tuning</strong> using QLoRA and LoRA with FP16/BF16 mixed-precision training, and implement transformer architecture internals — attention mechanisms, tokenization pipelines, and model evaluation metrics — in a real semiconductor AI environment.
              </p>
              <p className="mb-6 text-roboto text-sm md:text-base">
                Previously at <strong className="text-brand">Navneet Education Limited</strong>, I engineered a <strong className="text-brand">Speech-to-Text voice logging system</strong> on GCP that eliminated manual warehouse data entry, built an <strong className="text-brand">automated invoice OCR pipeline</strong> using GCP Vision API for structured billing data extraction, and developed an <strong className="text-brand">internal RAG chatbot</strong> via Vertex AI Search and Discovery Engine API — enabling natural-language querying over proprietary product catalogs.
              </p>
              <p className="mb-6 text-roboto text-sm md:text-base">
                My core technical stack spans <strong className="text-brand">Python, PyTorch, scikit-learn, Django, FastAPI</strong>, and <strong className="text-brand">Google Cloud Platform</strong> (Speech-to-Text, Vision API, Vertex AI). I hold a certification as an <strong className="text-brand">Oracle Cloud Infrastructure AI Foundations Associate</strong> and maintain a CGPA of 9.4 in B.E. Information Technology at Lok Jagruti University.
              </p>
              <p className="mb-10 text-roboto text-sm md:text-base">
                I architect AI systems end-to-end — from data ingestion and model fine-tuning through REST API integration and full-stack deployment — with deep focus on <strong className="text-brand">MLOps</strong>, <strong className="text-brand">NLP</strong>, anomaly detection, and <strong className="text-brand">Retrieval-Augmented Generation (RAG)</strong>.
              </p>
            </div>
          </main>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
