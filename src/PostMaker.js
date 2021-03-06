import React, {useState} from "react";
import "./PostMaker.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

import { useStateValue } from "./StateProvider";
import database from "./firebase";

import firebase from "firebase"; // Import from actual firebase

function PostMaker() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [imageURL, setImageURL] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the page from refreshing
        if (input) { // If there is input
            // TODO: Database Work
            
            database.collection("posts")
                .add(   // Add post to database
                    {
                        message: input,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),  // Get time from server rather than user
                        profilePicture: user.photoURL,
                        username: user.displayName,
                        image: imageURL
                    }
                )

            // Reset values
            setInput("");
            setImageURL("");
        }
    };

    return (
        <div className="postMaker">
            {/* PostMaker Top */}
            <div className="postMaker_top">
                {/* Profile Avatar */}
                <Avatar variant="circular" src={user.photoURL} />

                {/* Input content & Image URL */}
                <form>
                    <input 
                        className="postMaker_input" 
                        type="text" 
                        placeholder={`What's on your mind, ${user.displayName}?`} 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <input 
                        placeholder="Image URL (Optional)"
                        value={imageURL}
                        onChange={(e) => setImageURL(e.target.value)}
                    />

                    <button className="postMaker_submitButton" onClick={handleSubmit} type="submit">
                        Post
                    </button>
                </form>
                
            </div>

            {/* PostMaker Bottom*/}
            <div className="postMaker_bottom">
                <div className="postMaker_option">
                    {/* In-line css used */}
                    <VideocamIcon style={{color: "red"}} />
                    <h3>Live Video</h3>
                </div>

                <div className="postMaker_option">
                    {/* In-line css used */}
                    <PhotoLibraryIcon style={{color: "green"}} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="postMaker_option">
                    {/* In-line css used */}
                    <InsertEmoticonIcon style={{color: "orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>
                
            </div>
            
        </div>
    );
}

export default PostMaker;
