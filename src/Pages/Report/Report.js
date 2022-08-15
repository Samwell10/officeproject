import '../Report/Report.css';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import { ActiveData } from './ActiveData';
import { ReportData } from '../Home/ReportData';
import { PurchaseData } from './PurchaseData';
import Piechart from './Piechart';
import { useState } from 'react';
import { ChartData } from './ChartData';
// import Sidebar from '../Components/Sidebar';
// import Topbar from '../Components/Topbar';
const Report = () => {
    const [userData, setUserData] = useState({
      labels: ChartData.map((data) => data.name),
      datasets: [{
        label: "",
        data: ChartData.map((data) => data.total),
        backgroundColor: ["#861F41","#975C70","#171717"],
      }]
    })
    // const config ={
    //   type: 'Doughnut',
    //   options:{
    //     plugins:{
    //       legend:{
    //         label:{
    //           usePointStyles: true,
    //           pointStyle: 'circle'
    //         }
    //       }
    //     }
    //   }
    // }
    return ( 
        <div className="reportmain">
          <div className="report-header">
            <div className="report-header-outer">
                <div className='report-header-inner'>
                  <div className="reporticon">
                    <span><ChevronLeftOutlinedIcon/></span>
                  </div>
                  <div className="reportTitle">
                      <span><BarChartIcon/></span>
                      <p>Report</p>
                  </div>
                  
                </div>
              
                <div className="reportEdit">
                  <p>Edit</p>
                </div>
            </div>
          </div>
          <div className="report-content-outer">
              <div className="report-content">
                <div className="active-data">
                  {ActiveData.map((active, key)=>{
                      return(
                          <div 
                                className="active-preview" 
                                key={key}>
                              <div className="active-details">
                                  <p className="active-num">{active.activecustomer}</p>
                                  <p className="active-name">{active.title}</p>
                              </div>
                          </div>
                      )})}  
                </div>
                <div className='report-data'>
                  <div className="report-data-inner">
                    {ReportData.map((report, key)=>{
                            return(
                                <div 
                                    className="report-preview" 
                                    key={key}>
                                    <div className="report-inner">
                                        <div className="report-icon">{report.icon}</div>
                                        <div className="report-text">
                                            <p className="report-name">{report.title}</p>
                                            <p className="report-price">{report.price}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                      })}
                    </div>
                </div>
                <div className="purchases">
                    <div className="purchase-title purchaselist">
                      <p>List</p>
                    </div>
                    <div className="purchases-header">
                      <p>Purchases</p>
                      <p>+Add</p>
                    </div>
                    <div className="purchase-table">
                        {PurchaseData.map((purchase, key)=>{
                            return(
                                <div 
                                    className="purchase-preview" 
                                    key={key}>
                                    <div className="purchase-inner">
                                        <div className="purchase-content">
                                          <table
                                          style={{
                                              width: "100%"
                                              }}>
                                            <tbody>
                                                <tr>
                                                  <td>{purchase.itemname}</td>
                                                  <td className='tableprice'>#{purchase.price}</td>
                                                </tr>
                                            </tbody>
                                          </table> 
                                        
                                        </div>
                                    </div>
                                    
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="chart">
                    <div className="purchase-title">
                      <p>Cash Flow</p>
                    </div>
                      <div className="piechart">
                        <Piechart chartData={userData} option/>
                      </div>
                </div>
              </div>
          </div>
        </div>
     );
}
 
export default Report;