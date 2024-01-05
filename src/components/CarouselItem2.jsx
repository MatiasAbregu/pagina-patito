import React from "react";

export const CarouselItem2 = ({img, children}) => {
    return (
        <>
            <img src={img} alt="" />
            <p>{children}</p>
        </>
    );
};