import React from "react";
import '../stylesheet/IconFooter.css'

export const IconFooter = ({ vinculo, img}) => {
    return (
        <a href={vinculo} className="icono-footer">
            <i className={"bi " + img}></i>
        </a>
    );
};