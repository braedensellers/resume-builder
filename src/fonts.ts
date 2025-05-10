import { Font } from "@react-pdf/renderer"

Font.register({
    family: "Arial",
    fonts: [
        { src: "public/fonts/arial.ttf", fontWeight: "normal" },
        { src: "public/fonts/arialbd.ttf", fontWeight: "bold" },
        { src: "public/fonts/ariali.ttf", fontStyle: "italic" },
        { src: "public/fonts/arialbi.ttf", fontWeight: "bold", fontStyle: "italic" },
    ],
})
Font.register({
    family: "Calibri",
    fonts: [
        { src: "public/fonts/calibri.ttf", fontWeight: "normal" },
        { src: "public/fonts/calibrib.ttf", fontWeight: "bold" },
        { src: "public/fonts/calibrii.ttf", fontStyle: "italic" },
        { src: "public/fonts/calibribi.ttf", fontWeight: "bold", fontStyle: "italic" },
    ],
})
Font.register({
    family: "Times New Roman",
    fonts: [
        { src: "public/fonts/times.ttf", fontWeight: "normal" },
        { src: "public/fonts/timesbd.ttf", fontWeight: "bold" },
        { src: "public/fonts/timesi.ttf", fontStyle: "italic" },
        { src: "public/fonts/timesbi.ttf", fontWeight: "bold", fontStyle: "italic" },
    ],
})