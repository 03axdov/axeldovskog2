import AlbumList from "../components/AlbumList";
import BookTierList from "../components/BookTierList";
import DetailTag from "../components/DetailTag";
import ProficiencyElement from "../components/ProficiencyElement";
import ShowTierList from "../components/ShowTierList";
import SportsMap from "../components/SportsMap";
import { useTheme } from "../contexts/ThemeContext";

export default function About() {
    const { theme } = useTheme()
    
    return (
        <div id="about" data-theme={theme} className="content-section detail-tags-section overflow-x-hidden pb-20 px-10 flex flex-col items-center">
            <p className={"text-2xl text-gray-500 mb-10 tracking-widest pt-[100px] title-" + theme}>ABOUT ME</p>
            <p className={"section-subtitle text-4xl mb-15 tracking-wider title-" + theme}>MY MAIN PROFICIENCIES</p>
            
            <div className="max-w-[100%] flex flex-row flex-wrap items-center justify-center gap-10">
                <ProficiencyElement 
                    name="Backend Development" 
                    icon={<i className="fa-solid fa-cloud-arrow-up text-5xl text-cyan-500"></i>}
                    description="I have a lot of experience developing large-scale APIs and interacting directly with databases,
                                as well as creating efficient ways of modelling data."
                    technologies={
                        <div className="mt-3 flex flex-row flex-wrap items-center gap-3 w-full">
                            <DetailTag icon="fa-brands fa-java" tone="green">Java Spring Boot</DetailTag>
                            <DetailTag icon="fa-brands fa-python" tone="blue">Python Django</DetailTag>
                            <DetailTag icon="fa-brands fa-aws" tone="orange">AWS</DetailTag>
                            <DetailTag icon="fa-solid fa-hexagon-nodes" tone="pink">Neo4j Graph Database</DetailTag>
                            <DetailTag icon="fa-brands fa-docker" tone="blue">Docker</DetailTag>

                        </div>
                    }
                />

                <ProficiencyElement 
                    name="Frontend Development" 
                    icon={<i className="fa-solid fa-pager text-5xl text-blue-500"></i>}
                    description="This includes interacting with APIs, constructing intuitive and easy-to-use pages and websites, and styling these."
                    technologies={
                        <div className="mt-3 flex flex-row flex-wrap items-center gap-3 w-full">
                            <DetailTag icon="fa-brands fa-react" tone="cyan">Javascript React</DetailTag>
                            <DetailTag icon="fa-solid fa-wind" tone="blue">TailwindCSS</DetailTag>
                            <DetailTag icon="fa-brands fa-html5" tone="orange">HTML</DetailTag>
                            <DetailTag icon="fa-brands fa-css3" tone="blue">CSS</DetailTag>

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
                            <DetailTag icon="fa-brands fa-google" tone="orange">TensorFlow</DetailTag>
                            <DetailTag icon="fa-brands fa-meta" tone="red">PyTorch</DetailTag>
                            <DetailTag icon="fa-solid fa-hexagon-nodes" tone="purple">Sklearn</DetailTag>
                        </div>
                    }
                />
            </div>

            <p className={"text-2xl text-gray-500 tracking-widest pt-[100px] title-" + theme}>SOME PERSONAL INTERESTS</p>
            <a
                href="#education"
                className={"mt-4 rounded-sm text-center text-blue-400 underline underline-offset-4 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 blue-text-" + theme}
            >
                Skip personal interests and go to education
                <i className="fa-solid fa-arrow-down ml-2" aria-hidden="true"></i>
            </a>

            <p className={"section-subtitle text-4xl mt-20 tracking-wider title-" + theme}>SOME GREAT BOOKS</p>
            <p className={"text-lg text-gray-400 mt-5 mb-10 text-" + theme}>
                I really like reading, mainly Fantasy and some Sci-Fi.<br></br>
                Here are some of by favorite book series.
            </p>
            <BookTierList />

            <p className={"section-subtitle text-4xl mt-40 tracking-wider title-" + theme}>MUSIC I LIKE</p>
            <p className={"text-lg text-gray-400 mt-5 mb-10 text-" + theme}>
                While not as impactful to me as certain books, here are some albums I really like.
            </p>
            <AlbumList />

            <p className={"section-subtitle text-4xl mt-40 tracking-wider title-" + theme}>SHOWS I LIKE</p>
            <p className={"text-lg text-gray-400 mt-5 mb-10 text-" + theme}>
               Some shows I like, why not?
            </p>
            <ShowTierList />

            <p className={"section-subtitle text-4xl mt-40 tracking-wider title-" + theme}>SPORTS</p>
            <p className={"text-lg text-gray-400 mt-5 mb-10 text-center text-" + theme}>
                Here are some sports teams I like.<br />
                Not super invested but follow the NHL and NFL a bit.
            </p>
            <SportsMap />

        </div>
    )
}
