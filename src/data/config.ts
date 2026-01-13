const config = {
  title: "Sarjan Shah | Software Developer",
  description: {
    long: "Portfolio of Sarjan Shah, a software developer specializing in building modern web applications and innovative software solutions. Explore my projects and experience in software development.",
    short:
      "Portfolio of Sarjan Shah, a software developer creating modern web applications and software solutions.",
  },
  keywords: [
    "Sarjan Shah",
    "portfolio",
    "software developer",
    "web development",
    "software engineering",
    "programming",
    "React",
    "Next.js",
    "web applications",
    "full-stack development",
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
