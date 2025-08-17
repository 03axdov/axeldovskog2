import { useTheme } from "../contexts/ThemeContext"

export default function Recommendations() {
    const { theme } = useTheme()

    function getRecommendationElement(
        recommendation: string, 
        author: string, 
        authorEmail: string,
        authorTitle: string,
        company: string,
        authorImage: React.ReactNode) 
    {
        return (
            <div className={"p-4 rounded-md bg-secondary flex flex-col max-w-[550px] gap-y-5 recommendation-" + theme}>
                <p className="text-md whitespace-pre-wrap">
                    "{recommendation}"
                </p>
                <div className="w-full border-b border-gray-600"></div>
                <div className="flex flex-row items-center w-full gap-x-5">
                    {authorImage}
                    <div className="flex flex-col">
                        <p className="text-lg text-green-400">{author}</p>
                        <p className={"text-md text-gray-200 recommendation-text-" + theme}>{authorTitle}</p>
                        <p className={"text-sm text-gray-200 recommendation-text-" + theme}>{company}</p>
                        <p className={"text-sm text-gray-400 recommendation-text-" + theme}>{authorEmail}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div id="about" className="overflow-x-hidden pb-20 px-10 flex flex-col items-center">
            <p className={"text-2xl text-gray-500 mb-10 tracking-widest pt-[100px] title-" + theme}>RECOMMENDATIONS</p>
            <p className={"section-subtitle text-4xl mb-15 tracking-wider title-" + theme}>SOME RECOMMENDATIONS</p>

            <div className="flex flex-row items-center gap-5 flex-wrap">
                {getRecommendationElement(
                    `I had the honour to oversee the summer engineering intern group Axel was part of at Neo4j.

I can honestly say that Axel was one of the best and well-rounded interns I've had the pleasure to work with. He took no time in understanding the project, the impact and value it would deliver, and the needs driving this forward.

Never one to complain about changes, evolving requirements, or the hectic schedule; Axel brought a cheerful and hard working attitude every day.

Axel not only fully met the goals for the project, he surpassed them at every chance. Every project demo call brought a new surprise where Axel had found an opportunity to go far above and beyond what we had dreamed possible.

I would have no hesitation recommending Axel for any complex full stack development role, and very much hope we have the opportunity to work together again in the future.`, 
                    "Phil Stott", 
                    "phil.stott@neo4j.com",
                    "Senior Manager, Support Operations & Enablement", 
                    "Neo4j",
                    <img className="h-[50px] w-[50px] rounded-full" src="/static/images/recommendations/philStott.jpg"></img>)}
            </div>
        </div>
    )
}