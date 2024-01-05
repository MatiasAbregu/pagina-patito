import React from "react";
import '../stylesheet/Icon.css';

export const Icon = ({ vinculo, img, desc }) => {
    return (
        <a href={"#" + vinculo} className="contenedor-nav">
            <i className={"bi " + img}></i>
            <p className="letra-i">{desc}</p>
        </a>
    );
};