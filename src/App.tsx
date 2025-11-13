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

  const microbotYoutube = "https://youtu.be/v6UweSmTuP4?si=u_YvyVWAY1ePaHSl";      // replace with your video link
  const microbotThumb = "./src/robo.jpg";             // replace with your thumbnail path

  // compute a reliable embed URL for YouTube (supports watch?v= and youtu.be links)
  const microbotYoutubeEmbed = microbotYoutube
    ? microbotYoutube.includes("watch?v=")
      ? microbotYoutube.replace("watch?v=", "embed/").split("?")[0]
      : microbotYoutube.includes("youtu.be/")
      ? microbotYoutube.replace("youtu.be/", "www.youtube.com/embed/").split("?")[0]
      : microbotYoutube
    : null;

  const projects = [
    {
      name: "NASA Hackathon Project",
      description:
        "A space-innovation project built for the NASA Space Apps Hackathon focusing on real-time data visualization, intelligent analysis, and futuristic problem solving for aerospace challenges.",
      tech: ["React", "API Integration", "Data Visualization", "AI"],
      demo: "https://earthvision.onrender.com/",
      github: "https://github.com/NischaySai35/EarthVision",
      gif: "./src/nasa.gif"
    },
    {
      name: "3D_Education",
      description:
        "Interactive 3D learning platform with hover-highlighting, AI explanations, and smooth WebGL-based model navigation for engineering and science education.",
      tech: ["Three.js", "Node.js", "WebGL", "AI"],
      demo: "https://youtu.be/2AcunbzejxY?si=F1A8DF7CyVEMb_bh",
      github: "https://github.com/NischaySai35/3D_Education",
      gif: "./src/brain.gif"
    },
    {
      name: "BazaarConnect",
      description:
        "Supplier–Vendor connection platform with AI assistance, product listings, negotiation tools, real-time communication, and role-based dashboards.",
      tech: ["React", "Node.js", "Tailwind", "AI"],
      demo: "https://bazaarconnect.vercel.app/",
      github: "https://github.com/NischaySai35/bazaarconnect_website",
      gif: "./src/bazaar.jpg"
    },
    {
      name: "AutoMind AI",
      description:
        "Automotive intelligence and diagnostics platform with sensor analytics, next-service automation, vehicle health monitoring, predictive repair suggestions, and manufacturing insights.",
      tech: ["Next.js", "AI/ML", "Sensor Analytics", "Node.js"],
      demo: "#",
      github: "https://github.com/NischaySai35/automind_ai",
      gif: "./src/car.gif"
    },
    {
      name: "Decentralised Farmers App",
      description:
        "Blockchain-based farming solution that helps farmers trade crops, access verified data, manage yields, automate payments, and maintain transparent records without middlemen.",
      tech: ["Web3", "React", "Solidity", "Smart Contracts"],
      demo: "https://dappswarm.netlify.app/",
      github: "https://github.com/NischaySai35/decentralised-app",
      gif: "./src/farmers.jpg"
    }
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

  const expertiseItems = [
    {
      color: "blue",
      title: "Software Development",
      desc: "React, TypeScript, Python, Node.js",
      bgClass: "bg-blue-500/10",
      borderClass: "border-blue-500/20",
    },
    {
      color: "green",
      title: "Problem Solving",
      desc: "Data Structures, Algorithms, Debugging",
      bgClass: "bg-green-500/10",
      borderClass: "border-green-500/20",
    },
    {
      color: "red",
      title: "System Design & Databases",
      desc: "APIs, REST, MySQL, MongoDB",
      bgClass: "bg-red-500/10",
      borderClass: "border-red-500/20",
    },
    {
      color: "purple",
      title: "Collaboration & Tools",
      desc: "Git, Agile, VS Code, Cloud Basics",
      bgClass: "bg-purple-500/10",
      borderClass: "border-purple-500/20",
    },
  ];

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
      <section className="pt-24 pb-12 px-6 min-h-screen flex items-center">
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
                {expertiseItems.map((item, i) => (
                  <div
                    key={i}
                    className={`rounded-lg p-3 text-center border ${
                      darkMode ? "bg-gray-800 border-gray-700" : `${item.bgClass} ${item.borderClass}`
                    }`}
                  >
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm opacity-80">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* BUTTONS (added Resume button) */}
            <div className="pt-4 flex gap-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
              >
                View My Projects
              </button>

              <a
                href="./src/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                <Download size={18} />
                View Resume
              </a>
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

                <h3 className="text-2xl font-bold mb-3">{p.name}</h3>
                {p.gif && (
                  <img src={p.gif} className="rounded-lg mb-4 w-full h-auto" />
                )}
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
                    href={p.github}
                    className="flex-1 px-4 py-2 bg-gray-900 text-white rounded-lg font-semibold flex items-center justify-center gap-2"
                  >
                    <Github size={16} />
                    GitHub
                  </a>

                  {p.demo && p.name !== "AutoMind AI" && (
                    <a
                      href={p.demo}
                      className="px-3 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-semibold flex items-center gap-2"
                    >
                      <ExternalLink size={14} />
                      Demo
                    </a>
                  )}
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

    {/* TECHNICAL SKILLS */}
    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
      {[
        { name: "HTML", icon: Code2 },
        { name: "CSS", icon: Palette },
        { name: "JavaScript", icon: Code2 },
        { name: "React.js", icon: Code2 },
        { name: "Node.js", icon: Code2 },
        { name: "Python", icon: Code2 },
        { name: "AI & ML Concepts", icon: Cpu },
        { name: "Database (MySQL, MongoDB)", icon: Cpu },
        { name: "Version Control (Git)", icon: Code2 },
        { name: "API Integration", icon: Cpu },
      ].map((skill, index) => {
        const Icon = skill.icon;
        return (
          <div
            key={index}
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
            <p className="font-semibold">{skill.name}</p>
          </div>
        );
      })}
    </div>

    {/* SOFT SKILLS */}
    <div className="flex flex-wrap justify-center gap-4">
      {[
        "Problem Solving",
        "Adaptability",
        "Team Collaboration",
        "Analytical Thinking",
        "Quick Learning",
        "Time Management",
        "Communication Skills",
      ].map((s, i) => (
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

{/* HOBBIES, INTERESTS & MICROBOT STARTUP */}
<section id="hobbies" className={`py-20 px-6 ${darkMode ? "bg-gray-900" : "bg-white"}`}>
  <div className="max-w-7xl mx-auto">
    {/* section heading (outside the card, centered and styled) */}
    <h2 className="text-4xl font-bold text-center mb-8">Hobbies & <span className="text-blue-500">Interests</span></h2>

    {/* HOBBIES / INTERESTS card */}
    <div className={`rounded-2xl p-8 mb-12 border-2 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200"}`}>
      <p className="mb-6 text-lg opacity-90">
        Robotics • 3D Design & Animation • Physical Prototyping • AI-driven systems • Embedded systems • Product design
      </p>

      <div className="flex flex-wrap gap-3">
        {["Robotics", "3D Modeling", "microcontrollers", "AI/ML", "Electronics", "Prototype Design"].map((hobby, idx) => (
          <span
            key={idx}
            className={`px-4 py-2 rounded-full font-medium border ${
              darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
            }`}
          >
            {hobby}
          </span>
        ))}
      </div>
    </div>

    {/* MICROBOT DEEP DIVE CARD (reduced content) */}
    <div className={`rounded-2xl p-6 border-2 transition-all hover:shadow-lg ${darkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"}`}>
      <div className="md:flex md:items-start md:gap-6">
        {/* make video/thumbnail larger on md+ screens */}
        <div className="md:w-1/2 mb-4 md:mb-0">
          {/* Embedded player (falls back to clickable thumbnail if embed URL missing) */}
          {microbotYoutubeEmbed ? (
            <div className="w-full rounded-lg overflow-hidden">
              <iframe
                src={microbotYoutubeEmbed}
                title="Microbot Demo"
                className="w-full aspect-video rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <a href={microbotYoutube || "https://youtu.be/REPLACE_ME"} target="_blank" rel="noopener noreferrer" className="block rounded-lg overflow-hidden">
              <img src={microbotThumb || "./src/microbot_thumb.jpg"} alt="Microbot demo" className="w-full h-auto rounded-lg" />
            </a>
          )}
        </div>

        <div className="md:flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-bold">Microbots — Formation & Hardware</h3>
              <p className="text-sm opacity-80 mt-1">Prototype • Robotics • Real-world demo</p>
            </div>
            <div className="text-center">
              <span className="inline-flex items-center justify-center px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-yellow-400 to-red-500 text-gray-900">
                Startup — Raising Funds
              </span>
            </div>
          </div>

          <p className="mt-4 opacity-90">
            A compact hardware + software prototype demonstrating modular micro-robot orientation, basic formation control, and data logging for debugging and iteration.
          </p>

          <ul className="mt-4 list-disc pl-5 space-y-2 text-sm opacity-90">
            <li><strong>Mechanical:</strong> Compact module design with 3D orientation via two-motor arrangement.</li>
            <li><strong>Control:</strong> Formation algorithms and leader-follower basics for coordinated movement.</li>
            <li><strong>Sensors:</strong> IMU and proximity for closed-loop orientation and docking reliability.</li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={microbotYoutube || "https://youtu.be/REPLACE_ME"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-semibold flex items-center gap-2"
            >
              Watch Demo
              <ExternalLink size={14} />
            </a>

            <a
              href="mailto:nischaysai35@gmail.com?subject=Microbot%20Startup%20Inquiry"
              className="px-5 py-2 border rounded-lg font-semibold"
            >
              Contact for Funding
            </a>
          </div>
        </div>
      </div>
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
