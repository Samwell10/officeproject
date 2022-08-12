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
            link:"/"
        },
        {
            title:"Menu",
            icon:<MenuBookRoundedIcon/>,
            link:"/Menu"
        },
        {
            title:"Order",
            icon:<LocalOfferRoundedIcon/>,
            link:"/Order"
        },
        {
            title:"Report",
            icon:<BarChartIcon/>,
            link:"/Report"
        },
        {
            title:"Transaction",
            icon:<TuneIcon/>,
            link:"/Transaction"
        },
        {
            title:"Employee",
            icon:<PermIdentityIcon/>,
            link:"/Employee"
        }
    ]
 
