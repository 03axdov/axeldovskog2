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
    return (
        <div className="p-10 rounded-md bg-secondary w-[450px] h-[610px] flex flex-col items-center">
            <img className="h-[75px] w-[155px] mb-5 rounded-md" src={"/static/images/tests/" + filename}/>
            <p className="text-2xl mb-5 mt-3">{testName}</p>
            <p className="text-lg text-left text-gray-400 p-1 px-2 rounded-md bg-third">
                Score: 
                <span className="ml-3 text-blue-400">{score}</span>
                <span className="text-gray-400 text-sm ml-1"> / {maxScore}</span>
            </p>
            <p className="mt-5 mb-auto text-gray-400 text-justify">
                {description}
            </p>
            {scoreSection}
            <div className="min-h-[10px] mt-5 max-h-[10px] w-full rounded-full flex-grow bg-gray-700 overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{
                    width: Math.round((100 * (score / maxScore))) + "%"
                }}></div>
            </div>
            <p className="text-gray-400 text-sm mt-3 text-end w-full">Percentile: <span className="text-white">{percentile}</span></p>
            
        </div>
    )
}