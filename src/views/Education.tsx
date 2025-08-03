import { useState } from "react"

type SectionTypes = "ntu" | "lth" | "lusem"

export default function Education() {

    const [selectedSection, setSelectedSection] = useState<SectionTypes>("ntu")

    function getUniversityElement(
        logoFilename: string, 
        title: string, 
        universityName: string,
        time: string,
        selectedVal: SectionTypes
    ) {
        return (
            <div className={"university w-full flex flex-row items-center cursor-pointer " +
            "rounded-lg p-4 " + (selectedSection == selectedVal ? "bg-third university-selected" : "")}
            onClick={() => setSelectedSection(selectedVal)}
            >
                <img className="w-[50px] mr-5" src={"/static/images/education/" + logoFilename}/>
                <div className="flex flex-col">
                    <p className="whitespace-nowrap text-xl">{title}</p>
                    <p className="whitespace-nowrap text-lg text-gray-300">{universityName}</p>
                    <p className="whitespace-nowrap text-md text-gray-400">{time}</p>
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
                    <p className="absolute top-3 left-3 text-2xl p-2 px-4 bg-[rgb(0,0,0,0.7)] rounded-md">{name}</p>
                    <img className="w-[60%] bg-third h-[100%] object-cover rounded-md" src={"/static/images/education/" + filename1}/>
                    <div className="flex flex-col gap-y-3 flex-grow">
                        <img className="h-[calc(50%-6px)] object-cover bg-third rounded-md" src={"/static/images/education/" + filename2}/>
                        <img className="h-[calc(50%-6px)] object-cover bg-third rounded-md" src={"/static/images/education/" + filename3}/>
                    </div>
                </div>
                
                <p className="w-full mt-5 text-gray-300 text-lg">
                    {description}
                </p>

                <div className="mt-5 w-full">
                    <p className="text-gray-400 w-full text-start">Rough GPA</p>
                    <div className="mt-3 flex flex-row items-center w-full">
                        <div className="h-[10px] rounded-full flex-grow bg-gray-700 overflow-hidden">
                            <div className="h-full bg-blue-500 rounded-full" style={{
                                width: (gpa && gpaMax ? Math.round((100 * (gpa / gpaMax))) + "%": "0")
                            }}></div>
                        </div>
                        {gpa && gpaMax && <p className="m-0 ml-3 text-lg">{gpa} <span className="text-gray-400">out of {gpaMax}</span></p>}
                        {!gpa && !gpaMax && <p className="m-0 ml-3 text-lg">No grades yet.</p>}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="px-10 mt-50 flex flex-col items-center">
            <p className="text-2xl text-gray-500 mb-10 tracking-widest">EDUCATION</p>
            <p className="text-4xl tracking-wider">MY EDUCATION</p>
            <p className="text-lg text-gray-400 mt-5">
                I'm studying 200% at Lund University, Sweden.<br></br>
                During the fall semester of 2025 I'm an exchange student at Nation Taiwan University.
            </p>

            <div className="flex flex-row justify-center w-full my-20 gap-x-10">
                <div className="flex flex-col w-[420px] min-w-[420px]">
                    {getUniversityElement("ntu.png", "Exchange Student", "National Taiwan University", "August 2025 - December 2025", "ntu")}
                    {getUniversityElement("lu.png", "Master of Computer Science", "Lund University", "August 2022 - June 2027", "lth")}
                    {getUniversityElement("lu.png", "Bachelor of International Business", "Lund University", "August 2023 - June 2026", "lusem")}
                </div>

                {selectedSection == "ntu" && getUniversityPage("National Taiwan University", "ntu.jpeg", "taipei.jpeg", "ntu2.jpg", `At National Taiwan University,
                the #1 ranked university in one of the worlds most technologically innovative countries,
                I'm aiming to study courses within Computer Science,
                primarily within machine learning and data handling.`)}

                {selectedSection == "lth" && getUniversityPage("Lund University (LTH)", "lu.jpg", "lu2.jpg", "lth.jpg", `At National Taiwan University,
                the #1 ranked university in one of the worlds most technologically innovative countries,
                I'm aiming to study courses within Computer Science,
                primarily within machine learning and data handling.`, 4.35, 5)}

                {selectedSection == "lusem" && getUniversityPage("Lund University (LUSEM)", "lu.jpg", "lu2.jpg", "lusem.jpg", `At National Taiwan University,
                the #1 ranked university in one of the worlds most technologically innovative countries,
                I'm aiming to study courses within Computer Science,
                primarily within machine learning and data handling.`, 4.3, 5)}
            </div>
        </div>
    )
}