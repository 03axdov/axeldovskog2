import { useEffect, useRef, useState } from "react"
import { useTheme } from "../contexts/ThemeContext"
import PDFModal from "../components/PDFModal"
import "./Education.css"

type SectionTypes = "ntu" | "lth" | "lusem"

const completedPrograms: Partial<Record<SectionTypes, string>> = {
    lusem: "Bachelor of International Business",
    ntu: "Exchange Student",
}

const universityPages: Record<SectionTypes, {
    name: string
    images: [string, string, string]
    description: string
    qsRank: string
    rankingCountry: string
    gpa?: number
    gpaMax?: number
}> = {
    lth: {
        name: "Lund University (LTH)",
        qsRank: "71st",
        rankingCountry: "Sweden",
        images: ["lu.jpg", "lu2.jpg", "lth.jpg"],
        description: "At LTH I've spent 3 years studying different topics within computer science. See my transcript below for a detailed course list (LTH courses are the ones graded 1-5).",
        gpa: 4.35,
        gpaMax: 5,
    },
    lusem: {
        name: "Lund University (LUSEM)",
        qsRank: "71st",
        rankingCountry: "Sweden",
        images: ["lund2.webp", "lund3.webp", "lusem.jpg"],
        description: "I completed my Bachelor of International Business at LUSEM in June 2026, studying business, economics, and management. See my transcript below for a detailed course list (LUSEM courses are the ones graded A-F).",
        gpa: 4.3,
        gpaMax: 5,
    },
    ntu: {
        name: "National Taiwan University",
        qsRank: "54th",
        rankingCountry: "Taiwan",
        images: ["ntu.jpeg", "taipei.jpeg", "ntu2.jpg"],
        description: "I completed my exchange semester at National Taiwan University in December 2025, mainly taking classes on machine learning, general Chinese, and designing virtual experiences. GPA: A",
    },
}

const transcripts = {
    lund: {
        title: "Lund University transcript",
        src: "/static/images/education/transcript.pdf",
    },
    ntu: {
        title: "NTU transcript",
        src: "/static/images/education/transcript-taiwan.pdf",
    },
}

export default function Education() {
    const { theme } = useTheme()

    const [selectedTranscript, setSelectedTranscript] = useState<keyof typeof transcripts | null>(null)
    const [selectedSection, setSelectedSection] = useState<SectionTypes>("lth")
    const educationPanelsRef = useRef<HTMLDivElement>(null)
    const studyExplanationRef = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        // Warm the actual panel images, including photos added to the page data.
        // Keeping these elements mounted avoids recreating them on every switch.
        educationPanelsRef.current?.querySelectorAll("img").forEach((image) => {
            image.decode?.().catch(() => {
                // A failed image should not interrupt navigation.
            })
        })
    }, [])

    function getUniversityElement(
        logoFilename: string, 
        title: string, 
        universityName: string,
        time: string,
        selectedVal: SectionTypes
    ) {
        return (
            <div className={"university group/university w-full flex flex-row items-center border border-[rgb(0,0,0,0)] cursor-pointer university-" + theme +
            " rounded-lg p-4 transition-colors duration-200 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 " + (selectedSection == selectedVal ? "bg-third university-selected university-selected-" + theme : "")}
            role="button"
            tabIndex={0}
            aria-pressed={selectedSection === selectedVal}
            onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault()
                    setSelectedSection(selectedVal)
                }
            }}
            onClick={() => setSelectedSection(selectedVal)}
            >
                <img className="w-[50px] mr-5" src={"/static/images/education/" + logoFilename}/>
                <div className="flex flex-col max-w-[calc(100%-50px-20px)]">
                    <p className="whitespace-nowrap max-w-[100%] career-element-larger text-xl">{title}</p>
                    <p className={"whitespace-nowrap max-w-[100%] career-element-large text-lg text-gray-300 text-" + theme}>{universityName}</p>
                    <div className="flex min-h-6 items-center gap-2">
                        <p className={"min-w-0 whitespace-nowrap max-w-[100%] career-element-mid text-md text-gray-400 text-" + theme}>{time}</p>
                        {completedPrograms[selectedVal] && (
                            <span className={"group/completion relative inline-flex size-5 shrink-0 items-center justify-center rounded-full text-xs " + (theme === "light" ? "bg-green-100 text-green-800" : "bg-green-400/20 text-green-300")}>
                                <i className="fa-solid fa-check" aria-hidden="true"></i>
                                <span className="sr-only">Complete</span>
                                <span
                                    aria-hidden="true"
                                    className={"pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 hidden -translate-x-1/2 whitespace-nowrap rounded-md px-2 py-1 text-xs group-hover/completion:block group-focus-visible/university:block " + (theme === "light" ? "bg-green-100 text-green-800" : "bg-green-900 text-green-100")}
                                >
                                    Complete
                                </span>
                            </span>
                        )}
                    </div>
                </div>
            </div>
        )
    }


    function getUniversityPage(section: SectionTypes) {
        const { name, images: [filename1, filename2, filename3], description, qsRank, rankingCountry, gpa, gpaMax } = universityPages[section]
        const fetchPriority = section === "lth" ? "auto" : "low"

        return (
            <div className="flex flex-grow max-w-[1000px] flex-col items-center">
                <div className="education-gallery relative flex flex-row h-[450px] w-full gap-x-3">
                    <p className={"text-white university-name absolute top-3 left-3 text-2xl p-2 px-4 bg-[rgb(0,0,0,0.7)] rounded-md"}>{name}</p>
                    <img className="w-[60%] shrink-0 bg-third h-[100%] object-cover rounded-md" src={"/static/images/education/" + filename1} alt={name + " campus"} loading="eager" decoding="async" fetchPriority={fetchPriority}/>
                    <div className="flex min-w-0 flex-col gap-y-3 flex-1">
                        <img className="w-full h-[calc(50%-6px)] object-cover bg-third rounded-md" src={"/static/images/education/" + filename2} alt={name + " campus, second view"} loading="eager" decoding="async" fetchPriority={fetchPriority}/>
                        <img className="w-full h-[calc(50%-6px)] object-cover bg-third rounded-md" src={"/static/images/education/" + filename3} alt={name + " campus, third view"} loading="eager" decoding="async" fetchPriority={fetchPriority}/>
                    </div>
                </div>
                <div className="mt-5 flex w-full flex-wrap items-center gap-3">
                    <p className={"inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-full border px-4 py-2 text-sm font-normal " + (theme === "light" ? "border-amber-300 bg-amber-50 text-amber-900" : "border-amber-400/30 bg-amber-400/10 text-amber-200")}>
                        <i className="fa-solid fa-trophy" aria-hidden="true"></i>
                        <span>QS World University Rankings</span>
                        <span>{qsRank} in the world</span>
                        <span aria-hidden="true">&middot;</span>
                        <span>Highest ranked in {rankingCountry}</span>
                    </p>
                    {completedPrograms[section] && (
                        <p className={"inline-flex max-w-full shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-normal " + (theme === "light" ? "border-green-300 bg-green-50 text-green-900" : "border-green-400/30 bg-green-400/10 text-green-200")}>
                            <i className="fa-solid fa-check" aria-hidden="true"></i>
                            Completed
                        </p>
                    )}
                </div>
                <p className={"w-full mt-5 text-gray-300 text-lg text-" + theme}>
                    {description}
                </p>

                <div className="mt-5 w-full">
                    <p className={"text-gray-400 w-full text-start text-" + theme}>Rough GPA</p>
                    <div className="mt-3 flex flex-row items-center w-full">
                        <div className={"h-[10px] rounded-full flex-grow bg-gray-700 overflow-hidden bar-" + theme}>
                            <div className={"h-full " + (name == "Lund University (LTH)" ? "blue-gradient" : "purple-gradient") + " rounded-full"} style={{
                                width: (gpa && gpaMax ? Math.round((100 * (gpa / gpaMax))) + "%": "0")
                            }}></div>
                        </div>
                        {gpa && gpaMax && <p className="m-0 ml-3 text-lg">{gpa} <span className={"text-gray-400 text-" + theme}>out of {gpaMax}</span></p>}
                        {!gpa && !gpaMax && <p className="m-0 ml-3 text-lg">Non numerical grade scale.</p>}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div id="education" data-theme={theme} className="education-section content-section px-10 flex flex-col items-center">
            <p className={"text-2xl text-gray-500 mb-10 tracking-widest pt-[100px] title-" + theme}>EDUCATION</p>
            <p className={"section-subtitle text-4xl tracking-wider title-" + theme}>MY EDUCATION</p>
            <p className={"text-lg text-gray-400 mt-5 text-" + theme}>
                I'm studying for a Master of Computer Science at Lund University, Sweden, and have completed my Bachelor of International Business.<br></br>
                I also completed an exchange semester at National Taiwan University during the fall of 2025.
            </p>
            <button
                type="button"
                aria-haspopup="dialog"
                aria-controls="study-explanation"
                className="study-explanation-trigger mt-5 flex items-center justify-center gap-2 text-center"
                onClick={() => studyExplanationRef.current?.showModal()}
            >
                <i className="fa-regular fa-circle-question" aria-hidden="true"></i>
                Why study 2 full-time programs
            </button>
            <dialog
                ref={studyExplanationRef}
                id="study-explanation"
                aria-labelledby="study-explanation-title"
                className="study-explanation"
                onClick={(event) => {
                    if (event.target === event.currentTarget) studyExplanationRef.current?.close()
                }}
            >
                <div className="p-6 sm:p-8" onClick={(event) => event.stopPropagation()}>
                    <p className="study-explanation-eyebrow">STUDYING BOTH</p>
                    <h2 id="study-explanation-title" className={"mt-3 text-2xl tracking-wide title-" + theme}>
                        Why study 2 full-time programs?
                    </h2>
                    <div className="study-explanation-copy mt-6 space-y-4">
                        <p className="study-explanation-priority">
                            Computer Science is my main priority and the field I want to focus on.
                        </p>
                        <p>
                            Part of my motivation for taking on two full-time programs was to challenge myself,
                            work hard, and see what I could achieve with a demanding workload.
                        </p>
                        <p>
                            I also felt that what I learned in International Business would carry over well to
                            Computer Science work: working in teams, collaborating with stakeholders, and
                            understanding the business needs behind technical decisions.
                        </p>
                    </div>
                    <div className="mt-6 flex justify-end">
                        <button
                            type="button"
                            autoFocus
                            className="study-explanation-close"
                            onClick={() => studyExplanationRef.current?.close()}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </dialog>

            <div className="education-container flex flex-row justify-center w-full mt-20 gap-10">
                <div className="universities grid auto-rows-fr self-start w-[420px] min-w-[420px]">
                    {getUniversityElement("lthLogo.jpg", "Master of Computer Science", "Lund University", "August 2022 - June 2027", "lth")}
                    {getUniversityElement("lu.png", "Bachelor of International Business", "Lund University", "August 2023 - June 2026", "lusem")}
                    {getUniversityElement("ntu.png", "Exchange Student", "National Taiwan University", "August 2025 - December 2025", "ntu")}
                </div>

                <div ref={educationPanelsRef} className="education-panels flex-grow w-full max-w-[1000px] min-w-0">
                    {(Object.keys(universityPages) as SectionTypes[]).map((section) => (
                        <div
                            key={section}
                            className={"education-panel" + (selectedSection === section ? " education-panel-active" : "")}
                            role="region"
                            aria-label={universityPages[section].name}
                            aria-hidden={selectedSection !== section}
                            inert={selectedSection !== section}
                        >
                            {getUniversityPage(section)}
                            {section == "lth" && (
                                <section
                                    aria-labelledby="lth-thesis-title"
                                    className={"mt-8 w-full max-w-[1000px] rounded-xl border border-gray-700 bg-secondary p-5 sm:p-6 element-border-" + theme}
                                >
                                    <div className="flex items-center gap-4">
                                        <img
                                            src="/static/images/career/neo4j.svg"
                                            alt="Neo4j logo"
                                            className={"size-16 shrink-0 rounded-lg bg-third career-image-" + theme}
                                        />
                                        <div className="min-w-0">
                                            <h3 id="lth-thesis-title" className={"text-xl title-" + theme}>
                                                Master's thesis at Neo4j
                                            </h3>
                                            <p className={"mt-1 text-gray-400 text-" + theme}>
                                                January 2027 - June 2027
                                            </p>
                                        </div>
                                    </div>
                                    <p className={"mt-4 text-lg text-gray-300 text-" + theme}>
                                        I will be writing my master's thesis for Neo4j, with a focus on
                                        eagerness analysis for the Cypher compiler.
                                    </p>
                                    <p className={"mt-3 text-sm text-gray-400 text-" + theme}>
                                        My Computer Science program is an integrated master's, so I did not
                                        write a separate bachelor's thesis as part of it.
                                    </p>
                                </section>
                            )}

                            {section == "lusem" && (
                                <section
                                    aria-labelledby="lusem-thesis-title"
                                    className={"mt-8 w-full max-w-[1000px] rounded-xl border border-gray-700 bg-secondary p-5 sm:p-6 element-border-" + theme}
                                >
                                    <div className="flex items-center gap-4">
                                        <img
                                            src="/static/images/education/lu.png"
                                            alt="Lund University logo"
                                            className="size-16 shrink-0 object-contain"
                                        />
                                        <div className="min-w-0">
                                            <h3 id="lusem-thesis-title" className={"text-xl title-" + theme}>
                                                Bachelor's thesis at LUSEM
                                            </h3>
                                            <p className={"mt-1 text-gray-400 text-" + theme}>
                                                International Business - Completed
                                            </p>
                                        </div>
                                    </div>
                                    <p className={"mt-4 text-lg text-gray-300 text-" + theme}>
                                        I wrote my bachelor's thesis on how financial development impacts
                                        capital structure across different industries.
                                    </p>
                                    <a
                                        href="https://lup.lub.lu.se/student-papers/search/publication/9244421"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={"mt-4 inline-flex items-center gap-2 rounded-sm text-blue-400 underline underline-offset-4 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 blue-text-" + theme}
                                    >
                                        Read thesis
                                        <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                                        <span className="sr-only">(opens in a new tab)</span>
                                    </a>
                                </section>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-15 flex flex-wrap justify-center gap-4">
                {Object.entries(transcripts).map(([key, transcript]) => (
                    <button
                        key={key}
                        type="button"
                        aria-haspopup="dialog"
                        className={"flex flex-row items-center cursor-pointer text-xl p-2 px-4 rounded-md border border-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 element-border-" + theme}
                        onClick={() => setSelectedTranscript(key as keyof typeof transcripts)}
                    >
                        <i className="fa-solid fa-file-pdf mr-3 text-blue-400" aria-hidden="true"></i>
                        {transcript.title}
                    </button>
                ))}
            </div>
            <PDFModal
                open={selectedTranscript !== null}
                onClose={() => setSelectedTranscript(null)}
                title={selectedTranscript ? transcripts[selectedTranscript].title : undefined}
                src={selectedTranscript ? transcripts[selectedTranscript].src : undefined}
            />
            <p className={"text-sm mt-2 text-center text-gray-400 text-" + theme}>
                If the preview only shows one page on mobile, use Open PDF to view the full transcript.
                <br></br><br></br>
                Note that my Lund University transcript includes grades from both programs I studied,
                <br></br>
                with International Business courses being graded with letters and Computer Science courses
                with 1 to 5 or G.
            </p>
        </div>
    )
}
