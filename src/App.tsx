import { Github, Linkedin, Mail, Download, ExternalLink, Code2, Cpu, Palette, Zap } from 'lucide-react';

function App() {
  const projects = [
    {
      name: "Portfolio Website",
      description: "Modern, responsive portfolio built with React and Tailwind CSS featuring smooth animations and clean design.",
      tech: ["React", "Tailwind CSS", "TypeScript"],
      demo: "#",
      github: "#"
    },
    {
      name: "Smart 3D Visualizer",
      description: "Interactive 3D visualization tool using Blender and Python for real-time data representation.",
      tech: ["Blender", "Python", "3D Design"],
      demo: "#",
      github: "#"
    },
    {
      name: "Interactive Landing Page",
      description: "Engaging landing page with dynamic animations and seamless user interactions.",
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "#",
      github: "#"
    },
    {
      name: "AI-based Design Generator",
      description: "Intelligent design system that generates creative layouts using machine learning algorithms.",
      tech: ["Python", "AI", "React"],
      demo: "#",
      github: "#",
      inProgress: true
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
    { name: "Robotics", icon: Cpu }
  ];

  const softSkills = ["Curious Thinker", "Creative Problem Solver", "Team Collaborator"];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 via-green-500 to-blue-500 bg-clip-text text-transparent">
            NS
          </h1>
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-500 transition-colors">About</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-green-500 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-red-500 transition-colors">Skills</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-500 transition-colors">Contact</button>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-12 px-6 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-2">
                  <span className="bg-gradient-to-r from-red-500 via-green-500 to-blue-500 bg-clip-text text-transparent">Nischay Sai</span>
                </h1>
                <p className="text-2xl font-semibold text-gray-700 mb-1">Full-Stack Developer & Creative Technologist</p>
                <p className="text-lg text-gray-500">Engineering Student | Bangalore</p>
              </div>

              <div className="space-y-3">
                <p className="text-gray-600 font-semibold text-sm uppercase tracking-wider">Education</p>
                <div className="bg-gradient-to-br from-red-500/5 to-blue-500/5 border-2 border-gray-200 rounded-xl p-4">
                  <p className="text-gray-900 font-semibold text-lg">Engineering Student</p>
                  <p className="text-gray-600">Currently pursuing degree in Engineering</p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-gray-600 font-semibold text-sm uppercase tracking-wider">Core Expertise</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-center">
                    <p className="font-semibold text-gray-900">Web Development</p>
                    <p className="text-sm text-gray-600">React, TypeScript, Tailwind</p>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 text-center">
                    <p className="font-semibold text-gray-900">3D & Animation</p>
                    <p className="text-sm text-gray-600">Blender, 3D Design</p>
                  </div>
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 text-center">
                    <p className="font-semibold text-gray-900">AI & Python</p>
                    <p className="text-sm text-gray-600">Machine Learning, Scripting</p>
                  </div>
                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3 text-center">
                    <p className="font-semibold text-gray-900">Robotics</p>
                    <p className="text-sm text-gray-600">Physics & Automation</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex gap-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
                >
                  View My Projects
                </button>
                <button className="px-8 py-4 bg-white border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all flex items-center gap-2">
                  <Download size={20} />
                  Resume
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-green-500 to-blue-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative aspect-square bg-gradient-to-br from-red-500/10 via-green-500/10 to-blue-500/10 rounded-3xl flex items-center justify-center border-2 border-gray-200 backdrop-blur-sm">
                  <div className="text-center">
                    <div className="w-56 h-56 bg-gradient-to-br from-red-500 via-green-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl">
                      <span className="text-8xl font-bold text-white">NS</span>
                    </div>
                    <p className="text-gray-600 font-medium text-lg">Photo Placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square bg-gradient-to-br from-red-500/10 via-green-500/10 to-blue-500/10 rounded-3xl flex items-center justify-center border-2 border-gray-200">
              <div className="text-center">
                <div className="w-48 h-48 bg-gradient-to-br from-red-500 via-green-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white">NS</span>
                </div>
                <p className="text-gray-600 font-medium">Photo Placeholder</p>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm an engineering student from Bangalore, passionate about robotics, physics, and animation.
                I love building creative websites and intelligent 3D systems using tools like VS Code, Blender, and AI.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My focus is on using technology to make ideas real—combining technical precision with creative vision
                to develop solutions that are both functional and inspiring.
              </p>
              <div className="p-6 bg-white rounded-2xl border-2 border-blue-500/20">
                <p className="text-gray-900 font-semibold flex items-center gap-2">
                  <Zap className="text-green-500" size={20} />
                  Currently seeking software and creative tech opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Featured <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border-2 border-gray-200 p-6 hover:shadow-xl transition-all hover:scale-105 group"
              >
                {project.inProgress && (
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-red-500 to-blue-500 text-white text-xs font-semibold rounded-full mb-4">
                    In Progress
                  </span>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-semibold text-center hover:shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="px-4 py-2 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Skills & <span className="bg-gradient-to-r from-red-500 to-green-500 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                const colors = ['text-red-500', 'text-green-500', 'text-blue-500'];
                const bgColors = ['bg-red-500/10', 'bg-green-500/10', 'bg-blue-500/10'];
                const borderColors = ['border-red-500/20', 'border-green-500/20', 'border-blue-500/20'];
                const colorIndex = index % 3;

                return (
                  <div
                    key={index}
                    className={`${bgColors[colorIndex]} ${borderColors[colorIndex]} border-2 rounded-2xl p-6 text-center hover:shadow-lg transition-all hover:scale-105`}
                  >
                    <Icon className={`${colors[colorIndex]} mx-auto mb-3`} size={32} />
                    <p className="font-semibold text-gray-900">{skill.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-white border-2 border-gray-200 text-gray-900 font-semibold rounded-full hover:border-blue-500 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build <span className="bg-gradient-to-r from-blue-500 via-green-500 to-red-500 bg-clip-text text-transparent">Something Together</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a
              href="https://github.com/nischaysai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all flex items-center gap-3"
            >
              <Github size={24} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/nischaysai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all flex items-center gap-3"
            >
              <Linkedin size={24} />
              LinkedIn
            </a>
            <a
              href="mailto:nischaysai@example.com"
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-green-500 text-white rounded-full font-semibold hover:shadow-lg transition-all flex items-center gap-3"
            >
              <Mail size={24} />
              Email Me
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600">
            Made with passion by <span className="font-bold bg-gradient-to-r from-red-500 via-green-500 to-blue-500 bg-clip-text text-transparent">Nischay Sai</span>
          </p>
        </div>
      </footer>

      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        <a
          href="https://github.com/nischaysai"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-gray-900 text-white rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-lg"
        >
          <Github size={24} />
        </a>
        <a
          href="https://linkedin.com/in/nischaysai"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-lg"
        >
          <Linkedin size={24} />
        </a>
      </div>
    </div>
  );
}

export default App;
