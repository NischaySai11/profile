import React from 'react';

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-content">
        <h1>
          Hi, I’m Nischay Sai — a developer who blends physics, AI, and design to build meaningful digital experiences.
        </h1>
        <p className="tagline">Turning imagination into interactive reality.</p>

        <div className="hero-ctas">
          <a className="btn primary" href="#projects">View My Work</a>
          <a className="btn ghost" href="/resume.pdf" download>Download Resume</a>
        </div>

        <ul className="hero-meta">
          <li>Engineering Student — Bangalore</li>
          <li>Web Dev • 3D Animation • AI-driven Design</li>
        </ul>
      </div>

      <div className="hero-art">
        <div className="art-card">
          <img src="/profile.jpg" alt="Nischay — profile" className="profile-photo" />
          <div className="art-badge">Currently seeking software and creative tech opportunities.</div>
        </div>
      </div>
    </section>
  );
}
