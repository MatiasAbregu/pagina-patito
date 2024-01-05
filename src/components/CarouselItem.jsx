import React from "react";

export const CarouselItem = ({video, children}) => {
    return (
        <>
            <video src={video} controls></video>
            <p>{children}</p>
        </>
    );
};