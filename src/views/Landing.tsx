export default function Landing() {
    return (
        <div className="flex flex-row justify-center pt-40 w-full">
            <div className="flex flex-row items-center justify-between gap-x-10 border border-gray-700 rounded-2xl p-10">
                <div className="flex flex-row gap-x-5">
                    <img className="h-[420px] w-[200px] rounded-md object-cover" src="/static/images/AxelDovskogSpain.jpg" />
                    
                    <div className="flex flex-col gap-y-5">
                        <img className="min-w-[350px] h-[200px] rounded-md object-cover" src="/static/images/StAnton.jpg" />
                        <img className="min-w-[350px] h-[200px] rounded-md object-cover" src="/static/images/axeldovskog.png" />
                        
                    </div>
                </div>

                <div className="flex flex-col h-full justify-start gap-y-7">
                    <h1 className="text-left text-6xl text-gray-400 ">Hi, I'm <span className="text-white">Axel Dovskog</span></h1>
                    <p className="text-left text-lg text-gray-200">
                        I'm 21 years old, and studying Computer Science and International business at Lund University.<br></br> 
                        Welcome to my personal website!
                    </p>
                </div>
            </div>
        </div>
    )
}