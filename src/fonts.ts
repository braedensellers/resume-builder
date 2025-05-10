import { Font } from "@react-pdf/renderer"

// const base_url: string = import.meta.env.BASE_URL
// const fonts_url: string = `${base_url}/fonts/`

Font.register({
    family: "Arial",
    fonts: [
        { src: `/fonts/arial.ttf`, fontWeight: "normal" },
        { src: `/fonts/arialbd.ttf`, fontWeight: "bold" },
        { src: `/fonts/ariali.ttf`, fontStyle: "italic" },
        { src: `/fonts/arialbi.ttf`, fontWeight: "bold", fontStyle: "italic" },
    ],
});
Font.register({
    family: "Calibri",
    fonts: [
        { src: `/fonts/calibri.ttf`, fontWeight: "normal" },
        { src: `/fonts/calibrib.ttf`, fontWeight: "bold" },
        { src: `/fonts/calibrii.ttf`, fontStyle: "italic" },
        { src: `/fonts/calibribi.ttf`, fontWeight: "bold", fontStyle: "italic" },
    ],
})
Font.register({
    family: "Times New Roman",
    fonts: [
        { src: `/fonts/times.ttf`, fontWeight: "normal" },
        { src: `/fonts/timesbd.ttf`, fontWeight: "bold" },
        { src: `/fonts/timesi.ttf`, fontStyle: "italic" },
        { src: `/fonts/timesbi.ttf`, fontWeight: "bold", fontStyle: "italic" },
    ],
})