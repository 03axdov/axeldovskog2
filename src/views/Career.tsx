import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { useTheme } from "../contexts/ThemeContext"
import DetailTag from "../components/DetailTag"

type WorkType = "Neo4j" | "Arm1" | "Arm2" | "Palantir" | "Paraglide AI"

export default function Career() {
    const { theme } = useTheme()
    const reduceMotion = useReducedMotion()

    const [selectedSection, setSelectedSection] = useState<WorkType>("Palantir")
    const detailKey = selectedSection === "Arm1" || selectedSection === "Arm2" ? "Arm" : selectedSection
    const preloadedImagesRef = useRef<Map<string, HTMLImageElement>>(new Map())

    useEffect(() => {
        const imageSources = [
            "/static/images/career/neo4j.svg",
            "/static/images/career/arm.png",
            "/static/images/career/armChip.jpg",
            "/static/images/career/arm2.webp",
            "/static/images/career/graph.jpg",
            "/static/images/career/Palantir.jpg",
            "/static/images/career/Marketplace.png",
            theme == "dark"
                ? "/static/images/career/palantir.svg"
                : "/static/images/career/palantir-light.svg",
            "/static/images/career/paraglide.webp",
            "/static/images/career/paraglide-banner.png",
        ]

        imageSources.forEach((src) => {
            if (preloadedImagesRef.current.has(src)) return

            const img = new Image()
            img.decoding = "async"
            img.loading = "eager"
            img.src = src

            // Keep a strong reference so the preload request isn't dropped.
            preloadedImagesRef.current.set(src, img)

            // Ask the browser to decode early when supported.
            img.decode?.().catch(() => {
                // Ignore decode errors for unsupported formats/browsers.
            })
        })
    }, [theme])

    function getWorkElement(
        name: string, filename: string, status: "part" | "full",
        duration: string, position: string, section: WorkType, imageFull: boolean
    ) {
        return (
            <div className={"work-element flex rounded-2xl w-full p-4 flex-row items-center cursor-pointer transition-colors duration-200 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 career-" + theme + " " +
                (selectedSection == section ? "bg-third career-selected-" + theme : "")
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
            onClick={() => setSelectedSection(section)}>
                {imageFull && <img className={"career-element-image w-[100px] rounded-lg mr-5 career-image-" + theme} src={"/static/images/career/" + filename}/>}
                {!imageFull && <img className={"career-element-image w-[100px] p-[20px] rounded-lg mr-5"} src={"/static/images/career/" + filename}/>}
                
                <div className="career-element-texts flex flex-col max-w-[calc(100%-100px-20px)]">
                    <p className="whitespace-nowrap max-w-[100%] career-element-larger text-xl">{name}</p>
                    <p className={"whitespace-nowrap max-w-[100%] career-element-large text-lg text-gray-300 text-gray-" + theme}>{position}</p>
                    <p className={"whitespace-nowrap max-w-[100%] career-element-mid text-md text-gray-400 text-gray-" + theme}>{duration}</p>
                    <p className={"whitespace-nowrap max-w-[100%] career-element-mid text-md text-gray-400 text-gray-" + theme}>{status == "part" ? "Part-time" : "Full-time"}</p>
                </div>
            </div>
        )
    }

    return (
        <div id="career" data-theme={theme} className="content-section detail-tags-section px-10 mt-20 mb-50 flex flex-col items-center">
            <p className={"text-2xl text-gray-500 mb-10 tracking-widest pt-[100px] title-" + theme}>CAREER</p>
            <p className={"section-subtitle text-4xl tracking-wider title-" + theme}>MY CAREER</p>
            <p className={"text-lg text-gray-400 mt-5 text-" + theme}>
                I've done a few summer internships, as well as some part-time work.
            </p>
            
            <div className="career-container flex flex-row mt-20 justify-center gap-15">
                <div className="career-inner flex flex-col items-center w-[420px] min-w-[420px]">
                    {getWorkElement("Paraglide AI", "paraglide.webp", "part", "October 2026 - Now", "Software Engineer (Intern)", "Paraglide AI", true)}
                    {getWorkElement("Palantir Technologies", (theme == "dark" ? "palantir.svg" : "palantir-light.svg"), "full", " 8 June 2026 - 8 September 2026", "Software Engineer (Intern)", "Palantir", false)}
                    {getWorkElement("Neo4j", "neo4j.svg", "full", " 9 June 2025 - 15 August 2025", "Software Engineer (Intern)", "Neo4j", true)}
                    {getWorkElement("Arm", "arm.png", "part", " 15 August 2024 - 31 December 2024", "Software Engineer (Intern)", "Arm1", true)}
                    {getWorkElement("Arm", "arm.png", "full", " 15 June 2024 - 15 August 2024", "Software Engineer (Intern)", "Arm2", true)}
                </div>

                <div className="max-w-[1000px]">
                    <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={detailKey}
                        initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 10 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.22, ease: "easeOut" } }}
                        exit={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : -6, transition: { duration: reduceMotion ? 0 : 0.12 } }}
                    >
                    {(selectedSection == "Arm1" || selectedSection == "Arm2") && <div className="flex flex-col items-center">
                        <h1 className={"w-full text-4xl pb-3 border-b border-gray-600 mb-5 text-gray-200 title-" + theme}>
                            ARM <span className={"text-gray-400 text-gray-" + theme}>(Advanced RISC Machines)</span>
                        </h1>
                        
                        <div className="w-full flex flex-row gap-x-2 pb-5 border-b border-gray-600">
                            <img className="w-[calc(50%-4px)] rounded-lg h-full object-cover" src="/static/images/career/armChip.jpg" />
                            <img className="w-[calc(50%-4px)] rounded-lg h-full object-cover" src="/static/images/career/arm2.webp" />
                        </div>

                        <div className="flex my-5 flex-row items-center w-full flex-wrap gap-3">
                            <DetailTag icon="fa-solid fa-calendar">15 June 2024 - 31 December 2024</DetailTag>

                            <DetailTag icon="fa-solid fa-location-dot">Lund, Sweden</DetailTag>
                        </div>

                        <p className={"text-lg text-gray-400 text-" + theme}>
                            I upgraded a preexisting internal tool in order to develop a program called JiraGantt, which utilized
                            the Jira API for tasks in order to create a personalized experience where employees could easily get an overview of their own tasks,
                            as well as allowing managers to understand how well a project is coming along and plan accordingly.
                        </p>
                        
                        <p className={"mt-10 text-xl w-full text-gray-200 pb-1 border-b border-gray-600 text-" + theme}>Frameworks and technologies used</p>
                        <div className="mt-5 flex flex-row flex-wrap w-full gap-3">
                            <DetailTag icon="fa-brands fa-js" tone="yellow">Javascript</DetailTag>
                            <DetailTag icon="fa-solid fa-hat-cowboy" tone="orange">jQuery</DetailTag>
                            <DetailTag icon="fa-brands fa-node-js" tone="blue">Javascript Electron</DetailTag>

                        </div>
                    </div>}

                    {(selectedSection == "Neo4j") && <div className="flex flex-col items-center">
                        <h1 className={"w-full text-4xl pb-3 mb-5 border-b border-gray-600 text-gray-200 title-" + theme}>
                            Neo4j <span className={"text-gray-400 text-gray-" + theme}>(Graph Database)</span></h1>
                        
                        <div className="w-full flex flex-row gap-x-2 pb-5 justify-center">
                            <img className="rounded-2xl h-full object-cover border border-gray-700" src="/static/images/career/graph.png" />
                        </div>

                        <div className="flex flex-row my-5 items-center w-full flex-wrap gap-3">
                            <DetailTag icon="fa-solid fa-calendar">9 June 2025 - 15 August 2025</DetailTag>

                            <DetailTag icon="fa-solid fa-location-dot">Malmö, Sweden</DetailTag>
                        </div>

                        <p className={"text-lg text-gray-400 text-" + theme}>
                            Worked with a team of 3 other interns and two full-time employees to develop a tool to assist the support team.
                            This included modelling the entire Neo4j product ecosytem as a graph (in the Neo4j Graph Database) in order to identify the impact of CVEs (Common Vulnerabilities and Exposures),
                            being able to provide accurate descriptions of what's changed between two versions of a product, and being able to
                            calculate how to upgrade certain products from one version to another given an ecosystem of used products.
                        </p>
                        
                        <p className={"mt-10 text-xl w-full text-gray-200 pb-1 border-b border-gray-600 text-" + theme}>Frameworks and technologies used</p>
                        <div className="mt-5 flex flex-row flex-wrap w-full gap-3">
                            <DetailTag icon="fa-brands fa-java" tone="orange">Java</DetailTag>
                            <DetailTag icon="fa-brands fa-js" tone="cyan">Typescript</DetailTag>
                            <DetailTag icon="fa-brands fa-python" tone="blue">Python</DetailTag>
                            <DetailTag icon="fa-brands fa-java" tone="green">Java Spring Boot</DetailTag>
                            <DetailTag icon="fa-brands fa-python" tone="blue">Python Fastapi</DetailTag>
                            <DetailTag icon="fa-brands fa-react" tone="cyan">Typescript React</DetailTag>
                            <DetailTag icon="fa-solid fa-hexagon-nodes" tone="purple">Neo4j Graph Database</DetailTag>
                            <DetailTag icon="fa-solid fa-hexagon-nodes" tone="pink">Neo4j Cypher Query Language</DetailTag>
                            <DetailTag icon="fa-brands fa-docker" tone="blue">Docker</DetailTag>
                        </div>
                    </div>}

                    {(selectedSection == "Palantir") && <div className="flex flex-col items-center">
                        <h1 className={"w-full text-4xl pb-3 mb-5 border-b border-gray-600 text-gray-200 title-" + theme}>
                            Palantir Technologies
                        </h1>
                        
                        <div className="w-full flex flex-row gap-x-2 pb-5 justify-center">
                            <img className="rounded-2xl h-full object-cover border border-gray-700" src="/static/images/career/Palantir.jpg" />
                        </div>

                        <div className="flex flex-row my-5 items-center w-full flex-wrap gap-3">
                            <DetailTag icon="fa-solid fa-calendar">8 June, 2026 - 8 September, 2026</DetailTag>

                            <DetailTag icon="fa-solid fa-location-dot">London, UK</DetailTag>
                        </div>

                        <p className={"text-lg text-gray-400 text-" + theme}>
                            Fullstack role on the Palantir Foundry platform. Involved working with Forward Deployed Engineers who were the primary users of the system we were developing.
                            Extended internship length by two weeks. Did a customer onsite with a customer in New York, where I got to present the work I was doing as well as understand what features users wanted.
                        </p>

                        <section
                            className={"mt-8 w-full rounded-xl border border-gray-700 bg-secondary p-5 sm:p-6 element-border-" + theme}
                            aria-labelledby="palantir-team-heading"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src="/static/images/career/Marketplace.png"
                                    alt="Foundry Marketplace logo"
                                    width={64}
                                    height={64}
                                    className={"size-16 shrink-0 rounded-lg bg-third p-2 object-contain career-image-" + theme}
                                />
                                <div className="min-w-0">
                                    <h2 id="palantir-team-heading" className={"text-xl title-" + theme}>
                                        DevOps Marketplace
                                    </h2>
                                    <p className={"mt-1 text-gray-400 text-" + theme}>
                                        Product packaging &amp; installation
                                    </p>
                                </div>
                            </div>
                            <p className={"mt-4 rounded-lg border-l-4 border-blue-500 bg-blue-500/10 p-4 text-lg text-blue-400 blue-text-" + theme}>
                                <span>Foundry DevOps is a software application within the Foundry product, not a traditional DevOps team.</span>
                            </p>
                            <p className={"mt-4 text-lg text-gray-300 text-" + theme}>
                                I was part of the DevOps Marketplace team, which handles packaging and installation of products on the Foundry platform.
                                These products package Foundry resources, such as representations of data and data-backed workflows, so they can be distributed and installed in other environments. Read more in the{" "}
                                <a
                                    href="https://www.palantir.com/docs/foundry/devops/overview/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={"rounded-sm text-blue-400 underline underline-offset-4 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 blue-text-" + theme}
                                >
                                    Foundry DevOps documentation
                                </a>.
                            </p>
                            <p className={"mt-3 text-lg text-gray-300 text-" + theme}>
                                I worked on the{" "}
                                <a
                                    href="https://www.palantir.com/docs/foundry/marketplace/install-product/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={"rounded-sm text-blue-400 underline underline-offset-4 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 blue-text-" + theme}
                                >
                                    installation functionality
                                </a>{" "}
                                in particular. This involved a complex backend built around finite state machines, with many different data types and abstractions to handle concerns such as dependencies between products.
                            </p>
                        </section>

                        <p className={"mt-10 text-xl w-full text-gray-200 pb-1 border-b border-gray-600 text-" + theme}>Frameworks and technologies used</p>
                        <div className="mt-5 flex flex-row flex-wrap w-full gap-3">
                            <DetailTag icon="fa-brands fa-java" tone="orange">Java</DetailTag>
                            <DetailTag icon="fa-brands fa-js" tone="cyan">Typescript</DetailTag>
                            <DetailTag icon="fa-brands fa-react" tone="cyan">Typescript React</DetailTag>
                            <DetailTag icon="fa-solid fa-hexagon-nodes" tone="pink">GraphQL</DetailTag>
                        </div>

                    </div>}

                    {(selectedSection == "Paraglide AI") && <div className="flex flex-col items-center">
                        <h1 className={"w-full text-4xl pb-3 mb-5 border-b border-gray-600 text-gray-200 title-" + theme}>
                            Paraglide AI
                        </h1>
                        
                        <div className="w-full flex flex-row gap-x-2 pb-5 justify-center">
                            <img className="rounded-2xl h-full object-cover border border-gray-700" src="/static/images/career/paraglide-banner.png" />
                        </div>

                        <div className="flex flex-row my-5 items-center w-full flex-wrap gap-3">
                            <DetailTag icon="fa-solid fa-calendar">October, 2026 - Now</DetailTag>

                            <DetailTag icon="fa-solid fa-location-dot">Malmö, Sweden</DetailTag>
                        </div>

                        <p className={"text-lg text-gray-400 text-" + theme}>
                            Fullstack role, with high-ownership of features, as well as work relating to AI. Both backend and frontend using TypeScript. Team of less than 10 people, so a lot of responsibility given the high-pace of the startup.
                            At least 20h per week.
                        </p>

                        <p className={"mt-10 text-xl w-full text-gray-200 pb-1 border-b border-gray-600 text-" + theme}>Frameworks and technologies used</p>
                        <div className="mt-5 flex flex-row flex-wrap w-full gap-3">
                            <DetailTag icon="fa-brands fa-js" tone="cyan">Typescript</DetailTag>
                            <DetailTag icon="fa-brands fa-react" tone="cyan">Typescript React</DetailTag>
                            <DetailTag icon="fa-solid fa-server" tone="red">NestJS</DetailTag>
                            <DetailTag icon="fa-brands fa-react" tone="purple">Next.js</DetailTag>
                            <DetailTag icon="fa-solid fa-database" tone="blue">Postgres (with Prisma)</DetailTag>
                            <DetailTag icon="fa-brands fa-aws" tone="orange">AWS</DetailTag>
                            <DetailTag icon="fa-brands fa-docker" tone="blue">Docker</DetailTag>
                        </div>

                    </div>}
                    </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}
