export default function Navbar() {
    return (
        <div className="navbar z-20 fixed top-0 left-0 w-full flex flex-row items-center justify-between p-4 px-8 bg-main">

            <div className="h-full flex flex-row items-center gap-x-10">
                <a href="#about" className="text-gray-300 hover:text-white cursor-pointer text-lg p-1 px-3 rounded-full ">
                    About
                </a>
                <a href="#education" className="text-gray-300 hover:text-white cursor-pointer text-lg p-1 px-3 rounded-full">
                    Education
                </a>
                <a href="#tests" className="text-gray-300 hover:text-white cursor-pointer text-lg p-1 px-3 rounded-full">
                    Tests
                </a>
                <a href="#career" className="text-gray-300 hover:text-white cursor-pointer text-lg p-1 px-3 rounded-full">
                    Career
                </a>
                <a href="#portfolio" className="text-gray-300 hover:text-white cursor-pointer text-lg p-1 px-3 rounded-full">
                    Portfolio
                </a>
            </div>

            <a href="#contact" className="rounded-full border-none blue-gradient blue-gradient-hover p-2 px-6 cursor-pointer">
                Contact me
            </a>
        </div>
    )
}