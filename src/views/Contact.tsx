import { useState } from "react";

const TO_EMAIL = "axel.dovskog@outlook.com";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [errors, setErrors] = useState<{[k: string]: string}>({});

    const validate = () => {
        const e: {[k: string]: string} = {};
        if (!form.name.trim()) e.name = "Please enter your name.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid email.";
        if (form.message.trim().length < 10) e.message = "Please write at least 10 characters.";
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const onSubmit = (ev: React.FormEvent) => {
        ev.preventDefault();
        if (!validate()) return;

        // Build the mailto URL
        const subject = encodeURIComponent(form.subject);
        const bodyLines = [
        form.message.trim(),
        "",
        `— ${form.name} <${form.email}>`,
        ];
        const body = encodeURIComponent(bodyLines.join("\n"));

        const mailto = `mailto:${encodeURIComponent(TO_EMAIL)}?subject=${subject}&body=${body}`;
        // Navigate to mailto to open the default mail app
        window.location.href = mailto;
    };

    return (
        <div className="px-10 mt-50 mb-50 flex flex-col items-center">
            <p className="text-2xl text-gray-500 mb-10 tracking-widest">CONTACT</p>
            <p className="text-4xl tracking-wider">CONTACT ME</p>
            <p className="text-lg text-gray-400 mt-5">
                Feel free to reach out to me at <a className="text-blue-400" href="mailto:axel.dovskog@outlook.com">axel.dovskog@outlook.com</a> or using the form below!
            </p>

            <form
                onSubmit={onSubmit}
                className="mt-10 w-full max-w-2xl rounded-2xl border border-gray-800/60 bg-gray-900/40 backdrop-blur p-6 shadow-lg"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Name
                    </label>
                    <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`mt-1 w-full rounded-lg border bg-gray-900/70 px-3 py-2 text-gray-100 placeholder-gray-500 focus:outline-none ${
                        errors.name ? "border-red-400" : "border-gray-800"
                    }`}
                    placeholder="John Doe"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-400">{errors.name}</p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                    </label>
                    <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={`mt-1 w-full rounded-lg border bg-gray-900/70 px-3 py-2 text-gray-100 placeholder-gray-500 focus:outline-none ${
                        errors.email ? "border-red-400" : "border-gray-800"
                    }`}
                    placeholder="john.doe@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-400">{errors.email}</p>
                    )}
                </div>
                </div>

                {/* Subject */}
                <div className="mt-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300">Subject</label>
                <input
                    id="subject"
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className={`mt-1 w-full rounded-lg border bg-gray-900/70 px-3 py-2 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/70 ${errors.subject ? "border-red-600" : "border-gray-800"}`}
                    placeholder="Regarding..."
                />
                {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div className="mt-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Message
                </label>
                <textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={6}
                    className={`mt-1 w-full rounded-lg border bg-gray-900/70 px-3 py-2 text-gray-100 placeholder-gray-500 focus:outline-none ${
                    errors.message ? "border-red-400" : "border-gray-800"
                    }`}
                    placeholder="Hi! I’m reaching out regarding..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
                </div>

                {/* Actions */}
                <div className="mt-6 flex items-center gap-3">
                <button
                    type="submit"
                    className="inline-flex cursor-pointer ml-auto items-center justify-center rounded-md 
                    bg-indigo-600 px-5 py-2 text-sm text-white
                     hover:bg-indigo-500 focus:outline-none"
                >
                    Send message
                </button>
                </div>
            </form>
        </div>
    )
}