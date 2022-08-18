import { SidebarDetails } from "../../Components/SidebarDetails";
import{Link} from 'react-router-dom'
import Employee from "./Employee";
import Menu from "./Menu";
import Order from "./Order";
import Report from "./Report";
import Transaction from "./Transaction";
const Content = () => {
    return ( 
        <div className="content">
             <p className="title">Welcome back, Katy's Kitchen</p>
             <p className="subtitle">Bestsellers</p>
             <div className="grid-container">
                 <Menu/>
                 <div className="links-2">
                    <nav>
                        {SidebarDetails.map((val, key)=>{
                            return(
                                <li
                                    key={key}
                                    className="link-path2"
                                    id ={window.location.pathname == val.link ? "active" : ""}
                                    onClick = {()=>{window.location.pathname = val.link}}>
                                    <Link to={val.link}>
                                        <div className="sideicon2">
                                            <div className="sideicon-inner2">
                                                {val.icon}
                                            </div>
                                        </div>
                                        <div className="address-name2">{val.title}</div>
                                    </Link>
                                </li>
                            )
                        })}
                    
                    </nav>
                </div>
                 <Order/>
                 <Employee/>
                 <Report/> 
             </div>
             <Transaction/>
        </div>
     );
}
 
export default Content;