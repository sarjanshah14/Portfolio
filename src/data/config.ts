const config = {
  title: "Sarjan Shah | AI Engineer",
  description: {
    long: "Portfolio of Sarjan Shah, an AI Engineer specializing in LLM fine-tuning (QLoRA/LoRA), Retrieval-Augmented Generation (RAG), MLOps, and production AI systems on Google Cloud Platform. Explore real AI projects, work experience, and technical achievements.",
    short:
      "Portfolio of Sarjan Shah — AI Engineer focused on LLM fine-tuning, RAG systems, and production AI on GCP.",
  },
  keywords: [
    "Sarjan Shah",
    "AI Engineer",
    "portfolio",
    "LLM fine-tuning",
    "QLoRA",
    "LoRA",
    "RAG",
    "Retrieval-Augmented Generation",
    "MLOps",
    "NLP",
    "Google Cloud Platform",
    "Vertex AI",
    "PyTorch",
    "scikit-learn",
    "anomaly detection",
    "eInfochips",
    "machine learning",
    "transformer architecture",
  ],
  author: "Sarjan Shah",
  email: "shahsarjan968@gmail.com",
  site: "https://sarjanshah.site",

  // for github stars button
  githubUsername: "sarjanshah14",
  githubRepo: "sarjanshah14",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/SarjanShah3",
    linkedin: "https://www.linkedin.com/in/sarjan-shah-3324a334b/",
    instagram: "https://www.instagram.com/sarjan_1403?igsh=bGVzaTU5YXdjaXkz&utm_source=qr",
    facebook: "",
    github: "https://github.com/sarjanshah14",
  },
};
export { config };
