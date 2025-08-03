interface AlbumElementProps {
    filename: string,
    link: string,
    title: string,
    artists: string
}

export default function AlbumElement({filename, link, title, artists}: AlbumElementProps) {
    return (
        <a className="hoverable-element w-[calc(20%-20px] max-w-[calc(20%-20px)] aspect-square relative flex flex-col items-center" target="_blank" href={link}>
            <div className="pointer-events-none hoverable-element-popup absolute bg-[rgb(0,0,0,0.9)] bottom-[calc(100%-10px)] p-2 px-4 rounded-md flex flex-col">
                <p className="text-xl whitespace-nowrap">{title}</p>
                <p className="text-md text-gray-400 whitespace-nowrap">by {artists}</p>
            </div>
            <img className="h-full w-full rounded-md" src={"/static/images/albums/" + filename}/>
        </a>
    )
}