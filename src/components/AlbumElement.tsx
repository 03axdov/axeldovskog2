import AmbientImage from "./AmbientImage";

interface AlbumElementProps {
    filename: string,
    link: string,
    title: string,
    artists: string
}

export default function AlbumElement({filename, title, artists}: AlbumElementProps) {
    

    return (
        <a 
        className="album-element hoverable-element w-[calc(20%-28px] max-w-[calc(20%-28px)] aspect-square relative flex flex-col items-center"
        target="_blank" 
       >
            <div className="pointer-events-none hoverable-element-popup absolute border border-gray-700 bg-[rgb(0,0,0,0.9)] bottom-[calc(100%-10px)] p-2 px-4 rounded-md flex flex-col">
                <p className="text-xl whitespace-nowrap">{title}</p>
                <p className="text-md text-gray-400 whitespace-nowrap">by {artists}</p>
            </div>
            <AmbientImage url={"/static/images/albums/" + filename}/>
        </a>
    )
}