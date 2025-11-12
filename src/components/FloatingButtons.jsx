import React from 'react';

export default function FloatingButtons() {
  return (
    <div className="floating" aria-hidden>
      <a className="float-btn github" href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GH</a>
      <a className="float-btn linkedin" href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
    </div>
  );
}
