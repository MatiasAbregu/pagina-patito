import React from "react";

export const InputCustom = ({textLabel, nombreDato, tipoDato, textoPlace}) => {
    return (
        <>
            <label>{textLabel}:</label>
            <input type={tipoDato} placeholder={textoPlace} name={nombreDato} />
            <br />
        </>
    );
}