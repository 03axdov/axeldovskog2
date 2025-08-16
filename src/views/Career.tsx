import { useState } from "react"

type WorkType = "Neo4j" | "Arm1" | "Arm2"

export default function Career() {

    const [selectedSection, setSelectedSection] = useState<WorkType>("Neo4j")

    function getWorkElement(
        name: string, filename: string, status: "part" | "full",
        duration: string, position: string, section: WorkType
    ) {
        return (
            <div className={"work-element flex rounded-2xl w-full p-4 flex-row items-center cursor-pointer " +
                (selectedSection == section ? "bg-third border border-[rgb(0,0,0,0)]" : "border border-gray-600")
            }
            onClick={() => setSelectedSection(section)}>
                <img className="career-element-image w-[100px] rounded-lg mr-5" src={"/static/images/career/" + filename}/>
                <div className="career-element-texts flex flex-col max-w-[calc(100%-100px-20px)]">
                    <p className="whitespace-nowrap max-w-[100%] career-element-larger text-xl">{name}</p>
                    <p className="whitespace-nowrap max-w-[100%] career-element-large text-lg text-gray-300">{position}</p>
                    <p className="whitespace-nowrap max-w-[100%] career-element-mid text-md text-gray-400">{duration}</p>
                    <p className="whitespace-nowrap max-w-[100%] career-element-mid text-md text-gray-400">{status == "part" ? "Part-time" : "Full-time"}</p>
                </div>
            </div>
        )
    }

    return (
        <div id="career"  className="px-10 mt-50 mb-50 flex flex-col items-center">
            <p className="text-2xl text-gray-500 mb-10 tracking-widest">CAREER</p>
            <p className="section-subtitle text-4xl tracking-wider">MY CAREER</p>
            <p className="text-lg text-gray-400 mt-5">
                I've done two summer internships, one of which included part-time work later on.<br></br>
                There was no opportunity for extending my internship at Neo4j as I'm going on exchange studies.
            </p>
            
            <div className="career-container flex flex-row mt-20 justify-center gap-15">
                <div className="career-inner flex flex-col items-center w-[420px] min-w-[420px]">
                    {getWorkElement("Neo4j", "neo4j.svg", "full", " 9 June 2025 - 15 August 2025", "Software Engineer (Intern)", "Neo4j")}
                    <div className="career-spacing border-r border-gray-600 h-[100px]"></div>
                    {getWorkElement("Arm", "arm.png", "part", " 15 August 2024 - 31 December 2024", "Software Engineer (Intern)", "Arm1")}
                    <div className="career-spacing border-r border-gray-600 h-[100px]"></div>
                    {getWorkElement("Arm", "arm.png", "full", " 15 June 2024 - 15 August 2024", "Software Engineer (Intern)", "Arm2")}
                </div>

                <div className="max-w-[1000px]">
                    {(selectedSection == "Arm1" || selectedSection == "Arm2") && <div className="flex flex-col items-center">
                        <h1 className="w-full text-4xl pb-3 border-b border-gray-600 mb-5 text-gray-200">ARM <span className="text-gray-400">(Advanced RISC Machines)</span></h1>
                        
                        <div className="w-full flex flex-row gap-x-2 pb-5 border-b border-gray-600">
                            <img className="w-[calc(50%-4px)] rounded-lg h-full object-cover" src="/static/images/career/armChip.jpg" />
                            <img className="w-[calc(50%-4px)] rounded-lg h-full object-cover" src="/static/images/career/arm2.webp" />
                        </div>

                        <div className="flex my-5 flex-row items-center w-full flex-wrap gap-3">
                            <p className="text-lg p-2 px-4 rounded-md bg-third text-gray-400 flex flex-row items-center">
                                <i className="fa-solid fa-calendar text-sm mr-3" />
                                15 June 2024 - 31 December 2024
                            </p>

                            <p className="text-lg p-2 px-4 rounded-md bg-third text-gray-400 flex flex-row items-center">
                                <i className="fa-solid fa-location-dot text-sm mr-3" />
                                Lund, Sweden
                            </p>
                        </div>

                        <p className="text-lg text-gray-400">
                            I upgraded a preexisting internal tool in order to develop a program called JiraGantt, which utilized
                            the Jira API for tasks in order to create a personalized experience where employees could easily get an overview of their own tasks,
                            as well as allowing managers to understand how well a project is coming along and plan accordingly.
                        </p>
                        
                        <p className="mt-10 text-xl w-full text-gray-200 pb-1 border-b border-gray-600">Frameworks and technologies used</p>
                        <div className="mt-5 flex flex-row flex-wrap w-full gap-3">
                            <p className="text-lg p-1 px-3 text-md flex flex-row items-center rounded-md border border-yellow-400 text-yellow-400">
                                <i className="fa-brands fa-js fa-lg mr-3"></i>
                                Javascript
                            </p>
                            <p className="text-lg p-1 px-3 text-md flex flex-row items-center rounded-md border border-orange-400 text-orange-400">
                                <i className="fa-solid fa-hat-cowboy fa-lg mr-3"></i>
                                jQuery
                            </p>
                            <p className="text-lg p-1 px-3 text-md flex flex-row items-center rounded-md border border-blue-400 text-blue-400">
                                <i className="fa-brands fa-node-js fa-lg mr-3"></i>
                                Javascript Electron
                            </p>

                        </div>
                    </div>}

                    {(selectedSection == "Neo4j") && <div className="flex flex-col items-center">
                        <h1 className="w-full text-4xl pb-3 mb-5 border-b border-gray-600 text-gray-200">Neo4j <span className="text-gray-400">(Graph Database)</span></h1>
                        
                        <div className="w-full flex flex-row gap-x-2 pb-5 justify-center">
                            <img className="rounded-2xl h-full object-cover border border-gray-700" src="/static/images/career/graph.jpg" />
                        </div>

                        <div className="flex flex-row my-5 items-center w-full flex-wrap gap-3">
                            <p className="text-lg p-2 px-4 rounded-md bg-third text-gray-400 flex flex-row items-center">
                                <i className="fa-solid fa-calendar text-sm mr-3" />
                                9 June 2025 - 15 August 2025
                            </p>

                            <p className="text-lg p-2 px-4 rounded-md bg-third text-gray-400 flex flex-row items-center">
                                <i className="fa-solid fa-location-dot text-sm mr-3" />
                                Malmö, Sweden
                            </p>
                        </div>

                        <p className="text-lg text-gray-400">
                            Worked with a team of 3 other interns and two full-time employees to develop a tool to assist the support team.
                            This included modelling the entire Neo4j product ecosytem as a graph (in the Neo4j Graph Database) in order to identify the impact of CVEs (Common Vulnerabilities and Exposures),
                            being able to provide accurate descriptions of what's changed between two versions of a product, and being able to
                            calculate how to upgrade certain products from one version to another given an ecosystem of used products.
                        </p>
                        
                        <p className="mt-10 text-xl w-full text-gray-200 pb-1 border-b border-gray-600">Frameworks and technologies used</p>
                        <div className="mt-5 flex flex-row flex-wrap w-full gap-3">
                            <p className="text-lg p-1 px-3 text-md flex flex-row items-center rounded-md border border-orange-400 text-orange-400">
                                <i className="fa-brands fa-java fa-lg mr-3"></i>
                                Java
                            </p>
                            <p className="text-lg p-1 px-3 text-md flex flex-row items-center rounded-md border border-cyan-400 text-cyan-400">
                                <i className="fa-brands fa-js fa-lg mr-3"></i>
                                Typescript
                            </p>
                            <p className="text-lg p-1 px-3 text-md flex flex-row items-center rounded-md border border-blue-400 text-blue-400">
                                <i className="fa-brands fa-python fa-lg mr-3"></i>
                                Python
                            </p>
                            <p className="p-1 px-3 text-md flex flex-row items-center rounded-md border border-green-400 text-green-400">
                                <i className="fa-brands fa-java fa-lg mr-3"></i>
                                Java Spring Boot
                            </p>
                            <p className="text-lg p-1 px-3 text-md flex flex-row items-center rounded-md border border-blue-500 text-blue-500">
                                <i className="fa-brands fa-python fa-lg mr-3"></i>
                                Python Fastapi
                            </p>
                            <p className="text-lg p-1 px-3 text-md flex flex-row items-center rounded-md border border-cyan-400 text-cyan-400">
                                <i className="fa-brands fa-react fa-lg mr-3"></i>
                                Typescript React
                            </p>
                            <p className="text-lg p-1 px-3 text-md flex flex-row items-center rounded-md border border-purple-400 text-purple-400">
                                <i className="fa-solid fa-hexagon-nodes fa-lg mr-3"></i>
                                Neo4j Graph Database
                            </p>
                            <p className="text-lg p-1 px-3 text-md flex flex-row items-center rounded-md border border-pink-400 text-pink-400">
                                <i className="fa-solid fa-hexagon-nodes fa-lg mr-3"></i>
                                Neo4j Cypher Query Language
                            </p>
                            <p className="text-lg p-1 px-3 text-md flex flex-row items-center rounded-md border border-blue-500 text-blue-500">
                                <i className="fa-brands fa-docker fa-lg mr-3"></i>
                                Docker
                            </p>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}