import { useEffect, useRef, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#tests", label: "Tests" },
  { href: "#career", label: "Career" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#events", label: "Events"}
];

export default function Navbar() {
  const { theme } = useTheme()
  const [open, setOpen] = useState(false);
  const [useMobileMenu, setUseMobileMenu] = useState(false);
  const navbarRowRef = useRef<HTMLDivElement>(null);
  const navbarMeasureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const measureNavbarOverflow = () => {
      const rowWidth = navbarRowRef.current?.clientWidth ?? 0;
      const neededWidth = navbarMeasureRef.current?.scrollWidth ?? 0;

      // Small buffer avoids flicker when widths are equal due to subpixel rounding.
      setUseMobileMenu(neededWidth > rowWidth - 4);
    };

    measureNavbarOverflow();

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(measureNavbarOverflow)
        : null;

    if (navbarRowRef.current) resizeObserver?.observe(navbarRowRef.current);
    if (navbarMeasureRef.current) resizeObserver?.observe(navbarMeasureRef.current);

    window.addEventListener("resize", measureNavbarOverflow);
    document.fonts?.ready.then(measureNavbarOverflow).catch(() => {});

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", measureNavbarOverflow);
    };
  }, [theme]);

  useEffect(() => {
    if (!useMobileMenu) setOpen(false);
  }, [useMobileMenu]);

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
          className={"text-gray-300 cursor-pointer text-lg p-1 px-3 border border-[rgb(0,0,0,0)] hover:text-white rounded-md navbar-element-" + theme + " text-" + theme}
          onClick={onClick}
        >
          {l.label}
        </a>
      ))}
    </>
  );

  return (
    <div className={"navbar z-20 fixed top-0 left-0 w-full bg-main border-b border-gray-700 navbar-" + theme}>
      <div
        ref={navbarRowRef}
        className="relative flex flex-row items-center justify-between p-4 px-8"
      >
        <div className="absolute invisible pointer-events-none h-0 overflow-hidden" aria-hidden="true">
          <div
            ref={navbarMeasureRef}
            className="inline-flex flex-row items-center justify-between gap-x-8"
          >
            <nav className="flex h-full flex-row items-center gap-x-10 text-white">
              <NavLinks />
            </nav>
            <a
              href="#contact"
              className="flex whitespace-nowrap flex-row items-center rounded-md border-none text-white bg-blue-500 p-2 px-6"
              tabIndex={-1}
            >
              <i className="fa-solid fa-address-card mr-3"></i>
              Contact me
            </a>
          </div>
        </div>

        {/* Left side: links (desktop) */}
        <nav className={(useMobileMenu ? "hidden" : "flex") + " h-full flex-row items-center gap-x-10 text-white"}>
          <NavLinks />
        </nav>

        {/* Right side: CTA (desktop) */}
        <a
          href="#contact"
          className={(useMobileMenu ? "hidden" : "flex") + " whitespace-nowrap flex-row items-center rounded-md border-none text-white bg-blue-500 hover:bg-blue-600 p-2 px-6 cursor-pointer"}
        >
          <i className="fa-solid fa-address-card mr-3"></i>
          Contact me
        </a>

        {/* Mobile: hamburger button */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className={(useMobileMenu ? "inline-flex" : "hidden") + " items-center justify-center p-2 rounded-lg text-gray-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"}
          onClick={() => setOpen((v) => !v)}
        >
          {/* Font Awesome Free icons */}
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"} text-2xl icon-` + theme} />
        </button>
      </div>

      {/* Mobile: backdrop + panel */}
      {/* Backdrop */}
      <div
        className={`${useMobileMenu ? "fixed" : "hidden"} inset-0 bg-black/50 nav-backdrop transition-opacity duration-200 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Panel */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        className={`${useMobileMenu ? "fixed" : "hidden"} top-0 right-0 h-screen w-[85%] max-w-[360px] bg-main border-l border-gray-800 shadow-xl
                    transition-transform duration-300 will-change-transform mobile-menu-${theme}
                    ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4 px-6 border-b border-gray-800">
          <span className={"text-white text-lg font-medium text-" + theme}>Menu</span>
          <button
            aria-label="Close menu"
            className={"p-2 rounded-lg text-gray-200 hover:text-white text-" + theme}
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
