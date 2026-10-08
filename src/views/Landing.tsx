import { useTheme } from "../contexts/ThemeContext"

export default function Landing() {
    const { theme } = useTheme()
    
    return (
        <div className="flex flex-row justify-center items-center w-full px-10 min-h-[100vh]">
            <div className="flex flex-row h-auto items-start justify-center gap-x-20 gap-y-10 pb-[72px] flex-wrap">

                <div className="landing-container flex flex-col justify-start gap-y-7 min-w-[450px]">
                    <p className={"landing-header text-left text-4xl leading-20 font-medium title-" + theme}>
                        Hi, I'm<br></br>
                        <span className={"text-6xl landing-title-" + theme}>Axel Dovskog</span>
                    </p>
                    <p className={"landing-body text-gray-400 text-left text-xl max-w-[500px] leading-9 landing-body-" + theme}>
                        I'm 22 years old, and studying Computer Science and International business (completed) at Lund University.<br></br> 
                        Welcome to my personal website!
                    </p>

                </div>

                <img 
                className={"landing-image aspect-square h-[400px] max-h-[90%] rounded-full object-cover shadow-[0_0_50px_0_rgb(0,150,255,0.5)] landing-img-" + theme} 
                src="/static/images/axeldovskog.png" />
            </div>
        </div>
    )
}