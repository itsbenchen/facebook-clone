import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import NearMeIcon from "@material-ui/icons/NearMe";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

function Post({ profilePicture, image, username, timestamp, message }) {
    return (
        <div className="post">
            {/* Post top: Avatar, name, and time of post */}
            <div className="post_top">

                <Avatar className="post_avatar" src={profilePicture} />

                <div className="post_topInfo">
                    <h3>{username}</h3>
                    <p>{timestamp}...</p>
                </div>

            </div>

            {/* Post bottom: message area */}
            <div className="post_bottom">
                <p>{message}</p>
            </div>

            {/* Post image */}
            <div className="post_image">
                <img src={image} alt="" />
            </div>

            {/* Post options: Likes, Comment, Share, etc... */}
            <div className="post_options">
                <div className="post_option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>

                <div className="post_option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>

                <div className="post_option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>

                <div className="post_option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlinedIcon />
                </div>
            </div>
        </div>
    );
}

export default Post;
