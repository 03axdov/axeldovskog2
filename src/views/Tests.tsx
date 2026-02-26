import TestElement from "../components/TestElement";
import { useTheme } from "../contexts/ThemeContext";

export default function Tests() {
    const { theme } = useTheme()
    
    return (
        <div id="tests" className="px-10 mt-20 flex flex-col items-center">
            <p className={"text-2xl text-gray-500 mb-10 tracking-widest pt-[100px] title-" + theme}>TEST SCORES</p>
            <p className={"section-subtitle text-4xl tracking-wider title-" + theme}>STANDARDIZED TESTS</p>
            <p className={"text-lg text-gray-400 mt-5 text-" + theme}>
                I've taken the American SAT, as well as the Swedish counterpart called Högskoleprovet.
            </p>

            <div className="max-w-[100%] mt-15 flex flex-row items-center justify-center flex-wrap gap-10">
                <TestElement 
                testName="SAT" 
                score={1560}
                maxScore={1600}
                filename={"usa.png"} 
                description={`
                    A standardized test from the USA, testing students on their linguistic and mathematical skills.
                    There are two parts, one testing English and the other mathematical proficiency. Both parts
                    award a maximum of 800 points.
                `}
                scoreSection={<div className="mt-5 w-full flex flex-col gap-3 px-3">
                    
                    <div className="flex flex-row w-full flex-wrap justify-center items-center gap-5">
                        <div className={"flex flex-col items-center p-2 px-4 rounded-md bg-third element-border-" + theme}>
                            <p className="text-lg mb-3 whitespace-nowrap">Reading & Writing</p>
                            <p className={"text-lg text-purple-400 purple-text-" + theme}>
                                770 <span className={"text-gray-400 text-sm text-" + theme}> / 800</span>
                            </p>
                        </div>
                        <div className={"flex flex-col items-center p-2 px-4 rounded-md bg-third element-border-" + theme}>
                            <p className="text-lg mb-3 whitespace-nowrap">Mathematics</p>
                            <p className={"text-lg text-purple-400 purple-text-" + theme}>
                                790 <span className={"text-gray-400 text-sm text-" + theme}> / 800</span>
                            </p>
                        </div>
                    </div>
                </div>}
                percentile="99+"
                />

                <TestElement 
                testName="Högskoleprovet" 
                score={1.7}
                maxScore={2.0}
                filename={"sweden.png"} 
                description={`
                    A standardized test given to students in Sweden, testing students on their Swedish, English, and mathematical skills.
                    Swedish and English are combined, giving a maximum of 2 points, and the mathematics section gives a maximum of 2 point as well, with the end score being the average of the two.
                `}
                scoreSection={<div className="mt-5 w-full flex flex-col gap-3 px-3">
                    
                    <div className="flex flex-row w-full flex-wrap justify-center items-center gap-5">
                        <div className={"flex flex-col items-center p-2 px-4 rounded-md bg-third element-border-" + theme}>
                            <p className="text-lg mb-3 whitespace-nowrap">Reading & Writing</p>
                            <p className={"text-lg text-blue-400 blue-text-" + theme}>
                                1.4 <span className={"text-gray-400 text-sm text-" + theme}> / 2.0</span>
                            </p>
                        </div>
                        <div className={"flex flex-col items-center p-2 px-4 rounded-md bg-third element-border-" + theme}>
                            <p className="text-lg mb-3 whitespace-nowrap">Mathematics</p>
                            <p className={"text-lg text-blue-400 blue-text-" + theme}>
                                2.0 <span className={"text-gray-400 text-sm text-" + theme}> / 2.0</span>
                            </p>
                        </div>
                    </div>
                </div>}
                percentile="98.7"
                />

            </div>
        </div>
    )
}