import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
const Topbar = () => {
    return ( 
        <div className="topbar">
            <div className = "searchbar-container">
                    <div className="searchbar">
                            <div className="searchicon">
                                <SearchIcon/>
                            </div>
                            <form>
                                <input 
                                    type ="text"
                                    className="search"
                                    placeholder = "Search"
                                />
                            </form>      
                     </div>
            </div> 
            <div className="notificationSide">
                <div className="bell">
                    <div className="bellicon">
                        <NotificationsNoneOutlinedIcon/>
                    </div>
                    <div className="bellnumber">
                        <p>1</p>
                    </div>
                </div>
                <div className="help">
                    <HelpOutlineOutlinedIcon/>
                </div>
                <div className="dropbox">
                    <p>Katy's Kitchen</p>
                    <div className="dropicon">
                        <ExpandMoreOutlinedIcon/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Topbar;