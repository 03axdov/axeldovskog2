import AmbientImage from "./AmbientImage";

interface ShowElementProps {
    filename: string,
    title?: string,
}

export default function ShowElement({filename, title}: ShowElementProps) {
    return (
        <div
            className="hoverable-element book-element group/media h-[185px] w-auto relative flex flex-col items-center rounded-md"
            aria-label={"Show cover"}
        >
            {title && <div aria-hidden="true" className="hoverable-element-popup">
                <p className="text-md leading-snug text-white">{title}</p>
            </div>}
            <div className="hoverable-artwork relative h-full rounded-md">
                <AmbientImage url={"/static/images/shows/" + filename} fit="height" liftOnHover={false}/>
            </div>
        </div>
    )
}
