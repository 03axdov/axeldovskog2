import { useEffect, useRef, useState } from "react";
import { Vibrant } from "node-vibrant/browser";
import AmbientImage from "./AmbientImage";

interface AlbumElementProps {
    filename: string,
    link: string,
    title: string,
    artists: string
}

export default function AlbumElement({filename, link, title, artists}: AlbumElementProps) {

    const [shadowColor, setShadowColor] = useState("rgba(0,0,0,0.3)");
    const imgRef = useRef(null);
    
    useEffect(() => {
        getMostSaturatedColor("/static/images/albums/" + filename)
        
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
        <a 
        className="hoverable-element w-[calc(20%-28px] max-w-[calc(20%-28px)] aspect-square relative flex flex-col items-center"
        target="_blank" 
        href={link}>
            <div className="pointer-events-none hoverable-element-popup absolute bg-[rgb(0,0,0,0.9)] bottom-[calc(100%-10px)] p-2 px-4 rounded-md flex flex-col">
                <p className="text-xl whitespace-nowrap">{title}</p>
                <p className="text-md text-gray-400 whitespace-nowrap">by {artists}</p>
            </div>
            <AmbientImage url={"/static/images/albums/" + filename}/>
        </a>
    )
}