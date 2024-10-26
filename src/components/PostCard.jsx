import React from "react";

const PostCard = ({ title, content}) => {

    return (
        <div className=" p-5 bg-slate-50 border rounded-xl">
            <h2 className=" text-lg font-semibold mb-2 hover:text-redAlert"><a href={`/noticies/${title.toLowerCase().split(" ").join("-")}`}>{title}</a></h2>
            <p className=" text-base">{content}</p>
        </div>
    )
}

export default PostCard;