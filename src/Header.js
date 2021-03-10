import React from "react";
import "./Header.css";

function Header() {
    return (
        <div class="header">
            {/* Left Header */}
            <div class="header_left">

                {/* Facebook logo */}
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
                    alt=""
                />
                
            </div>
            {/* Middle Header */}
            <div class="header_middle">
                
            </div>
            {/* Right Header */}
            <div class="header_right">
                
            </div>
        </div>
    );
}

export default Header;