import { ReportData } from "./ReportData";

const Report = () => {
    return ( 
        <div className="report">
             <div className="content-title">
                <p>Report</p>
            </div>
            <div className="report-container">
                {ReportData.map((report, key)=>{
                    return(
                        <div 
                            className="report-preview" 
                            key={key}>
                            <div className="report-inner">
                                <div className="report-icon">{report.icon}</div>
                                <div className="report-content">
                                    <p className="report-name">{report.title}</p>
                                    <p className="report-price">{report.price}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
     );
}
 
export default Report;