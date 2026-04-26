export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",
  VERCEL = "vercel",
  FLUTTER = "flutter",
  DART = "dart",
  BOOTSTRAP = "bootstrap",
  RENDER = "render",
  PYTHON = "python",
  JAVA = "java",
  NUMPY = "numpy",
  SEABORN = "seaborn",
  PANDAS = "pandas",
  // AI/ML
  SKLEARN = "sklearn",
  DOCKER = "docker",
  GCP = "gcp",
  FASTAPI = "fastapi",
  DJANGO = "django",
  PYTORCH = "pytorch",
  SQL = "sql",
  OCI = "oci",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "Modern JavaScript for building interactive web applications",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription:
      "Type-safe JavaScript for scalable application development",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "Semantic HTML5 markup for structured web content",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "Styling and responsive design with modern CSS",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React.js",
    shortDescription: "Component-based UI library for building user interfaces",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 6,
    name: "nextjs",
    label: "Next.js",
    shortDescription:
      "React framework for production with server-side rendering",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 7,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "Utility-first CSS framework for rapid UI development",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: 8,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript runtime for building server-side applications",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 9,
    name: "express",
    label: "Express",
    shortDescription: "Fast web application framework for Node.js",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 10,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "Open-source relational database management system",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 11,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "NoSQL database for modern application development",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.GIT]: {
    id: 12,
    name: "git",
    label: "Git",
    shortDescription: "Distributed version control system for tracking code changes",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 13,
    name: "github",
    label: "GitHub",
    shortDescription: "Code hosting platform for version control and collaboration",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.PRETTIER]: {
    id: 14,
    name: "prettier",
    label: "Prettier",
    shortDescription: "Code formatter for maintaining consistent code style",
    color: "#f7b93a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prettier/prettier-original.svg",
  },
  [SkillNames.NPM]: {
    id: 15,
    name: "npm",
    label: "NPM",
    shortDescription: "Package manager for JavaScript and Node.js",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  [SkillNames.VERCEL]: {
    id: 16,
    name: "vercel",
    label: "Vercel",
    shortDescription:
      "Deployment platform for frontend frameworks and serverless functions",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  [SkillNames.FLUTTER]: {
    id: 17,
    name: "flutter",
    label: "Flutter",
    shortDescription: "UI toolkit for building cross-platform mobile applications",
    color: "#02569B",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  [SkillNames.DART]: {
    id: 18,
    name: "dart",
    label: "Dart",
    shortDescription: "Programming language optimized for building mobile and web apps",
    color: "#0175C2",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  },
  [SkillNames.BOOTSTRAP]: {
    id: 19,
    name: "bootstrap",
    label: "Bootstrap",
    shortDescription: "CSS framework for responsive web design",
    color: "#7952B3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  [SkillNames.RENDER]: {
    id: 20,
    name: "render",
    label: "Render",
    shortDescription: "Cloud platform for deploying web applications and APIs",
    color: "#46E3B7",
    icon: "https://render.com/images/brand/render-logo-light.png",
  },
  [SkillNames.PYTHON]: {
    id: 21,
    name: "python",
    label: "Python",
    shortDescription: "High-level programming language for AI, ML, and web development",
    color: "#3776AB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.JAVA]: {
    id: 22,
    name: "java",
    label: "Java",
    shortDescription: "Object-oriented programming language for enterprise applications",
    color: "#ED8B00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  [SkillNames.NUMPY]: {
    id: 23,
    name: "numpy",
    label: "NumPy",
    shortDescription: "Python library for numerical computing and array operations",
    color: "#013243",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
  [SkillNames.SEABORN]: {
    id: 24,
    name: "seaborn",
    label: "Seaborn",
    shortDescription: "Python data visualization library built on matplotlib",
    color: "#3776AB",
    icon: "https://seaborn.pydata.org/_static/logo-wide-lightbg.svg",
  },
  [SkillNames.PANDAS]: {
    id: 25,
    name: "pandas",
    label: "Pandas",
    shortDescription: "Python library for data manipulation and analysis",
    color: "#150458",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  [SkillNames.SKLEARN]: {
    id: 26,
    name: "sklearn",
    label: "scikit-learn",
    shortDescription:
      "Machine learning library for Python — classification, regression, clustering, and model evaluation",
    color: "#F7931E",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
  },
  [SkillNames.DOCKER]: {
    id: 27,
    name: "docker",
    label: "Docker",
    shortDescription: "Containerization platform for consistent application deployment",
    color: "#2496ED",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.GCP]: {
    id: 28,
    name: "gcp",
    label: "Google Cloud",
    shortDescription:
      "Google Cloud Platform — Speech-to-Text, Vision API, Vertex AI, Cloud Storage",
    color: "#4285F4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  [SkillNames.FASTAPI]: {
    id: 29,
    name: "fastapi",
    label: "FastAPI",
    shortDescription: "High-performance async Python web framework for building REST APIs",
    color: "#009688",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  [SkillNames.DJANGO]: {
    id: 30,
    name: "django",
    label: "Django",
    shortDescription: "Batteries-included Python web framework with ORM and REST support",
    color: "#092E20",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
  [SkillNames.PYTORCH]: {
    id: 31,
    name: "pytorch",
    label: "PyTorch",
    shortDescription:
      "Deep learning framework for model training with FP16/BF16 mixed-precision support",
    color: "#EE4C2C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
  [SkillNames.SQL]: {
    id: 32,
    name: "sql",
    label: "SQL",
    shortDescription: "Structured Query Language for relational database management",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.OCI]: {
    id: 33,
    name: "oci",
    label: "Oracle Cloud",
    shortDescription:
      "Oracle Cloud Infrastructure — certified AI Foundations Associate (Sep. 2025)",
    color: "#F80000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  location: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Apr 2026",
    endDate: "Present",
    title: "AI Engineer Intern",
    company: "eInfochips – An Arrow Company",
    location: "Ahmedabad, Gujarat",
    description: [
      "Executing parameter-efficient LLM fine-tuning using QLoRA and LoRA with FP16/BF16 mixed-precision training to adapt large language models on domain-specific semiconductor datasets.",
      "Implementing transformer architecture internals — attention mechanisms, tokenization pipelines, and model evaluation metrics — within a production-grade semiconductor AI environment.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.PYTORCH,
      SkillNames.GIT,
      SkillNames.GITHUB,
      SkillNames.GCP,
    ],
  },
  {
    id: 2,
    startDate: "Oct 2025",
    endDate: "Mar 2026",
    title: "Software Developer Intern",
    company: "Navneet Education Limited",
    location: "Ahmedabad, Gujarat",
    description: [
      "Engineered a Speech-to-Text voice logging system on GCP, converting spoken product codes and quantities into structured inventory records — eliminating manual data entry for warehouse teams.",
      "Built an automated invoice OCR pipeline using GCP Vision API, extracting and structuring billing data from physical documents for finance operations.",
      "Developed an internal RAG chatbot using Vertex AI Search and Discovery Engine API, enabling natural language querying over proprietary product catalogs and internal documentation.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.GCP,
      SkillNames.DJANGO,
      SkillNames.PANDAS,
      SkillNames.NUMPY,
      SkillNames.GIT,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
