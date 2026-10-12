import { useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import DalinarPage from "../components/portfolio/DalinarPage"
import MuskiePage from "../components/portfolio/MuskiePage"
import MediaReviewrPage from "../components/portfolio/MediaReviewrPage"
import { useTheme } from "../contexts/ThemeContext"

type ProjectType = "Dalinar" | "Muskie" | "MediaReviewr"

export default function Portfolio() {
    const { theme } = useTheme()
    const reduceMotion = useReducedMotion()

    const [selectedSection, setSelectedSection] = useState<ProjectType>("Dalinar")

    function getProjectElement(
        filename: string, section: ProjectType, background: string, selectedColor: string
    ) {
        return (
            <div className={"flex w-full rounded-lg flex-row items-center justify-center cursor-pointer transition-[border-color,box-shadow] duration-200 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 " +
                (selectedSection == section ? "border border-" + selectedColor + " portfolio-selected-" + theme : "border border-[rgb(0,0,0,0)] hover:border-gray-600")
            }
            style={{
                background: background
            }}
            role="button"
            tabIndex={0}
            aria-label={section}
            aria-pressed={selectedSection === section}
            onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault()
                    setSelectedSection(section)
                }
            }}
            onClick={() => setSelectedSection(section)}>
                <img className="h-[75px] rounded-lg" src={"/static/images/portfolio/" + filename}/>
            </div>
        )
    }

    return (
        <div id="portfolio" className="content-section px-10 mt-20 flex flex-col items-center">
            <p className={"text-2xl text-gray-500 mb-10 tracking-widest pt-[100px] title-" + theme}>PORTFOLIO</p>
            <p className={"section-subtitle text-4xl tracking-wider title-" + theme}>MY PERSONAL PROJECTS</p>
            <p className={"text-lg text-gray-400 mt-5 text-" + theme}>
                I enjoy working on my own projects in my spare time. Here are the main ones.
            </p>
            
            <div className="portfolio-container w-full max-w-[100%] flex flex-row mt-20 justify-center gap-15 relative">
                <div className="flex flex-col items-center gap-y-5 w-[300px] min-w-[300px]">
                    {getProjectElement("Dalinar.jpg", "Dalinar", "#18191c", "blue-300")}
                    {getProjectElement("Muskie.jpg", "Muskie", "#18191c", "cyan-400")}
                    {getProjectElement("Mediareviewr.jpg", "MediaReviewr", "#18191c", "purple-400")}
                </div>

                <div className="portfolio-inner w-[1000px] max-w-[calc(100%-300px-60px)]">
                    <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={selectedSection}
                        initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 10 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.22, ease: "easeOut" } }}
                        exit={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : -6, transition: { duration: reduceMotion ? 0 : 0.12 } }}
                    >
                    {selectedSection == "Dalinar" && <DalinarPage />}

                    {selectedSection == "Muskie" && <MuskiePage />}

                    {selectedSection == "MediaReviewr" && <MediaReviewrPage />}
                    </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <p className={"text-md text-gray-400 mt-20 text-" + theme}>I also built this website using Javascript React and TailwindCSS for styling.</p>
        </div>
    )
}
