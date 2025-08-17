import { useTheme } from "../contexts/ThemeContext"

interface TestElementProps {
    testName: string
    score: number,
    maxScore: number,
    percentile: string
    filename: string,
    description: string,
    scoreSection?: React.JSX.Element
}

export default function TestElement({testName, score, maxScore, filename, description, scoreSection, percentile}: TestElementProps) {
    const { theme } = useTheme()
    
    return (
        <div className={"test-element p-10 rounded-md bg-secondary max-w-[100%] w-[450px] min-h-[630px] flex flex-col items-center test-element-" + theme}>
            <img className="h-[75px] w-[155px] mb-5 rounded-md" src={"/static/images/tests/" + filename}/>
            <p className={"text-2xl mb-5 mt-3 title-" + theme}>{testName}</p>
            <p className={"text-lg text-left text-gray-400 p-1 px-2 rounded-md bg-third element-border-" + theme}>
                Score: 
                <span className={"ml-3 text-" + (testName == "SAT" ? "purple-400 purple-text-" + theme : "blue-400 blue-text-" + theme)}>{score}</span>
                <span className={"text-gray-400 text-sm ml-1 text-" + theme}> / {maxScore}{testName != "SAT" ? ".0" : ""}</span>
            </p>
            <p className={"mt-5 mb-auto text-gray-400 text-justify text-" + theme}>
                {description}
            </p>
            {scoreSection}
            <div className={"h-[10px] mt-5 w-full rounded-full bg-main overflow-hidden bar-" + theme}>
                <div className={"h-full " + (testName == "SAT" ? "purple-gradient" : "blue-gradient") + " rounded-full"} style={{
                    width: Math.round((100 * (score / maxScore))) + "%"
                }}></div>
            </div>
            <p className={"text-gray-400 text-sm mt-3 text-end w-full text-gray-" + theme}>Percentile: <span className={"text-white text-" + theme}>{percentile}</span></p>
            
        </div>
    )
}