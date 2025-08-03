export default function Landing() {
    return (
        <div className="flex flex-row justify-center items-center w-full pb-20 px-10 h-[100vh]">
            <div className="flex flex-row h-auto items-start gap-x-20">

                <div className="flex flex-col justify-start gap-y-7">
                    <p className="text-left text-6xl leading-20">
                        Hi, I'm<br></br>
                        <span className="text-blue-400">Axel Dovskog</span>
                    </p>
                    <p className="text-left text-xl text-gray-200 max-w-[500px] leading-9">
                        I'm 21 years old, and studying Computer Science and International business at Lund University.<br></br> 
                        Welcome to my personal website!
                    </p>

                </div>

                <img className="h-[400px] max-h-[90%] rounded-full object-cover" src="/static/images/axeldovskog.png" />
            </div>
        </div>
    )
}