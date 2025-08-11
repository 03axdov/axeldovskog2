import { useState } from "react"
import DalinarPage from "../components/portfolio/DalinarPage"
import MuskiePage from "../components/portfolio/MuskiePage"
import MediaReviewrPage from "../components/portfolio/MediaReviewrPage"

type ProjectType = "Dalinar" | "Muskie" | "MediaReviewr"

export default function Portfolio() {

    const [selectedSection, setSelectedSection] = useState<ProjectType>("Dalinar")

    function getProjectElement(
        filename: string, section: ProjectType, background: string, selectedColor: string
    ) {
        return (
            <div className={"flex w-full rounded-lg flex-row items-center justify-center cursor-pointer " +
                (selectedSection == section ? "border border-" + selectedColor : "border border-[rgb(0,0,0,0)] hover:border-gray-600")
            }
            style={{
                background: background
            }}
            onClick={() => setSelectedSection(section)}>
                <img className="h-[75px] rounded-lg" src={"/static/images/portfolio/" + filename}/>
            </div>
        )
    }

    return (
        <div id="portfolio" className="px-10 mt-50 mb-50 flex flex-col items-center">
            <p className="text-2xl text-gray-500 mb-10 tracking-widest">PORTFOLIO</p>
            <p className="section-subtitle text-4xl tracking-wider">MY PERSONAL PROJECTS</p>
            <p className="text-lg text-gray-400 mt-5">
                I enjoy working on my own projects in my spare time. Here are the main ones.
            </p>
            
            <div className="portfolio-container w-full max-w-[100%] flex flex-row mt-20 justify-center gap-15 relative">
                <div className="flex flex-col items-center gap-y-5 w-[300px] min-w-[300px]">
                    {getProjectElement("Dalinar.jpg", "Dalinar", "#18191c", "blue-300")}
                    {getProjectElement("Muskie.jpg", "Muskie", "#18191c", "cyan-400")}
                    {getProjectElement("Mediareviewr.jpg", "MediaReviewr", "#18191c", "purple-400")}
                </div>

                <div className="portfolio-inner w-[1000px] max-w-[calc(100%-300px-60px)]">
                    {selectedSection == "Dalinar" && <DalinarPage />}

                    {selectedSection == "Muskie" && <MuskiePage />}

                    {selectedSection == "MediaReviewr" && <MediaReviewrPage />}
                </div>
            </div>

            <p className="text-md text-gray-400 mt-20">I also built this website using Javascript React and TailwindCSS for styling.</p>
        </div>
    )
}