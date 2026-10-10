import AmbientImage from "./AmbientImage";

interface AlbumElementProps {
    filename: string,
    title: string,
    artists: string
}

export default function AlbumElement({filename, title, artists}: AlbumElementProps) {
    

    return (
        <div
        className="album-element hoverable-element group/media w-[calc(20%-28px)] max-w-[calc(20%-28px)] aspect-square relative flex flex-col items-center rounded-xl"
        tabIndex={0}
        aria-label={`${title} by ${artists}`}
       >
            <div aria-hidden="true" className="hoverable-element-popup">
                <p className="text-md leading-snug text-white">{title}</p>
                <p className="mt-1 text-sm leading-relaxed text-gray-400">by {artists}</p>
            </div>
            <div className="hoverable-artwork w-full rounded-xl">
                <AmbientImage url={"/static/images/albums/" + filename} liftOnHover={false}/>
            </div>
        </div>
    )
}
