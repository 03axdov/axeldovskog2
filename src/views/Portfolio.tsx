import { useState } from "react"
import DalinarPage from "../components/portfolio/DalinarPage"
import MuskiePage from "../components/portfolio/MuskiePage"

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
        <div className="px-10 mt-50 mb-50 flex flex-col items-center">
            <p className="text-2xl text-gray-500 mb-10 tracking-widest">PORTFOLIO</p>
            <p className="text-4xl tracking-wider">MY PERSONAL PROJECTS</p>
            <p className="text-lg text-gray-400 mt-5">
                I enjoy working on my own projects in my spare time. Here are the main ones.
            </p>
            
            <div className="flex flex-row mt-20 justify-center gap-x-15 relative">
                <div className="flex flex-col items-center gap-y-5 sticky top-0 w-[300px] min-w-[300px]">
                    {getProjectElement("Dalinar.jpg", "Dalinar", "#18191c", "blue-300")}
                    {getProjectElement("Muskie.jpg", "Muskie", "#18191c", "cyan-400")}
                    {getProjectElement("Mediareviewr.jpg", "MediaReviewr", "#18191c", "purple-400")}
                </div>

                <div className="max-w-[1000px]">
                    {selectedSection == "Dalinar" && <DalinarPage />}

                    {selectedSection == "Muskie" && <MuskiePage />}

                    {selectedSection == "MediaReviewr" && <div>
                        
                    </div>}
                </div>
            </div>
        </div>
    )
}