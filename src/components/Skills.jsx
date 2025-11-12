import React from 'react';

const SKILLS = ['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'Git', 'Blender', 'AI', '3D Design', 'Robotics Basics'];
const SOFT = ['Curious Thinker', 'Creative Problem Solver', 'Team Collaborator'];

export default function Skills() {
  return (
    <section id="skills" className="skills container">
      <h2>Skills</h2>
      <div className="skills-grid">
        {SKILLS.map(s => <div key={s} className="skill">{s}</div>)}
      </div>

      <h3>Soft skills</h3>
      <div className="soft-grid">
        {SOFT.map(s => <div key={s} className="soft">{s}</div>)}
      </div>
    </section>
  );
}
