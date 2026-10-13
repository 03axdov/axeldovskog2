import { useTheme } from "../contexts/ThemeContext"
import "./Landing.css"

export default function Landing() {
    const { theme } = useTheme()

    return (
        <section className={`landing-hero landing-hero--${theme}`} aria-labelledby="landing-heading">
            <img className="landing-landscape" src="/static/images/bigsky.avif" alt="" fetchPriority="high" aria-hidden="true" />
            <div className="landing-shade" aria-hidden="true" />

            <div className="landing-content">
                <div className="landing-intro">
                    <img className="landing-portrait" src="/static/images/axeldovskog.png" alt="Axel Dovskog" width="72" height="72" />
                    <p className="landing-eyebrow">Welcome to my personal website</p>
                </div>

                <h1 id="landing-heading" className={`landing-name title-${theme}`}>
                    Axel<br />
                    <span>Dovskog<span className="landing-period">.</span></span>
                </h1>

                <p className="landing-description">
                    I'm 22 and studying Computer Science at Lund University,
                    with completed studies in International Business.
                </p>

            </div>

            <div className="landing-footer">
                <p>Computer Science (mainly) <span aria-hidden="true">/</span> International Business</p>
                <a className="landing-scroll" href="#recommendations">
                    Scroll down
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14m-6-6 6 6 6-6" />
                    </svg>
                </a>
            </div>
        </section>
    )
}
