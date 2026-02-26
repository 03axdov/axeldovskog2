import { useState } from "react"
import { useTheme } from "../contexts/ThemeContext"
import PDFModal from "../components/PDFModal"

type SectionTypes = "ntu" | "lth" | "lusem"

export default function Education() {
    const { theme } = useTheme()

    const [showTranscript, setShowTranscript] = useState(false)
    const [selectedSection, setSelectedSection] = useState<SectionTypes>("lth")

    function getUniversityElement(
        logoFilename: string, 
        title: string, 
        universityName: string,
        time: string,
        selectedVal: SectionTypes
    ) {
        return (
            <div className={"university w-full flex flex-row items-center border border-[rgb(0,0,0,0)] cursor-pointer university-" + theme +
            " rounded-lg p-4 " + (selectedSection == selectedVal ? "bg-third university-selected university-selected-" + theme : "")}
            onClick={() => setSelectedSection(selectedVal)}
            >
                <img className="w-[50px] mr-5" src={"/static/images/education/" + logoFilename}/>
                <div className="flex flex-col max-w-[calc(100%-50px-20px)]">
                    <p className="whitespace-nowrap max-w-[100%] career-element-larger text-xl">{title}</p>
                    <p className={"whitespace-nowrap max-w-[100%] career-element-large text-lg text-gray-300 text-" + theme}>{universityName}</p>
                    <p className={"whitespace-nowrap max-w-[100%] career-element-mid text-md text-gray-400 text-" + theme}>{time}</p>
                </div>
            </div>
        )
    }


    function getUniversityPage(
        name: string,
        filename1: string,
        filename2: string,
        filename3: string,
        description: string,
        gpa?: number,
        gpaMax?: number
    ) {
        return (
            <div className="flex flex-grow max-w-[1000px] flex-col items-center">
                <div className="relative flex flex-row h-[450px] w-full gap-x-3">
                    <p className={"text-white university-name absolute top-3 left-3 text-2xl p-2 px-4 bg-[rgb(0,0,0,0.7)] rounded-md"}>{name}</p>
                    <img className="w-[60%] bg-third h-[100%] object-cover rounded-md" src={"/static/images/education/" + filename1}/>
                    <div className="flex flex-col gap-y-3 flex-grow">
                        <img className="h-[calc(50%-6px)] object-cover bg-third rounded-md" src={"/static/images/education/" + filename2}/>
                        <img className="h-[calc(50%-6px)] object-cover bg-third rounded-md" src={"/static/images/education/" + filename3}/>
                    </div>
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
                        {!gpa && !gpaMax && <p className="m-0 ml-3 text-lg">No grades yet.</p>}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div id="education" className="px-10 mt-20 flex flex-col items-center">
            <p className={"text-2xl text-gray-500 mb-10 tracking-widest pt-[100px] title-" + theme}>EDUCATION</p>
            <p className={"section-subtitle text-4xl tracking-wider title-" + theme}>MY EDUCATION</p>
            <p className={"text-lg text-gray-400 mt-5 text-" + theme}>
                I'm studying 200% at Lund University, Sweden.<br></br>
                During the fall semester of 2025, I'm studying as an exchange student at National Taiwan University.
            </p>

            <div className="education-container flex flex-row justify-center w-full mt-20 gap-10">
                <div className="universities flex flex-col w-[420px] min-w-[420px]">
                    {getUniversityElement("lthLogo.jpg", "Master of Computer Science", "Lund University", "August 2022 - June 2027", "lth")}
                    {getUniversityElement("lu.png", "Bachelor of International Business", "Lund University", "August 2023 - June 2026", "lusem")}
                    {getUniversityElement("ntu.png", "Exchange Student", "National Taiwan University", "August 2025 - December 2025", "ntu")}
                </div>

                {selectedSection == "ntu" && getUniversityPage("National Taiwan University", "ntu.jpeg", "taipei.jpeg", "ntu2.jpg", `At National Taiwan University,
                the #1 ranked university in one of the worlds most technologically innovative countries,
                I'm aiming to study courses within Computer Science,
                primarily within machine learning and data handling.`)}

                {selectedSection == "lth" && getUniversityPage("Lund University (LTH)", "lu.jpg", "lu2.jpg", "lth.jpg", `At LTH I've spent 3 years studying different topics within computer science. See my transcript below for a detailed course list (LTH courses are the ones graded 1-5).`, 4.35, 5)}

                {selectedSection == "lusem" && getUniversityPage("Lund University (LUSEM)", "lu.jpg", "lu2.jpg", "lusem.jpg", `At LUSEM I've spent 2 years studying different topics within business, economics, and management. See my transcript below for a detailed course list (LUSEM courses are the ones graded A-F).`, 4.3, 5)}
            </div>

            <button 
            className={"mt-15 flex flex-row items-center cursor-pointer text-xl p-2 px-4 rounded-md border border-gray-400 element-border-" + theme }
            onClick={() => setShowTranscript(true)}>
                <i className="fa-solid fa-file-pdf mr-3 text-blue-400"></i>
                My transcript
            </button>
            <PDFModal
                open={showTranscript}
                onClose={() => setShowTranscript(false)}
                title="Transcript"
                src="/static/images/education/transcript.pdf" // or omit and pass {file}
                file={undefined}
            />
            <p className={"text-sm mt-2 text-gray-400 text-gray-" + theme}>Note that only one page may show up on mobile devices.</p>
        </div>
    )
}