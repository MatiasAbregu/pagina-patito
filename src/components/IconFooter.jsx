import React from "react";
import '../stylesheet/IconFooter.css'

export const IconFooter = ({ vinculo, img}) => {
    return (
        <a target="_blank" href={vinculo} className="icono-footer">
            <i className={"bi " + img}></i>
        </a>
    );
};