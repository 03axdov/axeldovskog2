import type { ReactNode } from "react"
import "./DetailTag.css"

type TagTone = "yellow" | "orange" | "blue" | "cyan" | "green" | "purple" | "pink" | "red"

interface DetailTagProps {
    icon: string
    children: ReactNode
    tone?: TagTone
    className?: string
}

export default function DetailTag({ icon, children, tone, className = "" }: DetailTagProps) {
    return (
        <span className={"detail-tag " + className} data-tone={tone}>
            <i className={icon} aria-hidden="true" />
            <span>{children}</span>
        </span>
    )
}
