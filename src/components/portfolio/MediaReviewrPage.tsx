export default function MediaReviewrPage() {
    return (
        <div className="flex flex-col">
            <a target="_blank" href="https://github.com/03axdov/www.mediareviewr.com" className="w-full text-4xl pb-3 flex flex-row items-center tracking-widest border-b border-gray-600 mb-5 text-gray-200">
                MEDIAREVIEWR
                <span className="text-gray-400 ml-3">
                    (OFFLINE)
                </span>
            </a>

            <div className="w-[full] flex flex-col items-start gap-2 pb-5 border-b border-gray-600">
                <img className="w-full border border-gray-800 rounded-lg h-full object-cover" src={`/static/images/portfolio/MediareviewrPage.jpg`} />
            </div>

            <p className="text-lg my-5 p-2 px-4 rounded-md bg-third mr-auto text-gray-400 flex flex-row items-center">
                <i className="fa-solid fa-calendar text-sm mr-3" />
                January 2022 - May 2022
            </p>

            <p className="text-lg text-gray-400">
                A social media website tailored for movies, shows, etc. Allows users to create posts, groups, etc.
                See the videos on the GitHub page for some detailed functionality, as I've taken down the website.
            </p>

            <div className="flex flex-row items-center gap-x-3 mt-5 w-full">
                <a target="_blank" href="https://www.mediareviewr.com/" 
                className="flex flex-row items-center justify-center rounded-full p-2 px-6 purple-gradient purple-gradient-hover cursor-pointer">
                    <i className="fa-solid fa-arrow-up-right-from-square text-sm mr-3" />
                    Check out the website
                </a>

                <a target="_blank" href="https://github.com/03axdov/www.mediareviewr.com" 
                className="flex flex-row items-center justify-center rounded-full p-2 px-6 border border-gray-600 hover:border-gray-400">
                    <i className="fa-brands fa-github fa-lg mr-3" />
                    MediaReviewr GitHub
                </a>
            </div>

            <p className="text-xl mt-10 w-full text-gray-200 pb-1 border-b border-gray-600">Frameworks and technologies used</p>
            <div className="mt-5 flex flex-row flex-wrap w-full gap-3">
                <p className="text-lg p-1 px-3 text-md flex flex-row items-center rounded-md border border-yellow-400 text-yellow-400">
                    <i className="fa-brands fa-js fa-lg mr-3"></i>
                    Javascript
                </p>
                <p className="text-lg p-1 px-3 text-md flex flex-row items-center rounded-md border border-blue-400 text-blue-400">
                    <i className="fa-brands fa-python fa-lg mr-3"></i>
                    Python
                </p>
                <p className="text-lg p-1 px-3 text-md flex flex-row items-center rounded-md border border-cyan-400 text-cyan-400">
                    <i className="fa-brands fa-react fa-lg mr-3"></i>
                    Javascript React
                </p>
                <p className="text-lg p-1 px-3 text-md flex flex-row items-center rounded-md border border-green-300 text-green-300">
                    <i className="fa-brands fa-python fa-lg mr-3"></i>
                    Python Django
                </p>
                <p className="text-lg p-1 px-3 text-md flex flex-row items-center rounded-md border border-purple-400 text-purple-400">
                    <i className="fa-brands fa-salesforce fa-lg mr-3"></i>
                    Heroku
                </p>
                <p className="text-lg p-1 px-3 text-md flex flex-row items-center rounded-md border border-orange-400 text-orange-400">
                    <i className="fa-brands fa-aws fa-lg mr-3"></i>
                    AWS S3
                </p>
            </div>
        </div>
    )
}