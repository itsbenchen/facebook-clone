import React from "react";
import "./Story.css"
import { Avatar } from "@material-ui/core";

function Story({ image, profileSource, title}) {
    return (
        <div style={{ backgroundImage: `url(${image})` }} className="story">
            {/* in-line style used for background image */}
            <Avatar className="story_avatar" variant="circular" src={profileSource}/>
            <h4>{title}</h4>

        </div>
    );
}

export default Story;
