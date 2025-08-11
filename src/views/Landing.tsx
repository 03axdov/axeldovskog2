export default function Landing() {
    return (
        <div className="flex flex-row justify-center items-center w-full pb-20 px-10 mt-[72px] h-[100vh]">
            <div className="flex flex-row h-auto items-start justify-center gap-x-20 gap-y-10 pb-[72px] flex-wrap">

                <div className="landing-container flex flex-col justify-start gap-y-7 min-w-[450px]">
                    <p className="text-left text-6xl leading-20">
                        Hi, I'm<br></br>
                        <span className="text-blue-400">Axel Dovskog</span>
                    </p>
                    <p className="text-left text-xl text-gray-200 max-w-[500px] leading-9">
                        I'm 21 years old, and studying Computer Science and International business at Lund University.<br></br> 
                        Welcome to my personal website!
                    </p>
                    <div className="flex flex-row flex-wrap gap-3">
                        <a href="#career" className="rounded-full border-none blue-gradient blue-gradient-hover p-2 px-10 cursor-pointer">
                            Career
                        </a>
                        <a href="#portfolio" className="rounded-full border-none purple-gradient purple-gradient-hover p-2 px-10 cursor-pointer">
                            Portfolio
                        </a>
                    </div>

                </div>

                <img className="h-[400px] max-h-[90%] rounded-full object-cover shadow-[0_0_50px_0_rgb(0,150,255,0.5)]" src="/static/images/axeldovskog.png" />
            </div>
        </div>
    )
}