import { useEffect, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#tests", label: "Tests" },
  { href: "#career", label: "Career" },
  { href: "#portfolio", label: "Portfolio" },
];

export default function Navbar() {
  const { theme } = useTheme()
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open (nice to have)
  useEffect(() => {
    if (open) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <>
      {LINKS.map((l) => (
        <a
          key={l.href}
          href={l.href}
          className={"text-gray-300 hover:text-white cursor-pointer text-lg p-1 px-3 border border-[rgb(0,0,0,0)] hover:border-gray-400 rounded-md navbar-element-" + theme}
          onClick={onClick}
        >
          {l.label}
        </a>
      ))}
    </>
  );

  return (
    <div className={"navbar z-20 fixed top-0 left-0 w-full bg-main border-b border-gray-700 navbar-" + theme}>
      <div className="flex flex-row items-center justify-between p-4 px-8">
        {/* Left side: links (desktop) */}
        <nav className="hidden md:flex h-full flex-row items-center gap-x-10 text-white">
          <NavLinks />
        </nav>

        {/* Right side: CTA (desktop) */}
        <a
          href="#contact"
          className="hidden whitespace-nowrap md:flex flex-row items-center rounded-md 
          border-none text-white bg-blue-500 hover:bg-blue-600 p-2 px-6 cursor-pointer"
        >
          <i className="fa-solid fa-address-card mr-3"></i>
          Contact me
        </a>

        {/* Mobile: hamburger button */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          onClick={() => setOpen((v) => !v)}
        >
          {/* Font Awesome Free icons */}
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"} text-2xl icon-` + theme} />
        </button>
      </div>

      {/* Mobile: backdrop + panel */}
      {/* Backdrop */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 nav-backdrop transition-opacity duration-200 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Panel */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        className={`md:hidden fixed top-0 right-0 h-screen w-[85%] max-w-[360px] bg-main border-l border-gray-800 shadow-xl
                    transition-transform duration-300 will-change-transform
                    ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4 px-6 border-b border-gray-800">
          <span className="text-white text-lg font-medium">Menu</span>
          <button
            aria-label="Close menu"
            className="p-2 rounded-lg text-gray-200 hover:text-white"
            onClick={() => setOpen(false)}
          >
            <i className="fa-solid fa-xmark text-2xl" />
          </button>
        </div>

        <nav className="flex flex-col gap-y-3 p-4 px-6">
          <NavLinks onClick={() => setOpen(false)} />
          <a
            href="#contact"
            className="mt-4 text-white whitespace-nowrap rounded-full border-none bg-blue-500 hover:bg-blue-600 p-2 px-6 text-center"
            onClick={() => setOpen(false)}
          >
            Contact me
          </a>
        </nav>
      </div>
    </div>
  );
}
