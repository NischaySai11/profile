import React from 'react';

const PROJECTS = [
  {
    name: 'Portfolio Website',
    desc: 'Modern React + Tailwind portfolio built to showcase work and experiments. Focused on performance and animation.',
    tech: 'React · Tailwind · Vite',
    demo: '#',
    repo: '#'
  },
  {
    name: 'Smart 3D Visualizer',
    desc: 'A Blender + Python pipeline that generates interactive visualizations from sensor data. Learned optimization for real-time scenes.',
    tech: 'Blender · Python · Three.js',
    demo: '#',
    repo: '#'
  },
  {
    name: 'Interactive Landing Page',
    desc: 'HTML/CSS/JS micro-interactions and performant animations for fast-loading marketing pages.',
    tech: 'HTML · CSS · JS',
    demo: '#',
    repo: '#'
  },
  {
    name: 'AI-based Design Generator (in progress)',
    desc: 'Experimenting with generative models to produce layout and texture suggestions for 3D assets.',
    tech: 'Python · AI · Blender',
    demo: '#',
    repo: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {PROJECTS.map(p => (
          <article key={p.name} className="card">
            <h3>{p.name}</h3>
            <p className="muted">{p.desc}</p>
            <p className="tech">{p.tech}</p>
            <div className="card-actions">
              <a className="btn small" href={p.demo} target="_blank">Live Demo</a>
              <a className="btn small ghost" href={p.repo} target="_blank">GitHub</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
