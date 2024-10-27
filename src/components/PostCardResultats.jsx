import React from "react";

const PostCardResultats = ({ equipA, equipB, resultatA, resultatB, date}) => {

    return (
        <div className=" p-5 bg-slate-200 text-black border-slate-300 border rounded-xl">
            <h2 className=" text-lg font-semibold mb-2">{equipA}: {resultatA} - {equipB}: {resultatB}</h2>
            <p className=" text-base">{date}</p>
        </div>
    )
}

export default PostCardResultats;