import React from "react";
import PostCardResultats from "./PostCardResultats";

const FeedResultats = (props) => {
    const {results} = props;
    return(
        <div className=" flex flex-row m-auto flex-wrap gap-10 mt-10 mb-10">
            {results.map((resultItem, index) => {
                return ( <PostCardResultats key={index} equipA={resultItem.local ? resultItem.equip : resultItem.opponent} equipB={resultItem.local ? resultItem.opponent : resultItem.equip} resultatA={resultItem.local ? resultItem.scoreEquip : resultItem.scoreOpponent} resultatB={resultItem.local ? resultItem.scoreOpponent : resultItem.scoreEquip} date={resultItem.date} />)
            })}
        </div>
    )
}


export default FeedResultats;