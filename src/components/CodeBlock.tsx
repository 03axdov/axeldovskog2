import "highlight.js/styles/github-dark.css";
import hljs from "highlight.js";
import { useEffect, useRef } from "react";

export default function CodeBlock({ code, language = "typescript" }: { code: string; language?: string }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => { if (ref.current) hljs.highlightElement(ref.current); }, [code, language]);
  return (
    <pre className="w-full rounded-xl overflow-auto p-4">
      <code ref={ref} className={`language-${language}`}>{code}</code>
    </pre>
  );
}
