import AlbumList from "../components/AlbumList";
import BookTierList from "../components/BookTierList";
import ProficiencyElement from "../components/ProficiencyElement";

export default function About() {
    return (
        <div id="about" className="px-10 flex flex-col items-center">
            <p className="text-2xl text-gray-500 mb-10 tracking-widest">ABOUT ME</p>
            <p className="text-4xl mb-15 tracking-wider">MY MAIN PROFICIENCIES</p>
            
            <div className="flex flex-row flex-wrap items-center justify-center gap-10">
                <ProficiencyElement 
                    name="Backend Development" 
                    icon={<i className="fa-solid fa-cloud-arrow-up text-5xl text-cyan-500"></i>}
                    description="I have a lot of experience developing large-scale APIs and interacting directly with databases,
                                as well as creating efficient ways of modelling data."
                    technologies={
                        <div className="mt-3 flex flex-row flex-wrap items-center gap-3 w-full">
                            <p className="text-md p-1 px-3 text-md flex flex-row items-center rounded-md border border-green-400 text-green-400">
                                <i className="fa-brands fa-java fa-md mr-2"></i>
                                Java Spring Boot
                            </p>
                            <p className="text-md p-1 px-3 text-md flex flex-row items-center rounded-md border border-blue-500 text-blue-500">
                                <i className="fa-brands fa-python fa-md mr-2"></i>
                                Python Django
                            </p>
                            <p className="text-md p-1 px-3 text-md flex flex-row items-center rounded-md border border-orange-400 text-orange-400">
                                <i className="fa-brands fa-aws fa-md mr-2"></i>
                                AWS
                            </p>
                            <p className="text-md p-1 px-3 text-md flex flex-row items-center rounded-md border border-pink-500 text-pink-500">
                                <i className="fa-solid fa-hexagon-nodes fa-md mr-2"></i>
                                Neo4j Graph Database
                            </p>

                        </div>
                    }
                />

                <ProficiencyElement 
                    name="Frontend Development" 
                    icon={<i className="fa-solid fa-pager text-5xl text-blue-500"></i>}
                    description="This includes interacting with APIs, constructing intuitive and easy-to-use pages and websites, and styling these."
                    technologies={
                        <div className="mt-3 flex flex-row flex-wrap items-center gap-3 w-full">
                            <p className="text-md p-1 px-3 text-md flex flex-row items-center rounded-md border border-cyan-400 text-cyan-400">
                                <i className="fa-brands fa-react fa-md mr-2"></i>
                                Javascript React
                            </p>
                            <p className="text-md p-1 px-3 text-md flex flex-row items-center rounded-md border border-blue-300 text-blue-300">
                                <i className="fa-solid fa-wind fa-md mr-2"></i>
                                TailwindCSS
                            </p>
                            <p className="text-md p-1 px-3 text-md flex flex-row items-center rounded-md border border-orange-500 text-orange-500">
                                <i className="fa-brands fa-html5 fa-md mr-2"></i>
                                HTML
                            </p>
                            <p className="text-md p-1 px-3 text-md flex flex-row items-center rounded-md border border-blue-400 text-blue-400">
                                <i className="fa-brands fa-css3 fa-md mr-2"></i>
                                CSS
                            </p>

                        </div>
                    }
                />

                <ProficiencyElement 
                    name="Machine Learning" 
                    icon={<i className="fa-solid fa-hexagon-nodes text-5xl text-purple-500"></i>}
                    description="I have built a lot of machine learning models, as well as constructed my own machine learning framework
                    and a website that allows users to build models without having to code (see Projects)."
                    technologies={
                        <div className="mt-3 flex flex-row flex-wrap items-center gap-3 w-full">
                            <p className="text-md p-1 px-3 text-md flex flex-row items-center rounded-md border border-orange-500 text-orange-500">
                                <i className="fa-brands fa-google fa-md mr-2"></i>
                                TensorFlow
                            </p>
                            
                        </div>
                    }
                />
            </div>

            <p className="text-4xl mt-40 tracking-wider">SOME GREAT BOOKS</p>
            <p className="text-lg text-gray-400 mt-5 mb-10">
                I really like reading, mainly Fantasy and some Sci-Fi.<br></br>
                Here are some of by favorite book series.
            </p>
            <BookTierList />

            <p className="text-4xl mt-40 tracking-wider">MUSIC I LIKE</p>
            <p className="text-lg text-gray-400 mt-5 mb-10">
                While not as impactful to me as certain books, here are some albums I really like.
            </p>
            <AlbumList />
        </div>
    )
}