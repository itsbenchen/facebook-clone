import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

function Sidebar() {
    return(
        <div className="sidebar">
            {/* User profile */}
            <SidebarOption source="https://i.pinimg.com/originals/c8/bd/a9/c8bda99ff35a1aca879a77d8dfb84dd2.jpg" title="Ben Chen" />

            <SidebarOption Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>

            <SidebarOption Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarOption Icon={PeopleIcon} title="Friends"/>
            <SidebarOption Icon={ChatIcon} title="Messenger"/>
            <SidebarOption Icon={StorefrontIcon} title="Marketplace"/>
            <SidebarOption Icon={VideoLibraryIcon} title="Videos"/>

            <SidebarOption Icon={ExpandMoreOutlinedIcon} title="See More"/>

        </div>
    );
}

export default Sidebar;