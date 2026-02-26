import { useTheme } from "../contexts/ThemeContext"

interface ProficiencyProps {
    name: string
    icon: React.JSX.Element,
    description: string
    technologies: React.JSX.Element
}

export default function ProficiencyElement({name, icon, description, technologies}: ProficiencyProps) {
    const { theme } = useTheme()
    
    return (
        <div className={"p-10 rounded-md bg-secondary max-w-[100%] w-[450px] min-h-[450px] flex flex-col items-center proficiency-" + theme}>
            {icon}
            <p className={"text-2xl mt-3 proficiency-title title-" + theme}>{name}</p>
            <p className="proficiency-description mt-10 text-gray-400">
                {description}
            </p>

            <p className="proficiency-technologies mt-7 w-full text-gray-400 pb-1 border-b border-gray-700">Frameworks & Technologies I've worked with:</p>
            {technologies}
        </div>
    )
}