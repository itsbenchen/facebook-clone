import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import PostMaker from "./PostMaker";
import Post from "./Post";

function Feed() {
    return(
        <div className="feed">
            {/* Story Reel */}
            <StoryReel />
            {/* Post Maker */}
            <PostMaker />
            {/* All the post on your feed */}
            <Post 
                profilePicture="https://i.pinimg.com/originals/c8/bd/a9/c8bda99ff35a1aca879a77d8dfb84dd2.jpg"
                image=""
                username="Ben Chen"
                timestamp="1/1/2021"
                message="Hello There!"
            />
            <Post 
                profilePicture="https://i.pinimg.com/originals/c8/bd/a9/c8bda99ff35a1aca879a77d8dfb84dd2.jpg"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                username="Ben Chen"
                timestamp="2/28/2021"
                message="Bye!"
            />
                
            <Post 
                profilePicture="https://i.pinimg.com/originals/c8/bd/a9/c8bda99ff35a1aca879a77d8dfb84dd2.jpg"
                image="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                username="Ben Chen"
                timestamp="3/1/2021"
                message="I'm one with the force, the force is with me"
            />
        </div>
    );
}

export default Feed;