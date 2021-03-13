import React, {useEffect, useState} from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import PostMaker from "./PostMaker";
import Post from "./Post";
import database from "./firebase";

function Feed() {
    const [posts, setPosts] = useState([]); // Initally no post

    // Ran only once
    useEffect(() => {
        // Get real-time snapshot of state from database
        database.collection("posts")
            .orderBy("timestamp", "desc") // Order posts by their timestamp in descending order
            .onSnapshot((snapshot) => 
                 // Map through every single doc and return an object with the doc.id and the doc.data() --> The fields in the document
                setPosts(
                    snapshot.docs.map((doc) => ({
                        id: doc.id, 
                        data: doc.data()
                    }))
                )
            );
    }, []);

    return(
        <div className="feed">
            {/* Story Reel */}
            <StoryReel />

            {/* Post Maker */}
            <PostMaker />
            
            {/* All the post on your feed is below: */}
            {/* Get each post and create it */}
            {posts.map((post) => (
                <Post
                    key={post.id}   // Unique identifier for post

                    // When we made our mapping, we placed data within the "data" for each post
                    profilePicture={post.data.profilePicture}
                    image={post.data.image}
                    username={post.data.username}
                    timestamp={post.data.timestamp} // Note: timestamp in our database was a timestamp object (not a string)
                    message={post.data.message}
                />
            ))}
            
        </div>
    );
}

export default Feed;