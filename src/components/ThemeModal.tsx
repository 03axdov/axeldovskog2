import { useRef, useState } from "react"
import { useTheme } from "../contexts/ThemeContext"
import "./ThemeModal.css"

export default function ThemeModal() {
    const { theme, setTheme } = useTheme()
    const [isExpanded, setIsExpanded] = useState(false)
    const triggerRef = useRef<HTMLButtonElement>(null)

    function closePicker() {
        setIsExpanded(false)
        triggerRef.current?.focus()
    }

    return (
        <div className="theme-picker" data-theme={theme} onKeyDown={(event) => {
            if (event.key === "Escape" && isExpanded) {
                event.stopPropagation()
                closePicker()
            }
        }}>
            {isExpanded && (
                <div id="theme-picker-panel" className="theme-picker-panel" role="group" aria-labelledby="theme-picker-heading">
                    <div className="theme-picker-header">
                        <h2 id="theme-picker-heading">Appearance</h2>
                        <button type="button" className="theme-picker-close" aria-label="Close theme picker" onClick={closePicker}>
                            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                                <path d="m6 6 12 12M18 6 6 18" />
                            </svg>
                        </button>
                    </div>
                    <div className="theme-picker-options">
                        {["Dark", "Light"].map((name) => (
                            <button key={name} type="button" className="theme-picker-option" aria-pressed={theme === name.toLowerCase()} onClick={() => setTheme(name.toLowerCase())}>
                                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    {name === "Dark" ? <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" /> : <>
                                        <circle cx="12" cy="12" r="4" />
                                        <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
                                    </>}
                                </svg>
                                {name}
                                <svg className="theme-picker-check" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m5 12 4 4L19 6" />
                                </svg>
                            </button>
                        ))}
                    </div>
                </div>
            )}
            <button ref={triggerRef} type="button" className="theme-picker-trigger" aria-expanded={isExpanded} aria-controls="theme-picker-panel" onClick={() => setIsExpanded((expanded) => !expanded)}>
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 3v18" />
                    <path d="M12 3a9 9 0 0 0 0 18Z" fill="currentColor" stroke="none" />
                </svg>
                Theme
            </button>
        </div>
    )
}
