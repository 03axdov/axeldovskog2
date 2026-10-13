import DetailTag from "../DetailTag"
import { useState } from "react"
import PortfolioImages from "../PortfolioImages"
import { useTheme } from "../../contexts/ThemeContext"

type ImageType = 1 | 2 | 3 | 4

export default function DalinarPage() {
    const { theme } = useTheme()

    const [currentImages, setCurrentImages] = useState<ImageType[]>([1, 2, 3, 4])

    function imageOnClick(clickedIdx: number) {
        let newPrimary = currentImages[clickedIdx]
        let temp = [...currentImages]
        temp[clickedIdx] = temp[0]
        temp[0] = newPrimary
        setCurrentImages(temp)
    }

    return (
        <div className="flex flex-col">
            <a target="_blank" href="https://www.dalinar.net" 
            className={"w-full text-4xl pb-3 flex flex-row items-center tracking-widest border-b border-gray-600 mb-5 text-gray-200 title-" + theme}>
                DALINAR
                <i className="fa-solid fa-arrow-up-right-from-square text-gray-400 text-sm ml-3" />
            </a>
            
            <PortfolioImages currentImages={currentImages} imageOnClick={imageOnClick} />

            <DetailTag icon="fa-solid fa-calendar" className="my-5 self-start">September 2024 - May 2025</DetailTag>

            <p className={"text-lg text-gray-400 text-" + theme}>
                A website that allows users to create machine learning datasets and models without having to code.
                Users are then able to export models or train them on datasets, evaluate models, and use the models to predict data.<br></br>
                This project taught me a lot about working on large-scale projects, using APIs for more complex scenarios, e.g. using tasks, as well as web development & machine-learning in general.
            </p>
            <div className="flex flex-row flex-wrap items-center gap-3 mt-5 w-full">
                <a target="_blank" href="https://www.dalinar.net" 
                className="flex flex-row items-center justify-center whitespace-nowrap rounded-full p-2 px-6 bg-blue-600 hover:bg-blue-700 cursor-pointer">
                    <i className="fa-solid fa-arrow-up-right-from-square text-sm mr-3" />
                    Check out the website
                </a>

                <a target="_blank" href="https://github.com/03axdov/Dalinar" 
                className="flex flex-row items-center justify-center whitespace-nowrap rounded-full p-2 px-6 border border-gray-600 hover:border-gray-400">
                    <i className="fa-brands fa-github fa-lg mr-3" />
                    Dalinar GitHub
                </a>
            </div>
            

            <p className={"text-xl w-full mt-10 mb-2 text-gray-200 text-" + theme}>Tutorial</p>
            <p className={"mb-5 text-lg text-gray-400 text-gray-" + theme}>
                Here's a brief tutorial, please excuse the audio :)
            </p>

            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0}}>
                <iframe
                    src="https://www.youtube.com/embed/tQ2lUxumQV4"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded YouTube"
                    className="border border-gray-600 rounded-lg"
                    style={{
                    position: "absolute",
                    top: 0,
                    left: "0%",
                    width: "100%",
                    maxWidth: "80%",
                    height: "80%"
                    }}
                ></iframe>
            </div>

            <p className={"text-xl w-full text-gray-200 pb-1 border-b border-gray-600 text-" + theme}>Frameworks and technologies used</p>
            <div className="mt-5 flex flex-row flex-wrap w-full gap-3">
                <DetailTag icon="fa-brands fa-js" tone="yellow">Javascript</DetailTag>
                <DetailTag icon="fa-brands fa-python" tone="blue">Python</DetailTag>
                <DetailTag icon="fa-brands fa-react" tone="cyan">Javascript React</DetailTag>
                <DetailTag icon="fa-brands fa-python" tone="green">Python Django</DetailTag>
                <DetailTag icon="fa-brands fa-google" tone="orange">Tensorflow</DetailTag>
                <DetailTag icon="fa-brands fa-salesforce" tone="purple">Heroku</DetailTag>
                <DetailTag icon="fa-brands fa-aws" tone="orange">AWS S3</DetailTag>
                <DetailTag icon="fa-brands fa-aws" tone="orange">AWS EC2</DetailTag>
            </div>
        </div>
    )
}
