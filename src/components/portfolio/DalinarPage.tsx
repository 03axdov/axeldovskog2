import { useState } from "react"

type ImageType = 1 | 2 | 3 | 4

export default function DalinarPage() {

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
            <a target="_blank" href="https://www.dalinar.net" className="w-full text-4xl pb-3 flex flex-row items-center tracking-widest border-b border-gray-600 mb-5 text-gray-200">
                DALINAR
                <i className="fa-solid fa-arrow-up-right-from-square text-gray-400 text-sm ml-3" />
            </a>
            
            <div className=" flex flex-col items-center w-full gap-2 pb-5 border-b border-gray-600">
                <img className="w-[100%] border border-gray-800 rounded-lg h-full object-cover" src={`/static/images/portfolio/dalinar${currentImages[0]}.jpg`} />

                <div className="w-[100%] grid grid-cols-3 gap-2">
                    <img className="w-full border border-gray-800 aspect-[4/3] object-cover rounded-lg cursor-pointer" 
                    onClick={() => imageOnClick(1)} 
                    src={`/static/images/portfolio/dalinar${currentImages[1]}.jpg`} />

                    <img className="w-full border border-gray-800 aspect-[4/3] object-cover rounded-lg cursor-pointer" 
                    onClick={() => imageOnClick(2)} 
                    src={`/static/images/portfolio/dalinar${currentImages[2]}.jpg`} />

                    <img className="w-full border border-gray-800 aspect-[4/3] object-cover rounded-lg cursor-pointer" 
                    onClick={() => imageOnClick(3)}
                    src={`/static/images/portfolio/dalinar${currentImages[3]}.jpg`} />
                </div>
            </div>

            <p className="text-lg my-5 p-2 px-4 rounded-md bg-third mr-auto text-gray-400 flex flex-row items-center">
                <i className="fa-solid fa-calendar text-sm mr-3" />
                September 2024 - May 2025
            </p>

            <p className="text-lg text-gray-400">
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
            

            <p className="text-xl w-full mt-10 mb-2 text-gray-200">Tutorial</p>
            <p className="mb-5 text-lg text-gray-400">
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

            <p className="text-xl w-full text-gray-200 pb-1 border-b border-gray-600">Frameworks and technologies used</p>
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
                <p className="text-lg p-1 px-3 text-md flex flex-row items-center rounded-md border border-orange-400 text-orange-400">
                    <i className="fa-brands fa-google fa-lg mr-3"></i>
                    Tensorflow
                </p>
                <p className="text-lg p-1 px-3 text-md flex flex-row items-center rounded-md border border-purple-400 text-purple-400">
                    <i className="fa-brands fa-salesforce fa-lg mr-3"></i>
                    Heroku
                </p>
                <p className="text-lg p-1 px-3 text-md flex flex-row items-center rounded-md border border-orange-400 text-orange-400">
                    <i className="fa-brands fa-aws fa-lg mr-3"></i>
                    AWS S3
                </p>
                <p className="text-lg p-1 px-3 text-md flex flex-row items-center rounded-md border border-orange-400 text-orange-400">
                    <i className="fa-brands fa-aws fa-lg mr-3"></i>
                    AWS EC2
                </p>
            </div>
        </div>
    )
}