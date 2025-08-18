import { useState } from "react"
import { useTheme } from "../contexts/ThemeContext"

export default function ThemeModal() {
    const { theme, setTheme } = useTheme()
    const [isExpanded, setIsExpanded] = useState(true)

    function getThemeElement(name: string, color: string, icon: string) {
        return (
            <div className={"bg-third rounded-md p-2 px-4 flex flex-row select-none items-center cursor-pointer border element-border-" + theme + " " + theme + "-" + name.toLowerCase() + "-theme-button " +
                (theme == name.toLowerCase() ? `border-${color} text-${color}` : "border-[rgb(0,0,0,0)] hover:border-gray-600 text-gray-400")
            }
            onClick={() => setTheme(name.toLowerCase())}>
                <i className={icon + " mr-2"}></i>
                <p className="text-md">{name}</p>
            </div>
        )
    }
    
    return (<>
        <div className={"theme-modal border border-gray-600 z-10 fixed bottom-3 right-3 p-4 bg-secondary rounded-md theme-modal-" + theme + (!isExpanded ? " cursor-pointer": "")}
        onClick={() => setIsExpanded(true)}>
            <div className="flex flex-col max-w-[350px] gap-y-3">
                {isExpanded && <>
                <i className={"fa-solid fa-minus p-1 rounded-md cursor-pointer absolute top-1 right-1 text-gray-400 text-" + theme + (theme == "dark" ? " hover:bg-gray-900 " : " hover:bg-gray-300 ") }
                onClick={(e) => {
                    e.stopPropagation()
                    setIsExpanded(false)
                }}></i>

                <p className={"flex flex-row items-center text-xl pb-1 border-b text-white border-gray-700 w-full text-" + theme}>
                    <i className={"fa-solid fa-palette mr-2 fa-sm text-gray-400 text-gray-" + theme}></i>
                    Themes
                </p>
                <div className="flex flex-row items-center flex-wrap gap-3">
                    {getThemeElement("Dark", "purple-500", "fa-solid fa-moon")}
                    {getThemeElement("Light", "blue-400", "fa-solid fa-sun")}

                    {/* getThemeElement("Sci-Fi", "blue-400", "fa-solid fa-jedi") */}
                </div>
                </>}
                {!isExpanded && <i className={"fa-solid fa-palette fa-md text-gray-400 text-gray-" + theme}></i>}
            </div>
        </div>
    </>)
}