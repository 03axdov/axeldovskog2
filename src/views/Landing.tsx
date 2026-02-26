import { useTheme } from "../contexts/ThemeContext"

export default function Landing() {
    const { theme } = useTheme()
    
    return (
        <div className="flex flex-row justify-center items-center w-full px-10 min-h-[100vh]">
            <div className="flex flex-row h-auto items-start justify-center gap-x-20 gap-y-10 pb-[72px] flex-wrap">

                <div className="landing-container flex flex-col justify-start gap-y-7 min-w-[450px]">
                    <p className={"landing-header text-left text-4xl leading-20 font-medium title-" + theme}>
                        Hi, I'm<br></br>
                        <span className={"text-white text-6xl landing-title-" + theme}>Axel Dovskog</span>
                    </p>
                    <p className={"landing-body text-gray-400 text-left text-xl max-w-[500px] leading-9 landing-body-" + theme}>
                        I'm 21 years old, and studying Computer Science and International business at Lund University.<br></br> 
                        Welcome to my personal website!
                    </p>
                    <div className="landing-buttons flex flex-row flex-wrap gap-3 text-md">
                        <a href="#career" 
                        className={"flex flex-row items-center rounded-full border text-blue-400 border-blue-400 hover:border-blue-600 hover:text-blue-500 p-2 px-10 cursor-pointer blue-border-" + theme + " blue-text-" + theme}>
                            <i className="fa-solid fa-user-tie mr-3"></i>
                            Career
                        </a>
                        <a href="#portfolio" 
                        className={"flex flex-row items-center rounded-full border text-purple-400 border-purple-400 hover:border-purple-600 hover:text-purple-500 p-2 px-10 cursor-pointer purple-border-" + theme + " purple-text-" + theme}>
                            <i className="fa-solid fa-briefcase mr-3"></i>
                            Portfolio
                        </a>
                    </div>

                </div>

                <img 
                className={"landing-image aspect-square h-[400px] max-h-[90%] rounded-full object-cover shadow-[0_0_50px_0_rgb(0,150,255,0.5)] landing-img-" + theme} 
                src="/static/images/axeldovskog.png" />
            </div>
        </div>
    )
}