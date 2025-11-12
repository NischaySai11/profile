import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Code2,
  Cpu,
  Palette,
  Zap,
  Moon,
  Sun,
} from "lucide-react";
import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const projects = [
    {
      name: "Portfolio Website",
      description:
        "Modern, responsive portfolio built with React and Tailwind CSS featuring smooth animations and clean design.",
      tech: ["React", "Tailwind CSS", "TypeScript"],
      demo: "#",
      github: "#",
    },
    {
      name: "Smart 3D Visualizer",
      description:
        "Interactive 3D visualization tool using Blender and Python for real-time data representation.",
      tech: ["Blender", "Python", "3D Design"],
      demo: "#",
      github: "#",
    },
    {
      name: "Interactive Landing Page",
      description:
        "Engaging landing page with dynamic animations and seamless user interactions.",
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "#",
      github: "#",
    },
    {
      name: "AI-based Design Generator",
      description:
        "Intelligent design system that generates creative layouts using machine learning algorithms.",
      tech: ["Python", "AI", "React"],
      demo: "#",
      github: "#",
      inProgress: true,
    },
  ];

  const skills = [
    { name: "HTML", icon: Code2 },
    { name: "CSS", icon: Palette },
    { name: "JavaScript", icon: Code2 },
    { name: "React", icon: Code2 },
    { name: "Python", icon: Code2 },
    { name: "Git", icon: Code2 },
    { name: "Blender", icon: Palette },
    { name: "AI", icon: Cpu },
    { name: "3D Design", icon: Palette },
    { name: "Robotics", icon: Cpu },
  ];

  const softSkills = ["Curious Thinker", "Creative Problem Solver", "Team Collaborator"];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      {/* HEADER */}
      <header
        className={`fixed top-0 w-full z-50 backdrop-blur-md border-b ${
          darkMode ? "bg-gray-900/80 border-gray-700" : "bg-white/80 border-gray-100"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
            Nischay Sai
          </h1>
          <div className="flex gap-6 items-center">
            {["about", "projects", "skills", "contact"].map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`capitalize hover:text-blue-500 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {id}
              </button>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full border transition-all ${
                darkMode
                  ? "bg-gray-800 border-gray-600 hover:bg-gray-700"
                  : "bg-gray-100 border-gray-200 hover:bg-gray-200"
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="pt-32 pb-12 px-6 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="space-y-10 max-w-4xl mx-auto">
            {/* INTRO */}
            <div>
              <h1 className="text-6xl md:text-7xl font-bold mb-2">
                <span className="bg-gradient-to-r from-red-500 via-green-500 to-blue-500 bg-clip-text text-transparent">
                  Nischay Sai
                </span>
              </h1>
              <p className="text-2xl font-semibold mb-1">
                Full-Stack Developer | AI-ML Engineer | 3D Designer
              </p>
              <p className="text-lg opacity-80">Engineering Student | Bangalore</p>
            </div>

            {/* EDUCATION */}
            <div>
              <p className="text-gray-500 dark:text-gray-400 font-semibold text-sm uppercase tracking-wider">
                Education
              </p>
              <div
                className={`rounded-xl p-4 border-2 ${
                  darkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-gradient-to-br from-red-500/5 to-blue-500/5 border-gray-200"
                }`}
              >
                <p className="font-semibold text-lg">B.E - Information Science and Engineering (2023 - 27)</p>
                <p className="font-semibold text-lg">CGPA - 9.2</p>
                <p className="opacity-80">Currently pursuing degree in RNS Institute of Technology, Bangalore</p>
              </div>
            </div>

            {/* CORE EXPERTISE */}
            <div>
              <p className="text-gray-500 dark:text-gray-400 font-semibold text-sm uppercase tracking-wider">
                Core Expertise
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
                {[
                  {
                    color: "red",
                    title: "Web Development",
                    desc: "React, TypeScript, Tailwind",
                  },
                  {
                    color: "green",
                    title: "3D & Animation",
                    desc: "Blender, 3D Design",
                  },
                  {
                    color: "blue",
                    title: "AI & Python",
                    desc: "Machine Learning, Scripting",
                  },
                  {
                    color: "purple",
                    title: "Robotics",
                    desc: "Physics & Automation",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`rounded-lg p-3 text-center border ${
                      darkMode
                        ? `bg-${item.color}-500/10 border-${item.color}-500/20`
                        : `bg-${item.color}-500/10 border-${item.color}-500/20`
                    }`}
                  >
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm opacity-80">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* BUTTONS */}
            <div className="pt-4 flex gap-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
              >
                View My Projects
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold">
            About <span className="text-blue-500">Me</span>
          </h2>
          <p className="text-lg opacity-90">
            I’m an engineering student from Bangalore with a strong interest in 
            <span className="font-semibold text-blue-500"> software development</span>, 
            <span className="font-semibold text-blue-500"> problem-solving</span>, and 
            building scalable digital solutions. I enjoy exploring how technology can 
            simplify real-world problems through logical and efficient code.
          </p>

          <p className="text-lg opacity-90">
            My expertise spans 
            <span className="font-semibold text-green-500"> web development</span>, 
            <span className="font-semibold text-green-500"> AI fundamentals</span>, and 
            <span className="font-semibold text-green-500"> software design principles</span>. 
            I’m comfortable working across different stages of the development cycle — from 
            planning and architecture to coding, testing, and deployment.
          </p>

          <p className="text-lg opacity-90">
          I’m passionate about building reliable software, <span className="font-semibold text-blue-500">learning new technologies quickly</span>, and <span className="font-semibold text-blue-500">collaborating</span> with teams to turn ideas into impactful products.
          </p>

          <div
            className={`p-5 rounded-2xl border inline-block ${
              darkMode ? "bg-gray-800 border-blue-900" : "bg-gray-50 border-blue-100"
            }`}
          >
            <Zap className="inline text-green-500 mr-2" size={20} />
            <span className="font-semibold">
              Currently seeking software and tech opportunities.
            </span>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className={`py-20 px-6 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Featured{" "}
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <div
                key={i}
                className={`rounded-2xl border-2 p-6 transition-all hover:shadow-lg hover:scale-[1.02] ${
                  darkMode
                    ? "bg-gray-900 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                {p.inProgress && (
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-red-500 to-blue-500 text-white text-xs font-semibold rounded-full mb-4">
                    In Progress
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-3">{p.name}</h3>
                <p className="opacity-80 mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t, j) => (
                    <span
                      key={j}
                      className={`px-3 py-1 text-sm rounded-full border ${
                        darkMode
                          ? "bg-gray-800 border-gray-700"
                          : "bg-gray-100 border-gray-200"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={p.demo}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-semibold text-center flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                  <a
                    href={p.github}
                    className="px-4 py-2 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 flex items-center justify-center gap-2"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">
            My Skills &{" "}
            <span className="bg-gradient-to-r from-red-500 to-green-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            {skills.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className={`p-6 rounded-2xl border-2 hover:shadow-lg transition-all hover:scale-105 ${
                    darkMode
                      ? "bg-gray-900 border-gray-700"
                      : "bg-gray-50 border-gray-200"
                  }`}
                >
                  <Icon
                    className={`mx-auto mb-3 ${
                      darkMode ? "text-blue-400" : "text-blue-500"
                    }`}
                    size={32}
                  />
                  <p className="font-semibold">{s.name}</p>
                </div>
              );
            })}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((s, i) => (
              <span
                key={i}
                className={`px-6 py-3 border-2 font-semibold rounded-full ${
                  darkMode
                    ? "bg-gray-900 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className={`py-20 px-6 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let’s Build{" "}
            <span className="bg-gradient-to-r from-blue-500 via-green-500 to-red-500 bg-clip-text text-transparent">
              Something Together
            </span>
          </h2>
          <p className="text-xl opacity-80 mb-12">
            I’m always open to discussing new projects, creative ideas, or
            opportunities to bring innovation to life.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://github.com/NischaySai35"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 flex items-center gap-3"
            >
              <Github size={24} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/nischaysai35"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 flex items-center gap-3"
            >
              <Linkedin size={24} />
              LinkedIn
            </a>
            <a
              href="mailto:nischaysai35@gmail.com"
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-green-500 text-white rounded-full font-semibold flex items-center gap-3"
            >
              <Mail size={24} />
              Email Me
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className={`py-8 px-6 text-center border-t ${
          darkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
        }`}
      >
        <p className="opacity-80">
          Made with passion by{" "}
          <span className="font-bold bg-gradient-to-r from-red-500 via-green-500 to-blue-500 bg-clip-text text-transparent">
            Nischay Sai
          </span>
        </p>
      </footer>
    </div>
  );
}

export default App;
