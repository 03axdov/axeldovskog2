import DetailTag from "../DetailTag"
import { useTheme } from "../../contexts/ThemeContext"

export default function MediaReviewrPage() {
    const { theme } = useTheme()
    
    return (
        <div className="flex flex-col">
            <a target="_blank" 
            href="https://github.com/03axdov/www.mediareviewr.com" 
            className={"w-full text-4xl pb-3 flex flex-row flex-wrap items-center tracking-widest border-b border-gray-600 mb-5 text-gray-200 title-" + theme}>
                MEDIAREVIEWR
                <span className={"text-gray-400 ml-3 text-gray-" + theme}>
                    (OFFLINE)
                </span>
            </a>

            <div className="w-[full] flex flex-col items-start gap-2 pb-5 border-b border-gray-600">
                <img className="border border-gray-800 rounded-lg object-cover" src={`/static/images/portfolio/MediareviewrPage.jpg`} />
            </div>

            <DetailTag icon="fa-solid fa-calendar" className="my-5 self-start">January 2022 - May 2022</DetailTag>

            <p className={"text-lg text-gray-400 text-" + theme}>
                A social media website tailored for movies, shows, etc. Allows users to create posts, groups, etc.
                See the videos on the GitHub page for some detailed functionality, as I've taken down the website.
            </p>

            <div className="flex flex-row flex-wrap items-center gap-3 mt-5 w-full">
                <a target="_blank" href="https://www.mediareviewr.com/" 
                className="flex flex-row whitespace-nowrap items-center justify-center rounded-full p-2 px-6 bg-purple-600 hover:bg-purple-700 cursor-pointer">
                    <i className="fa-solid fa-arrow-up-right-from-square text-sm mr-3" />
                    Check out the website
                </a>

                <a target="_blank" href="https://github.com/03axdov/www.mediareviewr.com" 
                className="flex flex-row whitespace-nowrap items-center justify-center rounded-full p-2 px-6 border border-gray-600 hover:border-gray-400">
                    <i className="fa-brands fa-github fa-lg mr-3" />
                    MediaReviewr GitHub
                </a>
            </div>

            <p className={"text-xl mt-10 w-full text-gray-200 pb-1 border-b border-gray-600 text-" + theme}>Frameworks and technologies used</p>
            <div className="mt-5 flex flex-row flex-wrap w-full gap-3">
                <DetailTag icon="fa-brands fa-js" tone="yellow">Javascript</DetailTag>
                <DetailTag icon="fa-brands fa-python" tone="blue">Python</DetailTag>
                <DetailTag icon="fa-brands fa-react" tone="cyan">Javascript React</DetailTag>
                <DetailTag icon="fa-brands fa-python" tone="green">Python Django</DetailTag>
                <DetailTag icon="fa-brands fa-salesforce" tone="purple">Heroku</DetailTag>
                <DetailTag icon="fa-brands fa-aws" tone="orange">AWS S3</DetailTag>
            </div>
        </div>
    )
}
