import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { useTheme } from "../contexts/ThemeContext"
import PDFModal from "../components/PDFModal"

type SectionTypes = "ntu" | "lth" | "lusem"

const transcripts = {
    lund: {
        title: "Lund University transcript",
        src: "/static/images/education/transcript.pdf",
    },
    ntu: {
        title: "NTU transcript",
        src: "/static/images/education/transcript-taiwan.pdf",
    },
}

export default function Education() {
    const { theme } = useTheme()
    const reduceMotion = useReducedMotion()

    const [selectedTranscript, setSelectedTranscript] = useState<keyof typeof transcripts | null>(null)
    const [selectedSection, setSelectedSection] = useState<SectionTypes>("lth")
    const preloadedImagesRef = useRef<Map<string, HTMLImageElement>>(new Map())

    useEffect(() => {
        const filenames = ["lu.jpg", "lu2.jpg", "lth.jpg", "lusem.jpg", "ntu.jpeg", "taipei.jpeg", "ntu2.jpg"]

        filenames.forEach((filename) => {
            const src = "/static/images/education/" + filename
            if (preloadedImagesRef.current.has(src)) return

            const image = new Image()
            image.decoding = "async"
            image.loading = "eager"
            image.src = src

            // Retain the images and decode them before their panels are displayed.
            preloadedImagesRef.current.set(src, image)
            image.decode?.().catch(() => {
                // A failed preload should not interrupt navigation.
            })
        })
    }, [])

    function getUniversityElement(
        logoFilename: string, 
        title: string, 
        universityName: string,
        time: string,
        selectedVal: SectionTypes
    ) {
        return (
            <div className={"university w-full flex flex-row items-center border border-[rgb(0,0,0,0)] cursor-pointer university-" + theme +
            " rounded-lg p-4 transition-colors duration-200 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 " + (selectedSection == selectedVal ? "bg-third university-selected university-selected-" + theme : "")}
            role="button"
            tabIndex={0}
            aria-pressed={selectedSection === selectedVal}
            onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault()
                    setSelectedSection(selectedVal)
                }
            }}
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
                        {!gpa && !gpaMax && <p className="m-0 ml-3 text-lg">Non numerical grade scale.</p>}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div id="education" className="px-10 flex flex-col items-center">
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

                <div className="flex-grow max-w-[1000px] min-w-0">
                    <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={selectedSection}
                        initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 10 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.22, ease: "easeOut" } }}
                        exit={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : -6, transition: { duration: reduceMotion ? 0 : 0.12 } }}
                    >
                {selectedSection == "ntu" && getUniversityPage("National Taiwan University", "ntu.jpeg", "taipei.jpeg", "ntu2.jpg", `
                    At National Taiwan University, I mainly took classes on machine learning, as well as general chinese and designing virtual experiences. GPA: A`)}

                {selectedSection == "lth" && getUniversityPage("Lund University (LTH)", "lu.jpg", "lu2.jpg", "lth.jpg", `At LTH I've spent 3 years studying different topics within computer science. See my transcript below for a detailed course list (LTH courses are the ones graded 1-5).`, 4.35, 5)}

                {selectedSection == "lusem" && getUniversityPage("Lund University (LUSEM)", "lu.jpg", "lu2.jpg", "lusem.jpg", `At LUSEM I've spent 2 years studying different topics within business, economics, and management. See my transcript below for a detailed course list (LUSEM courses are the ones graded A-F).`, 4.3, 5)}
                    </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <div className="mt-15 flex flex-wrap justify-center gap-4">
                {Object.entries(transcripts).map(([key, transcript]) => (
                    <button
                        key={key}
                        type="button"
                        aria-haspopup="dialog"
                        className={"flex flex-row items-center cursor-pointer text-xl p-2 px-4 rounded-md border border-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 element-border-" + theme}
                        onClick={() => setSelectedTranscript(key as keyof typeof transcripts)}
                    >
                        <i className="fa-solid fa-file-pdf mr-3 text-blue-400" aria-hidden="true"></i>
                        {transcript.title}
                    </button>
                ))}
            </div>
            <PDFModal
                open={selectedTranscript !== null}
                onClose={() => setSelectedTranscript(null)}
                title={selectedTranscript ? transcripts[selectedTranscript].title : undefined}
                src={selectedTranscript ? transcripts[selectedTranscript].src : undefined}
            />
            <p className={"text-sm mt-2 text-center text-gray-400 text-" + theme}>
                If the preview only shows one page on mobile, use Open PDF to view the full transcript.
                <br></br><br></br>
                Note that my Lund University transcript includes grades from both programs I studied,
                <br></br>
                with International Business courses being graded with letters and Computer Science courses
                with 1 to 5 or G.
            </p>
        </div>
    )
}
