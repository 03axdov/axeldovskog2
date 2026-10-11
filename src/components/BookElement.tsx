import AmbientImage from "./AmbientImage";

interface BookElementProps {
    filename: string,
    link?: string,
    title?: string,
    authors?: string
}

export default function BookElement({filename, link, title, authors}: BookElementProps) {
    return (
        <a
            className="hoverable-element book-element group/media h-[185px] w-auto relative flex flex-col items-center rounded-md"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={link ? undefined : 0}
            aria-label={title ? `${title}${authors ? ` by ${authors}` : ""}` : "Book cover"}
        >
            {title && <div aria-hidden="true" className="hoverable-element-popup">
                <p className="text-md leading-snug text-white">{title}</p>
                {authors && <p className="mt-1 text-sm leading-relaxed text-gray-400">by {authors}</p>}
            </div>}
            <div className="hoverable-artwork relative h-full rounded-md">
                <AmbientImage url={"/static/images/books/" + filename} fit="height" liftOnHover={false}/>
            </div>
        </a>
    )
}
