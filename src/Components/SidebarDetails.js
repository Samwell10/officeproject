import React from "react";
import HouseIcon from '@mui/icons-material/House';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import BarChartIcon from '@mui/icons-material/BarChart';
import TuneIcon from '@mui/icons-material/Tune';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
    export const SidebarDetails = [
        {
            title:"Resturant",
            icon:<HouseIcon/>,
            link:"/officeproject"
        },
        {
            title:"Menu",
            icon:<MenuBookRoundedIcon/>,
            link:"/Pages/Menu/Menupage"
        },
        {
            title:"Order",
            icon:<LocalOfferRoundedIcon/>,
            link:"./Pages/Orders/Orderpage"
        },
        {
            title:"Report",
            icon:<BarChartIcon/>,
            link:"/Pages/Report/Report.js"
        },
        {
            title:"Transaction",
            icon:<TuneIcon/>,
            link:"/Pages/Transactions/Transactionpage"
        },
        {
            title:"Employee",
            icon:<PermIdentityIcon/>,
            link:"/Pages/Employee/Employeepage"
        }
    ]
 
