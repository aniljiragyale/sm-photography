'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement)?.value || 'Client';
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value || '';
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value || '';

    const mailtoLink = `mailto:smphotography5207@gmail.com?subject=${encodeURIComponent(`New enquiry from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    window.location.href = mailtoLink;
    setStatus('Your email app is opening with a pre-filled message.');
    form.reset();
  };

  return (
    <div className="page-shell">
      <div className="page-header">
        <div className="page-actions page-actions-top">
          <Link href="/" className="page-back">
            ← Back
          </Link>
        </div>
        <p className="eyebrow">Let’s talk</p>
        <h1>Contact</h1>
      </div>

      <div className="page-content contact-layout">
        <div>
          <h2>Get in Touch</h2>
          <p>Whether you are planning a wedding, personal session, or brand content, we are ready to help bring your vision to life.</p>
          <ul className="contact-details" style={{ marginTop: '1.5rem' }}>
            <li>
              <strong>Phone:</strong> <span className="nowrap">+91-95118 35507</span>
            </li>
            <li>
              <strong>Email:</strong> <a href="mailto:smphotography5207@gmail.com">smphotography5207@gmail.com</a>
            </li>
            <li>
              <strong>Location:</strong> <a href="https://maps.app.goo.gl/AwgoQrcp92duJkoT6" target="_blank" rel="noreferrer">Malgaon, Sangli-District, Maharashtra, India</a>
            </li>
          </ul>

          <div className="social-links" style={{ marginTop: '1.25rem' }}>
            <a href="https://www.linkedin.com/in/satishmolekar" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
            <a href="https://www.facebook.com/share/1FDbovcGCA" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
            <a href="https://www.instagram.com/sm_photography_official__/" target="_blank" rel="noreferrer" aria-label="Instagram">◎</a>
            <a href="https://youtube.com/@sm_photography_film" target="_blank" rel="noreferrer" aria-label="YouTube">▶</a>
            <a href="https://wa.me/9511835507" target="_blank" rel="noreferrer" aria-label="WhatsApp">✆</a>
          </div>
        </div>

        <div className="form-section">
          <h3 style={{ color: 'var(--gold)', marginBottom: '1rem' }}>Send a Message</h3>
          <form className="form-grid" onSubmit={handleSubmit}>
            <input className="field" type="text" name="name" placeholder="Your name" required />
            <input className="field" type="email" name="email" placeholder="Your email" required />
            <textarea className="form-field" name="message" placeholder="Tell us about your shoot, event, or question..." rows={5} required />
            <button type="submit" className="submit-btn">Send Message</button>
            <div className="form-status">{status}</div>
          </form>
        </div>
      </div>
    </div>
  );
}
