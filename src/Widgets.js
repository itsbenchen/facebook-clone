import React from "react";
import "./Widgets.css";

function Widgets() {
    return (
        <div className="widgets">
            {/* Page Plugin from Facebook */}
            <iframe
                title="Coding Page" 
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCodingIsFun&tabs=timeline&width=360&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                width="360" 
                height="800" 
                scrolling="no" 
                frameborder="0" 
                allowfullscreen="true" 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>

            <iframe 
                title="Naruto Page"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnarutoofficialsns&tabs=timeline&width=360&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                width="360" 
                height="800" 
                scrolling="no"
                frameborder="0" 
                allowfullscreen="true" 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
        </div>
    );
}

export default Widgets;
