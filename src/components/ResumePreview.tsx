import { PDFViewer } from "@react-pdf/renderer";
import ResumeDocument from "./ResumeDocument";

const ResumePreview = ({ data }: { data: any }) => {
    return (
        <PDFViewer style={{ width: "100%", height: "100%" }}>
            <ResumeDocument data={data} />
        </PDFViewer>
    );
};

export default ResumePreview;