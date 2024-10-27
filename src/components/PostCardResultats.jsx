import React from "react";

const PostCardResultats = ({ equipA, equipB, resultatA, resultatB, date }) => {
    return (
        <div className="p-5 bg-slate-200 text-black  min-w-[66vw] md:min-w-[30vw] md:w[60vw] lg:min-w-[45%] lg:w-[50%] border-slate-300 border rounded-xl snap-start">
            <h2 className="text-base lg:text-xl font-semibold mb-2">
                {equipA}: {resultatA} - {equipB}: {resultatB}
            </h2>
            <p className="text-base">{date}</p>
        </div>
    );
};

export default PostCardResultats;
