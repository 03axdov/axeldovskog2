import { useEffect, useRef, useState } from "react";
import { Vibrant } from "node-vibrant/browser";

interface Props {
    url: string
}

export default function AmbientImage({url}: Props) {
    const [shadowColor, setShadowColor] = useState("rgba(0,0,0,0.3)");
    const imgRef = useRef(null);
    
    useEffect(() => {
        getMostSaturatedColor(url)
        
    }, []);

    async function getMostSaturatedColor(url: string) {
        const palette = await Vibrant.from(url).getPalette();
        let best = { h: 0, s: -1, l: 0 };
        
        for (const swatch of Object.values(palette)) {
            if (!swatch) continue;
            const hsl = rgbToHsl(swatch.rgb[0], swatch.rgb[1], swatch.rgb[2]);
            if (hsl.s > best.s) best = hsl;
        }

        if (best) {
            setShadowColor("rgb(" + palette.DarkVibrant?.rgb.toString() + ")" || "")
        }
        
    }

    function rgbToHsl(r: number, g: number, b: number) {
        r /= 255; g /= 255; b /= 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        const l = (max + min) / 2;

        if (max === min) return { h: 0, s: 0, l }; // gray

        const d = max - min;
        const s = d / (1 - Math.abs(2 * l - 1));
        let h: number;

        switch (max) {
            case r: h = 60 * (((g - b) / d) % 6); break;
            case g: h = 60 * ((b - r) / d + 2); break;
            default: h = 60 * ((r - g) / d + 4); break;
        }
        if (h < 0) h += 360;
        return { h, s, l };
    }

    return (
        <div
        className="rounded-xl shadow-[0_0_50px_0px_var(--shadow-color)] hover:shadow-[0_0_50px_5px_var(--shadow-color)] hover:z-1"
        style={{ "--shadow-color": shadowColor }}>
            <img ref={imgRef} className="h-full w-full rounded-xl" src={url}/>
        </div>
    )
}