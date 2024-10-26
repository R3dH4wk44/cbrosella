import React from "react";
import PostCard from "./PostCard";

const FeedNoticias = (props) => {
    const {news} = props;
    return(
        <div className=" flex flex-row m-auto flex-wrap gap-10 mt-10 mb-10              ">
            {news.map((newsItem, index) => {
                return ( <PostCard key={index} title={newsItem.title} content={newsItem.content} />)
            })}
        </div>
    )
}


export default FeedNoticias;