import React from "react";
import "./SidebarOption.css";

import { Avatar } from "@material-ui/core";

function SidebarOption({ source, Icon, title }) {
    return(
        <div className="sidebarOption"> 
            {/* If source is with component, then display avatar with source */}
            {source && <Avatar src={source} variant="circular"/>} 
            {/* If Icon is with component, then display the Icon */}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    );
}

export default SidebarOption;