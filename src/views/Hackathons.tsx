import { useEffect, useRef, useState } from "react"
import { useTheme } from "../contexts/ThemeContext"

type HackathonType = "HackEurope"

export default function Hackathons() {
    const { theme } = useTheme()
    const [selectedSection, setSelectedSection] = useState<HackathonType>("HackEurope")
    const preloadedImagesRef = useRef<Map<string, HTMLImageElement>>(new Map())

    useEffect(() => {
        const imageSources = [
            "/static/images/hackathons/hack-europe-1.jpg",
            "/static/images/hackathons/hack-europe-2.jpg",
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

    function getHackathonElement(name: string, section: HackathonType) {
        return (
            <div
                className={"flex w-full rounded-2xl p-4 flex-row items-center gap-4 cursor-pointer border " +
                    (selectedSection == section
                        ? "bg-third border-gray-200"
                        : "border-gray-700 hover:border-gray-500") +
                    " career-" + theme
                }
                onClick={() => setSelectedSection(section)}
            >
                <div className="w-[72px] h-[72px] rounded-xl overflow-hidden shrink-0 border border-gray-700">
                    <img
                        className="w-full h-full object-cover"
                        src="/static/images/hackathons/hack-europe-1.jpg"
                        alt="HackEurope"
                    />
                </div>

                <div className="flex flex-col min-w-0">
                    <p className={"text-xl text-gray-200 truncate title-" + theme}>{name}</p>
                    <p className={"text-gray-400 truncate text-" + theme}>Hackathon</p>
                </div>
            </div>
        )
    }

    return (
        <div id="hackathons" className="px-10 mt-20 mb-30 flex flex-col items-center">
            <p className={"text-2xl text-gray-500 mb-10 tracking-widest pt-[100px] title-" + theme}>HACKATHONS</p>
            <p className={"section-subtitle text-4xl tracking-wider title-" + theme}>HACKATHON PROJECTS</p>
            <p className={"text-lg text-gray-400 mt-5 text-" + theme}>
                So far I've only participated in one hackathon.
            </p>

            <div className="portfolio-container w-full max-w-[100%] flex flex-row mt-20 justify-center gap-15">
                <div className="flex flex-col items-center gap-y-5 w-[300px] min-w-[300px]">
                    {getHackathonElement("HackEurope", "HackEurope")}
                </div>

                <div className="portfolio-inner w-[1000px] max-w-[calc(100%-300px-60px)]">
                    {selectedSection == "HackEurope" && (
                        <div className="flex flex-col items-center">
                            <h1 className={"w-full text-4xl pb-3 mb-5 border-b border-gray-600 text-gray-200 title-" + theme}>
                                HackEurope
                            </h1>

                            <div className="w-full flex flex-row gap-x-2 pb-5 border-b border-gray-600">
                                <img
                                    className="w-[calc(50%-4px)] rounded-lg h-[400px] object-cover"
                                    src="/static/images/hackathons/hack-europe-1.jpg"
                                    alt="HackEurope project image 1"
                                />
                                <img
                                    className="w-[calc(50%-4px)] rounded-lg h-[400px] object-cover"
                                    src="/static/images/hackathons/hack-europe-2.jpg"
                                    alt="HackEurope project image 2"
                                />
                            </div>

                            <div className="flex my-5 flex-row items-center w-full flex-wrap gap-3">
                                <p className={"text-lg p-2 px-4 rounded-md bg-third text-gray-400 flex flex-row items-center element-border-" + theme}>
                                    <i className="fa-solid fa-laptop-code text-sm mr-3" />
                                    HackEurope, Stockholm
                                </p>

                                <p className={"text-lg p-2 px-4 rounded-md bg-third text-gray-400 flex flex-row items-center element-border-" + theme}>
                                    <i className="fa-solid fa-calendar text-sm mr-3" />
                                    20h, 21-22 February
                                </p>
                            </div>

                            <p className={"text-lg text-gray-400 text-" + theme}>
                                The largest hackathon in Europe, with about 1000 participants in Stockholm, Paris, and Dublin. We (team of 4 who previously didn't know each other) developed a system that, using OpenTelemetry logs from a given system,
                                analyzes these to find slow database queries. It then goes into the identified code and attempts to improve it (using Claude Code).
                                If successful, it creates a new Github branch, commits the changes, and creates a merge request to the main branch.
                            </p>

                            <p className={"mt-10 text-xl w-full text-gray-200 pb-1 border-b border-gray-600 text-" + theme}>
                                Frameworks and technologies used
                            </p>
                            <div className="mt-5 flex flex-row flex-wrap w-full gap-3">
                                <p className="text-lg p-1 px-3 text-md flex flex-row items-center rounded-md border border-blue-400 text-blue-400">
                                <i className="fa-brands fa-python fa-lg mr-3"></i>
                                Python
                            </p>
                            <p className="text-lg p-1 px-3 text-md flex flex-row items-center rounded-md border border-cyan-400 text-cyan-400">
                                <i className="fa-brands fa-react fa-lg mr-3"></i>
                                Javascript React
                            </p>
                            <p className="text-lg p-1 px-3 text-md flex flex-row items-center rounded-md border border-green-300 text-green-300">
                                <i className="fa-brands fa-python fa-lg mr-3"></i>
                                Python Django
                            </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
