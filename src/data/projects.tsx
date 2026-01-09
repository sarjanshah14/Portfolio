
import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa6";
import {
  SiChakraui,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiBootstrap,
  SiFlutter,
  SiDart,
  SiNumpy,
  SiPandas,
  SiDjango,
  SiFlask,
  SiStripe,
  SiScikitlearn,
  SiLeaflet,
  SiMysql,
  SiRedis,
  SiCelery,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap />,
  },
  flutter: {
    title: "Flutter",
    bg: "black",
    fg: "white",
    icon: <SiFlutter />,
  },
  dart: {
    title: "Dart",
    bg: "black",
    fg: "white",
    icon: <SiDart />,
  },
  html: {
    title: "HTML",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <FaJava />,
  },
  numpy: {
    title: "NumPy",
    bg: "black",
    fg: "white",
    icon: <SiNumpy />,
  },
  pandas: {
    title: "Pandas",
    bg: "black",
    fg: "white",
    icon: <SiPandas />,
  },
  seaborn: {
    title: "Seaborn",
    bg: "black",
    fg: "white",
    icon: <span style={{ fontSize: "18px", fontWeight: "bold" }}>sns</span>,
  },
  django: {
    title: "Django",
    bg: "black",
    fg: "white",
    icon: <SiDjango />,
  },
  flask: {
    title: "Flask",
    bg: "black",
    fg: "white",
    icon: <SiFlask />,
  },
  stripe: {
    title: "Stripe",
    bg: "black",
    fg: "white",
    icon: <SiStripe />,
  },
  scikitlearn: {
    title: "Scikit-learn",
    bg: "black",
    fg: "white",
    icon: <SiScikitlearn />,
  },
  leaflet: {
    title: "Leaflet",
    bg: "black",
    fg: "white",
    icon: <SiLeaflet />,
  },
  mysql: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: <SiMysql />,
  },
  redis: {
    title: "Redis",
    bg: "black",
    fg: "white",
    icon: <SiRedis />,
  },
  celery: {
    title: "Celery",
    bg: "black",
    fg: "white",
    icon: <SiCelery />,
  },
  render: {
    title: "Render",
    bg: "black",
    fg: "white",
    icon: <span style={{ fontSize: "18px", fontWeight: "bold", color: "#46E3B7" }}>Render</span>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  // ROW 1
  {
    id: "jansanket",
    category: "Disaster Response",
    title: "JanSanket",
    src: "/assets/projects-screenshots/jansanket/1.png",
    screenshots: ["1.png"], // Placeholder
    live: "https://jan-sanket.vercel.app",
    github: "https://github.com/sarjanshah14/JanSanket",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.bootstrap,
        PROJECT_SKILLS.leaflet,
      ],
      backend: [
        PROJECT_SKILLS.django,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.scikitlearn,
        PROJECT_SKILLS.postgres, // Assuming postgres or sqlite
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            JanSanket: Disaster Response Application
          </TypographyP>
          <TypographyP className="font-mono text-center mb-4">
            A comprehensive disaster response platform that enables real-time disaster reporting, shelter management, volunteer coordination, and resource allocation using machine learning predictions.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-4">
             <li className="mb-2"><strong>Disaster Management:</strong> Real-time reporting with validation, interactive maps, and support for multiple disaster types.</li>
             <li className="mb-2"><strong>Shelter Management:</strong> Directory tracking, capacity monitoring, and admin verification.</li>
             <li className="mb-2"><strong>Volunteer Coordination:</strong> Registration, role-based matching, and availability tracking.</li>
             <li className="mb-2"><strong>ML Integration:</strong> Resource prediction (food, water, medical) using Random Forest models.</li>
          </ul>

           <SlideShow
            images={[
               `${BASE_PATH}/jansanket/1.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono mb-2">
            <strong>Frontend:</strong> React 19, React Router, Bootstrap 5, Leaflet, Axios.<br/>
            <strong>Backend:</strong> Django 5, DRF, Django Channels (WebSocket), Pillow, Scikit-learn, Pandas, NumPy.
          </p>
        </div>
      );
    },
  },
  {
    id: "sensorguard",
    category: "AI/ML Platform",
    title: "SensorGuard",
    src: "/assets/projects-screenshots/sensorguard/1.png",
    screenshots: ["1.png"], // Placeholder
    live: "https://sensorcalibrationplatform-1.onrender.com/",
    github: "https://github.com/sarjanshah14/SensorCalibrationPlatform",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.django,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.scikitlearn,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
             SensorGuard - AI-Powered Sensor Calibration Platform
          </TypographyP>
           <TypographyP className="font-mono text-center mb-4">
            A comprehensive sensor monitoring and calibration platform leveraging AI/ML to predict drift, detect anomalies, and optimize calibration schedules.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-4">
            <li className="mb-2"><strong>Real-time Monitoring:</strong> Live sensor data updates every 2 seconds.</li>
            <li className="mb-2"><strong>AI Anomaly Detection:</strong> Detects Drift, Spike, Dropout, Noise, and Calibration Errors using Isolation Forest.</li>
            <li className="mb-2"><strong>Drift Prediction:</strong> Linear regression-based forecasting (5-day predictions).</li>
            <li className="mb-2"><strong>Automated Calibration:</strong> AI-driven recommendations.</li>
          </ul>

           <SlideShow
            images={[
               `${BASE_PATH}/sensorguard/1.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
           <p className="font-mono mb-2">
            <strong>Frontend:</strong> React 18, TypeScript, Tailwind CSS, shadcn/ui, Recharts.<br/>
            <strong>Backend:</strong> Django 5.2.6, DRF, JWT Auth, Scikit-learn, Pandas, NumPy.
          </p>
        </div>
      );
    },
  },
  {
    id: "letspark",
    category: "Web Application",
    title: "LetsPark",
    src: "/assets/projects-screenshots/letspark/1.png",
    screenshots: ["1.png"], // Placeholder
    live: "https://parkingspotfinder.onrender.com",
    github: "https://github.com/sarjanshah14/ParkingSpotFinder",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.stripe,
      ],
      backend: [
        PROJECT_SKILLS.django,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.postgres,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            LetsPark (PleaseLetMePark)
          </TypographyP>
          <TypographyP className="font-mono text-center mb-4">
             A full‑stack parking booking platform designed to facilitate seamless reservations of parking spaces with secure payments and SMS notifications.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

           <TypographyH3 className="my-4 mt-8">Core Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-4">
            <li className="mb-2"><strong>Booking System:</strong> Smart scheduling, state management, and real-time availability.</li>
             <li className="mb-2"><strong>Premises Management:</strong> Geospatial data, image support, and pricing.</li>
             <li className="mb-2"><strong>Payments:</strong> Secure Stripe integration with verify endpoints.</li>
             <li className="mb-2"><strong>Notifications:</strong> Twilio SMS integration for booking confirmations.</li>
          </ul>

           <SlideShow
            images={[
               `${BASE_PATH}/letspark/1.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
           <p className="font-mono mb-2">
            <strong>Backend:</strong> Django 5.2, DRF, JWT (SimpleJWT), Stripe, Twilio.<br/>
            <strong>Frontend:</strong> React, Stripe Checkout.
          </p>
        </div>
      );
    },
  },

  // ROW 2
  {
    id: "exoplanets",
    category: "AI/ML Discovery",
    title: "ExoScope",
    src: "/assets/projects-screenshots/exoplanets/1.png",
    screenshots: ["1.png"], // Placeholder
    live: "https://exoplanets-1.onrender.com/",
    github: "https://github.com/sarjanshah14/Exoplanets",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
      ],
      backend: [
         PROJECT_SKILLS.python,
         PROJECT_SKILLS.scikitlearn,
         PROJECT_SKILLS.pandas,
         PROJECT_SKILLS.numpy,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            ExoScope: AI/ML Exoplanet Discovery
          </TypographyP>
          <TypographyP className="font-mono text-center mb-4">
            Automating exoplanet identification from NASA mission data (Kepler/K2/TESS) using interpretable machine learning.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Project Overview</TypographyH3>
           <p className="font-mono mb-2">
            Built for the NASA Space Apps Challenge, ExoScope features a backend ML pipeline that cleans data and trains models, and a frontend Data Explorer for visualization.
           </p>

           <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
           <ul className="list-disc ml-6 font-mono mb-4">
             <li className="mb-2"><strong>ML Classifier:</strong> Random Forest model trained on NASA datasets.</li>
             <li className="mb-2"><strong>Data Explorer:</strong> Upload CSVs to get predictions and charts.</li>
             <li className="mb-2"><strong>Interpretability:</strong> Highlights top-6 features (koi_depth, koi_prad, etc.) driving decisions.</li>
           </ul>

           <SlideShow
            images={[
               `${BASE_PATH}/exoplanets/1.png`,
            ]}
          />

           <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
           <p className="font-mono mb-2">
            <strong>Backend:</strong> Python, Scikit-learn, Pandas, NumPy.<br/>
            <strong>Frontend:</strong> React, Chart.js (or similar for viz).
           </p>
        </div>
      );
    },
  },
  {
    id: "perfectbearing",
    category: "E-Commerce",
    title: "Perfect Bearing",
    src: "/assets/projects-screenshots/perfectbearing/1.png",
    screenshots: ["1.png"], // Placeholder
    live: "https://www.perfectbearing.co.in",
    github: "https://github.com/sarjanshah14/PerfectBearing",
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
      ],
      backend: [], // Static/JSON
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Perfect Bearing Website
          </TypographyP>
           <TypographyP className="font-mono text-center mb-4">
            A modern, responsive e-commerce catalog website for a leading industrial bearings exporter.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

           <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
           <ul className="list-disc ml-6 font-mono mb-4">
             <li className="mb-2"><strong>Dynamic Catalog:</strong> Products populated dynamically from a JSON database.</li>
             <li className="mb-2"><strong>Smart Search:</strong> Real-time autocomplete for bearing models.</li>
             <li className="mb-2"><strong>Dark/Light Mode:</strong> Fully supported theme toggling.</li>
             <li className="mb-2"><strong>Contact:</strong> EmailJS and WhatsApp integration.</li>
           </ul>

           <SlideShow
            images={[
               `${BASE_PATH}/perfectbearing/1.png`,
            ]}
          />

           <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
            <p className="font-mono mb-2">
            HTML5, CSS3, Vanilla JavaScript, JSON Database, FontAwesome, Google Analytics 4.
           </p>
        </div>
      );
    },
  },
  {
    id: "periodic-table",
    category: "Educational",
    title: "Interactive Periodic Table",
    src: "/assets/projects-screenshots/periodic-table/1.png",
    screenshots: ["1.png"], // Placeholder
    live: "https://interactive-periodic-table-omega.vercel.app/",
    github: "https://github.com/sarjanshah14/Interactive-Periodic-Table",
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.flask,
        PROJECT_SKILLS.mysql,
      ],
    },
    get content() {
      return (
        <div>
           <TypographyP className="font-mono text-2xl text-center">
            Interactive Periodic Table
          </TypographyP>
          <TypographyP className="font-mono text-center mb-4">
            A Flask-based web application displaying an interactive periodic table with detailed element info and an FAQ section.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
           <ul className="list-disc ml-6 font-mono mb-4">
             <li className="mb-2"><strong>Interactive Elements:</strong> Click to view details (atomic number, weight, etc.).</li>
             <li className="mb-2"><strong>Comparisons:</strong> Compare elements side-by-side.</li>
             <li className="mb-2"><strong>Search:</strong> Smart search by name, symbol, or number.</li>
             <li className="mb-2"><strong>FAQ Section:</strong> Database-driven FAQ system.</li>
           </ul>

           <SlideShow
            images={[
               `${BASE_PATH}/periodic-table/1.png`,
            ]}
          />

           <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
           <p className="font-mono mb-2">
            <strong>Backend:</strong> Python, Flask, MySQL.<br/>
            <strong>Frontend:</strong> HTML, CSS, JavaScript, Jinja2 Templates.
           </p>
        </div>
      );
    },
  },
];
export default projects;
