import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
    return(
        <div className="storyReel">
            {/* Hardcoded Story Reels; TODO: Allow user to create "stories"? */}
            <Story
                image="https://observer.com/wp-content/uploads/sites/2/2020/03/GettyImages-1185360127-e1583272010470.jpg?quality=80" 
                profileSource="http://www.gstatic.com/tv/thumb/persons/589228/589228_v9_ba.jpg"
                title="Mark Zuckerberg"
            />
            <Story 
                image="https://i.guim.co.uk/img/media/86e65f68adda7dd2db1533c018c7eddca854d609/0_224_5454_3274/master/5454.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=2ce39a175e47d8eeae00775c2cd25fef" 
                profileSource="https://deadline.com/wp-content/uploads/2018/02/bill-gates-2.jpg?w=792"
                title="Bill Gates"
            />
            <Story 
                image="https://cdn.i-scmp.com/sites/default/files/styles/og_twitter_scmp_review/public/d8/images/methode/2020/10/29/9ae7fa98-1902-11eb-8f67-a484f6db61a1_image_hires_022408.jpeg?itok=ihp1VJQT&v=1603909455" 
                profileSource="https://static.wikia.nocookie.net/leagueoflegends/images/7/7b/League_of_Legends_Cover.jpg/revision/latest?cb=20191018222445"
                title="League of Legends"
            />
            <Story 
                image="https://blog.twitch.tv/assets/uploads/0411fc7a272959b0703a68096d25dcaa.png" 
                profileSource="https://cdn.vox-cdn.com/thumbor/V63sqCsGbhOsOVTzcy0h0uHFK3I=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19226051/acastro_190923_twitch_0001.0.jpg"
                title="Twitch News"
            />
            <Story 
                image="https://i.pinimg.com/originals/73/33/33/733333bd820b9df1a622a43a5275f7f7.jpg" 
                profileSource="https://i.pinimg.com/originals/c8/bd/a9/c8bda99ff35a1aca879a77d8dfb84dd2.jpg"
                title="Jade Lieu"
            />

            <Story 
                image="https://www.anime-planet.com/images/anime/covers/naruto-shippuden-1131.jpg" 
                profileSource="https://i.pinimg.com/736x/9a/b6/a2/9ab6a2794d0ed343a4c5d489f5d9828d.jpg"
                title="Naruto Uzumaki"
            />

        </div>
    );
}

export default StoryReel;