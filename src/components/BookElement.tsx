interface BookElementProps {
    filename: string,
    link?: string,
    title?: string,
    authors?: string
}

export default function BookElement({filename, title, authors}: BookElementProps) {
    return (
        <a className="hoverable-element book-element h-[185px] w-auto relative flex flex-col items-center" target="_blank">
            <div className="pointer-events-none hoverable-element-popup absolute
             bg-[rgb(0,0,0,0.9)] bottom-[calc(100%-10px)] p-2 px-4 rounded-md flex flex-col border border-gray-700">
                <p className="text-xl whitespace-nowrap">{title}</p>
                <p className="text-md text-gray-400 whitespace-nowrap">by {authors}</p>
            </div>
            <img className="h-full" src={"/static/images/books/" + filename}/>
        </a>
    )
}