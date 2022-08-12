import { MenuData } from "./MenuData";

const Menu = () => {
    return ( 
        <div className="menu">
            <div className="content-title">
                <p>Menu</p>
            </div>
            <div className="menu-content">
                 {MenuData.map((menu, key)=>{
                    return(
                        <div 
                            className="menu-preview"
                            key ={key}
                        >
                            <div className="menus">
                                <p className="menu-name">{menu.title}</p>
                                <img src={menu.image} />
                            </div>
                        </div>
                    )
                 })}   
            </div>
        </div>
     );
};
 
export default Menu;