import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

export default function Contact() {
    const { theme } = useTheme()
    
    const [form, setForm] = useState({ email: "", subject: "", message: "" });

    return (
        <div id="contact" className="px-10 pb-20 flex flex-col items-center">
            <p className={"text-2xl text-gray-500 mb-10 tracking-widest pt-[100px] title-" + theme}>CONTACT</p>
            <p className={"text-4xl tracking-wider title-" + theme}>CONTACT ME</p>
            <p className={"text-lg text-gray-400 mt-5 text-" + theme}>
                Feel free to reach out to me at <a className={"text-blue-400 hover:underline blue-text-" + theme} href="mailto:axel.dovskog@outlook.com">axel.dovskog@outlook.com</a> or using the form below!
            </p>

            <form
                action="https://formspree.io/f/xzzvqbay"
                method="POST"
                className={"mt-10 w-full max-w-2xl rounded-2xl border border-gray-800 bg-secondary backdrop-blur p-6 shadow-lg element-border-" + theme}
            >

                {/* Email */}
                <div>
                    <label htmlFor="email" className={"block text-sm font-medium text-gray-300 text-" + theme}>
                    Email
                    </label>
                    <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={`mt-1 w-full rounded-lg border border-gray-600 focus:text-blue-400 focus:border-blue-400 bg-third px-3 py-2 text-gray-100 placeholder-gray-500 focus:outline-none element-border-` + theme}
                    placeholder="john.doe@example.com"
                    />
                    
                </div>

                {/* Subject */}
                <div className="mt-4">
                <label htmlFor="subject" className={"block text-sm font-medium text-gray-300 text-" + theme}>Subject</label>
                <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className={`mt-1 w-full rounded-lg bg-third border border-gray-600 focus:text-blue-400 focus:border-blue-400 px-3 py-2 text-gray-100 placeholder-gray-500 focus:outline-none element-border-` + theme}
                    placeholder="Regarding..."
                />
                </div>

                {/* Message */}
                <div className="mt-4">
                <label htmlFor="message" className={"block text-sm font-medium text-gray-300 text-" + theme}>
                    Message
                </label>
                <textarea
                    id="message"
                    value={form.message}
                    name="message"
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={6}
                    className={`mt-1 w-full rounded-lg bg-third border border-gray-600 focus:border-blue-400 px-3 py-2
                        text-gray-100 placeholder-gray-500 focus:outline-none min-h-[300px] resize-none element-border-` + theme}
                    placeholder="Hi! I'm reaching out regarding..."
                />
                </div>

                {/* Actions */}
                <div className="mt-6 flex items-center gap-3">
                <button
                    type="submit"
                    className="inline-flex cursor-pointer ml-auto items-center justify-center rounded-md 
                    bg-blue-600 hover:bg-blue-700 px-5 py-2 text-md text-white
                      focus:outline-none"
                >
                    <i className="fa-solid fa-paper-plane mr-3"></i>
                    Send message
                </button>
                </div>
            </form>
        </div>
    )
}