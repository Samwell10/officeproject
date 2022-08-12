import "../App.css";
import { SidebarDetails } from "./SidebarDetails";
import logo from '../images/logo.svg'
const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <div className="logo-con">
                <img src={logo} className="logo" alt="logo" />
            </div>
            <div className="links">
                <nav>
                    {SidebarDetails.map((val, key)=>{
                        return(
                            <li
                                key={key}
                                className="link-path"
                                id ={window.location.pathname == val.link ? "active" : ""}
                                onClick = {()=>{window.location.pathname = val.link}}>
                                <div className="sideicon">
                                    <div className="sideicon-inner">
                                        {val.icon}
                                    </div>
                                </div>
                                <div className="address-name">{val.title}</div>
                            </li>
                        )
                    })}
                    </nav>
            </div>
           
            
        </div>
    );
}
 
export default Sidebar;