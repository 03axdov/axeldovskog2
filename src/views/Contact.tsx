import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import "./Contact.css";

export default function Contact() {
    const { theme } = useTheme();
    const [form, setForm] = useState({ email: "", subject: "", message: "" });

    return (
        <section id="contact" className="contact-section" data-theme={theme} aria-labelledby="contact-heading">
            <img className="contact-landscape" src="/static/images/bigsky.avif" alt="" aria-hidden="true" loading="lazy" />
            <div className="contact-shade" aria-hidden="true" />

            <div className="contact-layout">
                <div className="contact-intro">
                    <p className="contact-eyebrow">Contact</p>
                    <h2 id="contact-heading" className={`contact-heading title-${theme}`}>Let's get<br />in touch.</h2>
                    <p className="contact-description">
                        Feel free to reach out by email or leave a message using the form.
                    </p>
                    <a className="contact-email" href="mailto:axel.dovskog@outlook.com">
                        axel.dovskog@outlook.com
                        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 17 17 7M7 7h10v10" />
                        </svg>
                    </a>
                </div>

                <form action="https://formspree.io/f/xzzvqbay" method="POST" className="contact-form" aria-label="Send Axel a message">
                    <div className="contact-field-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="contact-field"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div className="contact-field-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                            id="subject"
                            type="text"
                            name="subject"
                            value={form.subject}
                            onChange={(e) => setForm({ ...form, subject: e.target.value })}
                            className="contact-field"
                            placeholder="What would you like to talk about?"
                        />
                    </div>
                    <div className="contact-field-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            rows={6}
                            className="contact-field"
                            placeholder="Hi Axel, ..."
                        />
                    </div>
                    <div className="contact-actions">
                        <button type="submit" className="contact-submit">
                            Send message
                            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m22 2-7 20-4-9-9-4Z M22 2 11 13" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
