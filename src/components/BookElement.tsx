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
            <div className="hoverable-artwork relative h-full rounded-md shadow-[0_8px_24px_-8px_rgba(0,0,0,0.65)]">
                <img className="block h-full w-auto rounded-[inherit]" src={"/static/images/books/" + filename} alt="" decoding="async"/>
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[inherit] bg-linear-to-r from-white/10 via-transparent to-black/10 ring-1 ring-inset ring-white/10 transition-colors duration-300 group-hover/media:ring-white/25 group-focus-visible/media:ring-white/25 motion-reduce:transition-none"/>
            </div>
        </a>
    )
}
