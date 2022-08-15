import "../App.css";
import { SidebarDetails } from "./SidebarDetails";
import logo from '../images/logo.svg';
import {Link} from 'react-router-dom'
const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <div className="logo-con">
                <img src={logo} className="logo" alt="logo" />
            </div>
            <div className="links">
                <nav>
                    {/* {SidebarDetails.map((val, key)=>{
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
                    })} */}
                    <Link to="/">
                        <div className="sideicon">
                            {/* <div className="sideicon-inner">
                                {val.icon}
                            </div> */}
                        </div>
                        <div className="address-name">Resturant</div>
                    </Link>
                    <Link to="/Pages/Menu/Menupage">
                        <div className="sideicon">
                            {/* <div className="sideicon-inner">
                                {val.icon}
                            </div> */}
                        </div>
                        <div className="address-name">Resturant</div>
                    </Link>
                    <Link to="/Pages/Orders/Orderpage">
                        <div className="sideicon">
                            {/* <div className="sideicon-inner">
                                {val.icon}
                            </div> */}
                        </div>
                        <div className="address-name">Resturant</div>
                    </Link>
                    <a href="/Pages/Report/Report">
                        <div className="sideicon">
                            {/* <div className="sideicon-inner">
                                {val.icon}
                            </div> */}
                        </div>
                        <div className="address-name">Resturant</div>
                    </a>
                    <Link to="/Pages/Transactions/Transactionpage">
                        <div className="sideicon">
                            {/* <div className="sideicon-inner">
                                {val.icon}
                            </div> */}
                        </div>
                        <div className="address-name">Resturant</div>
                    </Link>
                    <Link to="/Pages/Employee/Employeepage">
                        <div className="sideicon">
                            {/* <div className="sideicon-inner">
                                {val.icon}
                            </div> */}
                        </div>
                        <div className="address-name">Resturant</div>
                    </Link>
                    </nav>
            </div>
           
            
        </div>
    );
}
 
export default Sidebar;