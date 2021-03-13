import React from "react";
import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";

import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

import {Avatar, IconButton} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { useStateValue } from "./StateProvider";

function Header() {
    const [{ user }] = useStateValue();

    return (
        <div className="header">

            {/* Left Header */}
            <div className="header_left">
                {/* Facebook logo */}
                <img
                    className="facebook_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
                    alt=""
                />
                {/* Search Input */}
                <div className="header_input">
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook" />
                </div>
            </div>

            {/* Center Header */}
            <div className="header_center">
                <button className="header_option" autoFocus>
                    <HomeIcon fontSize="large" />
                </button>

                <button className="header_option">
                    <SubscriptionsIcon fontSize="large" />
                </button>

                <button className="header_option">
                    <StorefrontIcon fontSize="large" color="action" />
                </button>

                <button className="header_option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </button>

                <button className="header_option">
                    <SportsEsportsIcon  fontSize="large" />
                </button>

            </div>
            
            {/* Right Header */}
            <div className="header_right">
                {/* Avatar/Profile */}
                <div className="header_info">
                    {/* Display user photo and name */}
                    <Avatar src={user.photoURL} /> 
                    <h4>{user.displayName}</h4>
                </div>
                
                {/* Create */}
                <IconButton>
                    <AddIcon />
                </IconButton>

                {/* Messenger */}
                <IconButton>
                    <ForumIcon />
                </IconButton>

                {/* Notifications */}
                <IconButton>
                    <NotificationActiveIcon />
                </IconButton>

                {/* Account Stuff */}
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>

            </div>
        </div>
    );
}

export default Header;