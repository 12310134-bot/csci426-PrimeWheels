
import { useState } from 'react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:mohammadnoamani194@gmail.com?subject=Dealer Contact from ${encodeURIComponent(email)}&body=${encodeURIComponent(message)}`;
    setSent(true);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <div className="container py-5" style={{maxWidth:500}}>
      <h2 className="mb-4">Contact Dealer</h2>
      <form onSubmit={handleSubmit} className="bg-dark p-4 rounded shadow">
        <div className="mb-3">
          <label className="form-label" htmlFor="email">Your Email</label>
          <input type="email" className="form-control" id="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="you@email.com" />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">Message</label>
          <textarea className="form-control" id="message" required rows={5} value={message} onChange={e => setMessage(e.target.value)} placeholder="Type your message here..." />
        </div>
        <button type="submit" className="btn btn-primary w-100">Send Message</button>
        {sent && <div className="alert alert-success mt-3">Message sent! Please check your email client.</div>}
      </form>
    </div>
  );
}
