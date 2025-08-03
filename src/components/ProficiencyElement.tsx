interface ProficiencyProps {
    name: string
    icon: React.JSX.Element,
    description: string
    technologies: React.JSX.Element
}

export default function ProficiencyElement({name, icon, description, technologies}: ProficiencyProps) {
    return (
        <div className="p-10 rounded-md bg-secondary w-[425px] h-[450px] flex flex-col items-center">
            {icon}
            <p className="text-2xl mt-3">{name}</p>
            <p className="mt-10 text-gray-400">
                {description}
            </p>

            <p className="mt-7 w-full text-gray-400 pb-1 border-b border-gray-700">Frameworks & Technologies I've worked with:</p>
            {technologies}
        </div>
    )
}