import { useEffect, useState, type CSSProperties } from "react";
import { Vibrant } from "node-vibrant/browser";

interface Props {
    url: string;
    alt?: string;
    liftOnHover?: boolean;
}

type CSSVars = CSSProperties & {
  [key: `--${string}`]: string | number;
};


export default function AmbientImage({ url, alt = "", liftOnHover = true }: Props) {
    const [paletteColor, setPaletteColor] = useState<{ url: string; rgb: string }>();
    const shadowColor = paletteColor?.url === url ? paletteColor.rgb : "100 116 139";

    useEffect(() => {
        let cancelled = false;

        async function extractColor() {
            try {
                const palette = await Vibrant.from(url).getPalette();
                const swatch = palette.Vibrant ?? palette.LightVibrant
                    ?? palette.DarkVibrant ?? palette.Muted ?? palette.DarkMuted
                    ?? palette.LightMuted;

                if (!cancelled && swatch) {
                    setPaletteColor({ url, rgb: swatch.rgb.map(Math.round).join(" ") });
                }
            } catch {
                // Keep the neutral glow when an image's palette cannot be read.
            }
        }

        void extractColor();
        return () => { cancelled = true; };
    }, [url]);

    return (
        <div
            className={`group/ambient relative isolate w-full rounded-xl transition-transform duration-300 ease-out motion-reduce:transform-none motion-reduce:transition-none ${liftOnHover ? "hover:z-10 hover:-translate-y-1 hover:scale-[1.025]" : ""}`}
            style={{ "--shadow-color": shadowColor } as CSSVars}
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-3 -z-10 rounded-[inherit] bg-[rgb(var(--shadow-color)/0.35)] opacity-60 blur-2xl transition-opacity duration-500 group-hover/ambient:opacity-100 group-hover/media:opacity-100 group-focus-visible/media:opacity-100 motion-reduce:transition-none"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-3 -bottom-3 -z-10 h-1/2 rounded-full bg-[rgb(var(--shadow-color)/0.5)] blur-xl"
            />
            <img
                className="relative block h-full w-full rounded-[inherit] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.65)]"
                src={url}
                alt={alt}
                decoding="async"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[inherit] bg-linear-to-b from-white/10 via-transparent to-black/10 ring-1 ring-inset ring-white/10 transition-colors duration-300 group-hover/ambient:ring-white/25 group-hover/media:ring-white/25 group-focus-visible/media:ring-white/25 motion-reduce:transition-none"
            />
        </div>
    );
}
