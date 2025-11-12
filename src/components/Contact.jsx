import React from 'react';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get('name') || 'No name';
    const email = form.get('email') || 'no-email';
    const message = form.get('message') || '';
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:nischay.sai@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact container">
      <h2>Let’s build something together.</h2>
      <div className="contact-grid">
        <div className="contact-links">
          <p><strong>Email:</strong> <a href="mailto:nischay.sai@example.com">nischay.sai@example.com</a></p>
          <p>
            <a className="link" href="https://github.com/" target="_blank" rel="noopener">GitHub</a> ·
            <a className="link" href="https://linkedin.com/" target="_blank" rel="noopener">LinkedIn</a>
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            <span>Name</span>
            <input name="name" required />
          </label>
          <label>
            <span>Email</span>
            <input name="email" type="email" required />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" rows="4" required></textarea>
          </label>
          <button className="btn primary" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
