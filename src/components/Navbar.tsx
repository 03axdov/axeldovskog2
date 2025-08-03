export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 w-full flex flex-row items-center justify-between p-4 px-8 bg-main">

            <div className="h-full flex flex-row items-center gap-x-10">
                <div className="text-gray-300 hover:text-white cursor-pointer text-lg p-1 px-3 rounded-full ">
                    Start
                </div>
                <div className="text-gray-300 hover:text-white cursor-pointer text-lg p-1 px-3 rounded-full ">
                    About me
                </div>
                <div className="text-gray-300 hover:text-white cursor-pointer text-lg p-1 px-3 rounded-full">
                    Career
                </div>
                <div className="text-gray-300 hover:text-white cursor-pointer text-lg p-1 px-3 rounded-full">
                    Portfolio
                </div>
            </div>

            <button className="rounded-full border-none bg-blue-500 p-2 px-6 cursor-pointer hover:bg-blue-600">
                Contact me
            </button>
        </div>
    )
}