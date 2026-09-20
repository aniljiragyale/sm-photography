'use client';

import { FormEvent, useState } from 'react';

export function EnquiryForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = (form.elements.namedItem('user_name') as HTMLInputElement)?.value || 'Client';
    const email = (form.elements.namedItem('user_email') as HTMLInputElement)?.value || '';
    const phone = (form.elements.namedItem('user_phone') as HTMLInputElement)?.value || '';
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value || '';

    const mailtoLink = `mailto:smphotography5207@gmail.com?subject=${encodeURIComponent(`Enquiry from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
    setStatus('Your email app is opening with your enquiry.');
    form.reset();
  };

  return (
    <div className="enquiry-form-shell">
      <form className="form-grid" onSubmit={handleSubmit}>
        <input className="field" type="text" name="user_name" placeholder="Your Full Name" required />
        <input className="field" type="email" name="user_email" placeholder="Your Email Address" required />
        <input className="field" type="tel" name="user_phone" placeholder="Your Phone Number" required />
        <textarea className="form-field" name="message" placeholder="Your Message..." rows={5} required />
        <button type="submit" className="submit-btn">Send Enquiry</button>
        <div className="form-status">{status}</div>
      </form>
    </div>
  );
}
