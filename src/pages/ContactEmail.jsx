// Contact.jsx - Updated with EmailJS Integration

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import contact from '../assets/contect5.gif';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // 🔥 REPLACE THESE WITH YOUR EMAILJS CREDENTIALS
    const serviceId = 'YOUR_SERVICE_ID';
    const templateId = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setSubmitStatus('success');
          setIsSubmitting(false);
          form.current.reset();
          setTimeout(() => setSubmitStatus(null), 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSubmitStatus('error');
          setIsSubmitting(false);
          setTimeout(() => setSubmitStatus(null), 5000);
        }
      );
  };

  return (
    <section className="bg-gray-900 text-white min-h-screen py-10 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <span className="text-xs font-bold tracking-widest uppercase text-purple-400 bg-purple-900/30 px-4 py-1.5 rounded-full border border-purple-700">
            Get In Touch
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold mt-4">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Me</span>
          </h1>
          <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded mt-3" />
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left Side - Contact Info */}
          <div className="w-full md:w-1/2 space-y-5">
            <img src={contact} alt="Contact" className="w-full rounded-2xl border border-purple-900" />

            <div className="bg-gray-800 rounded-2xl p-5 border border-purple-900">
              <h2 className="text-lg font-bold text-purple-400 mb-4">Reach Out!</h2>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                I usually respond within an hour. Thank you and I am looking forward to hearing from you.
              </p>
              <div className="space-y-3">
                {[
                  { icon: '📧', label: 'Email', val: 'ankushgupta0510@gmail.com' },
                  { icon: '📱', label: 'Phone', val: '+91-7225011473' },
                  { icon: '📍', label: 'Location', val: 'Gandhi Nagar, Bhopal, M.P. — 462036' },
                  { icon: '💼', label: 'LinkedIn', val: 'linkedin.com/in/ankush-gupta-b734b025b' },
                  { icon: '🐙', label: 'GitHub', val: 'github.com/ankushgupta05' },
                  { icon: '🌐', label: 'Portfolio', val: 'ankushgupta-portfolio.vercel.app' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="text-lg flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-xs text-gray-500">{item.label}</p>
                      <p className="text-sm text-white font-medium break-all">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full md:w-1/2">
            <div className="bg-gray-800 rounded-2xl p-6 border border-purple-900">
              <h2 className="text-lg font-bold text-white mb-5">Send a Message</h2>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="mb-4 p-3 bg-green-900/30 border border-green-700 rounded-lg text-green-300 text-sm">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-4 p-3 bg-red-900/30 border border-red-700 rounded-lg text-red-300 text-sm">
                  ❌ Failed to send message. Please try again or email directly.
                </div>
              )}

              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wide">Name *</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wide">Email *</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="example@mail.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wide">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="What's this about?"
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wide">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-3 rounded-xl transition shadow-lg shadow-purple-900/40 text-sm ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending... ⏳' : 'Send Message 🚀'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
```

---

## 📧 **EmailJS Template Setup:**

Dashboard → Email Templates → Create Template mein ye add karein:
```
Subject: New Contact Form Message from {{subject}}

From: {{user_name}}
Email: {{user_email}}

Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio website contact form.