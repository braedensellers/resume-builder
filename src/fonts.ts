import { Font } from "@react-pdf/renderer"

const base_url: string = import.meta.env.BASE_URL
const fonts_url: string = `${base_url}/fonts/`

Font.register({
    family: "Arial",
    fonts: [
        { src: `${fonts_url}arial.ttf`, fontWeight: "normal" },
        { src: `${fonts_url}arialbd.ttf`, fontWeight: "bold" },
        { src: `${fonts_url}ariali.ttf`, fontStyle: "italic" },
        { src: `${fonts_url}arialbi.ttf`, fontWeight: "bold", fontStyle: "italic" },
    ],
});
Font.register({
    family: "Calibri",
    fonts: [
        { src: `${fonts_url}calibri.ttf`, fontWeight: "normal" },
        { src: `${fonts_url}calibrib.ttf`, fontWeight: "bold" },
        { src: `${fonts_url}calibrii.ttf`, fontStyle: "italic" },
        { src: `${fonts_url}calibribi.ttf`, fontWeight: "bold", fontStyle: "italic" },
    ],
})
Font.register({
    family: "Times New Roman",
    fonts: [
        { src: `${fonts_url}times.ttf`, fontWeight: "normal" },
        { src: `${fonts_url}timesbd.ttf`, fontWeight: "bold" },
        { src: `${fonts_url}timesi.ttf`, fontStyle: "italic" },
        { src: `${fonts_url}timesbi.ttf`, fontWeight: "bold", fontStyle: "italic" },
    ],
})