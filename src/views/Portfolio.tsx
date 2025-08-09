import { useState } from "react"

type ProjectType = "Dalinar" | "Muskie" | "MediaReviewr"

export default function Portfolio() {

    const [selectedSection, setSelectedSection] = useState<ProjectType>("Dalinar")

    function getProjectElement() {

    }

    return (
        <div className="px-10 mt-50 mb-50 flex flex-col items-center">
            <p className="text-2xl text-gray-500 mb-10 tracking-widest">PORTFOLIO</p>
            <p className="text-4xl tracking-wider">MY PERSONAL PROJECTS</p>
            <p className="text-lg text-gray-400 mt-5">
                I enjoy working on my own projects in my spare time. Here are the main ones.
            </p>
            
            <div className="flex flex-row mt-20 justify-center gap-x-15">
                <div className="flex flex-col items-center w-[420px]">
                    
                </div>

                <div className="max-w-[1000px]">
                    
                </div>
            </div>
        </div>
    )
}