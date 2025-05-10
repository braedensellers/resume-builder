import { PDFViewer } from "@react-pdf/renderer";
import ResumeDocument from "./ResumeDocument";

const ResumePreview = ({ data, fontFamily }: { data: any, fontFamily: string }) => {
    return (
        <PDFViewer style={{ width: "100%", height: "100%" }}>
            <ResumeDocument data={data} fontFamily={fontFamily}/>
        </PDFViewer>
    );
};

export default ResumePreview;