import Employee from "./Employee";
import Menu from "./Menu";
import Order from "./Order";
import Report from "./Report";
import Transaction from "./Transaction";
const Content = () => {
    return ( 
        <div className="content">
             <p className="title">Welcome back, Katy's Kitchen</p>
             <div className="grid-container">
                 <Menu/>
                 <Order/>
                 <Employee/>
                 <Report/> 
             </div>
             <Transaction/>
        </div>
     );
}
 
export default Content;