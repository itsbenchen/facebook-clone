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

import { useStateValue } from "./StateProvider";

function Sidebar() {

    const [{ user }, dispatch] = useStateValue();

    return(
        <div className="sidebar">
            {/* User profile */}
            <SidebarOption source={user.photoURL} title={user.displayName} />

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