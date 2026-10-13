import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { useTheme } from "../contexts/ThemeContext"
import DetailTag from "../components/DetailTag"

type EventType = "HackEurope" | "SEE"

export default function Events() {
    const { theme } = useTheme()
    const reduceMotion = useReducedMotion()
    const [selectedSection, setSelectedSection] = useState<EventType>("HackEurope")
    const preloadedImagesRef = useRef<Map<string, HTMLImageElement>>(new Map())
    const eventPreviewImages: Record<EventType, string> = {
        HackEurope: "/static/images/events/hackeurope.png",
        SEE: "/static/images/events/JaneStreetLogo.png",
    }

    useEffect(() => {
        const imageSources = [
            "/static/images/events/hack-europe-1.jpg",
            "/static/images/events/hack-europe-2.jpg",
            "/static/images/events/JaneStreetLogo.png",
            "/static/images/events/London.jpg",
        ]

        imageSources.forEach((src) => {
            if (preloadedImagesRef.current.has(src)) return

            const img = new Image()
            img.decoding = "async"
            img.loading = "eager"
            img.src = src
            preloadedImagesRef.current.set(src, img)
            img.decode?.().catch(() => {})
        })
    }, [])

    function getEventElement(name: string, section: EventType, eventType: string) {
        return (
            <div
                className={"flex w-full rounded-2xl p-4 flex-row items-center gap-6 cursor-pointer transition-colors duration-200 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 " +
                    (selectedSection == section
                        ? "bg-third career-selected-" + theme
                        : "") +
                    " career-" + theme
                }
                role="button"
                tabIndex={0}
                aria-pressed={selectedSection === section}
                onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault()
                        setSelectedSection(section)
                    }
                }}
                onClick={() => setSelectedSection(section)}
            >
                <div className="w-[72px] h-[72px] rounded-xl overflow-hidden shrink-0 bg-white">
                    <img
                        className="w-full h-full object-cover"
                        src={eventPreviewImages[section]}
                        alt={name}
                    />
                </div>

                <div className="flex flex-col min-w-0">
                    <p className={"text-xl text-gray-200 truncate title-" + theme}>{name}</p>
                    <p className={"text-gray-400 truncate text-" + theme}>{eventType}</p>
                </div>
            </div>
        )
    }

    return (
        <div id="events" data-theme={theme} className="content-section detail-tags-section px-10 mt-20 mb-30 flex flex-col items-center">
            <p className={"text-2xl text-gray-500 mb-10 tracking-widest pt-[100px] title-" + theme}>EVENTS</p>
            <p className={"section-subtitle text-4xl tracking-wider title-" + theme}>EVENTS ATTENDED</p>
            <p className={"text-lg text-gray-400 mt-5 text-" + theme}>
                Here are some career-related events I've attended.
            </p>

            <div className="portfolio-container w-full max-w-[100%] flex flex-row mt-20 justify-center gap-15">
                <div className="flex flex-col items-center gap-y-5 w-[300px] min-w-[300px]">
                    {getEventElement("HackEurope", "HackEurope", "Hackathon")}
                    {getEventElement("Jane Street SEE", "SEE", "Event")}
                </div>

                <div className="portfolio-inner w-[1000px] max-w-[calc(100%-300px-60px)]">
                    <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={selectedSection}
                        initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 10 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.22, ease: "easeOut" } }}
                        exit={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : -6, transition: { duration: reduceMotion ? 0 : 0.12 } }}
                    >
                    {selectedSection == "HackEurope" && (
                        <div className="flex flex-col items-center">
                            <h1 className={"w-full text-4xl pb-3 mb-5 border-b border-gray-600 text-gray-200 title-" + theme}>
                                HackEurope
                            </h1>

                            <div className="w-full flex flex-row gap-x-2 pb-5 border-b border-gray-600">
                                <img
                                    className="w-[calc(50%-4px)] rounded-lg h-[400px] object-cover"
                                    src="/static/images/events/hack-europe-1.jpg"
                                    alt="HackEurope project image 1"
                                />
                                <img
                                    className="w-[calc(50%-4px)] rounded-lg h-[400px] object-cover"
                                    src="/static/images/events/hack-europe-2.jpg"
                                    alt="HackEurope project image 2"
                                />
                            </div>

                            <div className="flex my-5 flex-row items-center w-full flex-wrap gap-3">
                                <DetailTag icon="fa-solid fa-laptop-code">HackEurope, Stockholm</DetailTag>

                                <DetailTag icon="fa-solid fa-calendar">20h, 21-22 February</DetailTag>
                            </div>

                            <p className={"text-lg text-gray-400 text-" + theme}>
                                The largest hackathon in Europe (I believe?), with about 1000 participants in Stockholm, Paris, and Dublin. 
                                We (team of 4 who previously didn't know each other) developed an application that, using OpenTelemetry logs from a given system,
                                analyzes these to find slow database queries. It then goes into the identified code and attempts to improve it (using Claude Code).
                                If successful, it creates a new Github branch, commits the changes, and creates a merge request to the main branch.
                            </p>

                            <p className={"mt-10 text-xl w-full text-gray-200 pb-1 border-b border-gray-600 text-" + theme}>
                                Frameworks and technologies used
                            </p>
                            <div className="mt-5 flex flex-row flex-wrap w-full gap-3">
                                <DetailTag icon="fa-brands fa-python" tone="blue">Python</DetailTag>
                                <DetailTag icon="fa-brands fa-react" tone="cyan">Javascript React</DetailTag>
                                <DetailTag icon="fa-brands fa-python" tone="green">Python Django</DetailTag>
                            </div>
                        </div>
                    )}

                    {selectedSection == "SEE" && (
                        <div className="flex flex-col items-center">
                            <h1 className={"w-full text-4xl pb-3 mb-5 border-b border-gray-600 text-gray-200 title-" + theme}>
                                Jane Street SEE Program
                            </h1>

                            <div className="w-full flex flex-row gap-x-2 pb-5 border-b border-gray-600">
                                <img
                                    className="w-full rounded-lg h-[400px] object-cover"
                                    src="/static/images/events/London.jpg"
                                    alt="London"
                                />
                            </div>

                            <div className="flex my-5 flex-row items-center w-full flex-wrap gap-3">
                                <DetailTag icon="fa-solid fa-building-columns">Jane Street, London</DetailTag>

                                <DetailTag icon="fa-solid fa-calendar">24-28 March, 2026</DetailTag>
                            </div>

                            <p className={"text-lg text-gray-400 text-" + theme}>
                                Participated in Jane Street SEE Program (Software Engineering track). 
                                Got an introduction to Jane Street's Software Engineering operations, as well as some software aspects of quantititative trading in general.
                            </p>
                        </div>
                    )}
                    </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}
