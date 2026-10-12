import { useEffect, useRef, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import "./Navbar.css";

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
  const [collapsed, setCollapsed] = useState(false);
  const [useMobileMenu, setUseMobileMenu] = useState(false);
  const navbarRowRef = useRef<HTMLDivElement>(null);
  const navbarMeasureRef = useRef<HTMLDivElement>(null);
  const contactClassName = "group/contact nav-contact items-center justify-center gap-2.5 whitespace-nowrap";
  const contactContent = (
    <>
      <i aria-hidden="true" className="fa-regular fa-envelope" />
      <span>Contact me</span>
      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover/contact:translate-x-0.5 group-focus-visible/contact:translate-x-0.5 motion-reduce:transition-none motion-reduce:transform-none">
        <path d="M5 12h14m-6-6 6 6-6 6" />
      </svg>
    </>
  );

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
          className="nav-link"
          onClick={onClick}
        >
          {l.label}
        </a>
      ))}
    </>
  );

  return (
    <div className="portfolio-navigation z-20 fixed top-0 left-0 w-full" data-theme={theme}>
      <div
        className={"nav-shell relative transition-transform duration-300 ease-in-out motion-reduce:transition-none" + (collapsed ? " -translate-y-full" : " translate-y-0")}
      >
      <div
        id="navbar-content"
        ref={navbarRowRef}
        inert={collapsed}
        aria-hidden={collapsed}
        className="relative flex flex-row items-center justify-between gap-6 p-4 px-6 sm:px-8"
      >
        <div className="absolute invisible pointer-events-none h-0 overflow-hidden" aria-hidden="true">
          <div
            ref={navbarMeasureRef}
            className="inline-flex flex-row items-center justify-between gap-x-6"
          >
            <nav className="flex h-full flex-row items-center gap-2">
              <NavLinks />
            </nav>
            <a
              href="#contact"
              className={"flex " + contactClassName}
              tabIndex={-1}
            >
              {contactContent}
            </a>
          </div>
        </div>

        {/* Left side: links (desktop) */}
        <nav className={(useMobileMenu ? "hidden" : "flex") + " h-full flex-row items-center gap-2"}>
          <NavLinks />
        </nav>

        {/* Right side: CTA (desktop) */}
        <a
          href="#contact"
          className={(useMobileMenu ? "hidden " : "flex ") + contactClassName}
        >
          {contactContent}
        </a>

        {/* Mobile: hamburger button */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className={(useMobileMenu ? "inline-flex" : "hidden") + " nav-control items-center justify-center"}
          onClick={() => setOpen((v) => !v)}
        >
          {/* Font Awesome Free icons */}
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"} text-2xl icon-` + theme} />
        </button>
      </div>
      <button
        type="button"
        aria-label={collapsed ? "Show navigation" : "Hide navigation"}
        aria-expanded={!collapsed}
        aria-controls="navbar-content"
        title={collapsed ? "Show navigation" : "Hide navigation"}
        className="nav-control nav-toggle absolute top-full right-6 mt-2 flex items-center justify-center gap-2"
        onClick={() => {
          setOpen(false);
          setCollapsed((value) => !value);
        }}
      >
        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d={collapsed ? "m6 9 6 6 6-6" : "m6 15 6-6 6 6"} />
        </svg>
        <span>{collapsed ? "Show menu" : "Hide menu"}</span>
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
          <span className={"text-white text-lg font-normal text-" + theme}>Menu</span>
          <button
            aria-label="Close menu"
            className="nav-control inline-flex items-center justify-center"
            onClick={() => setOpen(false)}
          >
            <i className="fa-solid fa-xmark text-2xl" />
          </button>
        </div>

        <nav className="flex flex-col gap-y-3 p-4 px-6">
          <NavLinks onClick={() => setOpen(false)} />
          <a
            href="#contact"
            className={"mt-4 flex " + contactClassName}
            onClick={() => setOpen(false)}
          >
            {contactContent}
          </a>
        </nav>
      </div>
    </div>
  );
}
