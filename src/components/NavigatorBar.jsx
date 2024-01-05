import React from "react";
import '../stylesheet/NavigatorBar.css';
import { Icon } from "./Icon";

export const NavigatorBar = () => {
    return (
        <nav>
            <Icon className="iconos" vinculo={"home"} img={"bi-house"} desc={"Inicio"} />
            <Icon className="iconos" vinculo={"servicios"} img={"bi-person-workspace"} desc={"Servicios"} />
            <Icon className="iconos" vinculo={"projectos"} img={"bi-boxes"} desc={"Projectos"} />
            <Icon className="iconos" vinculo={"sobre-nosotros"} img={"bi-person-vcard-fill"} desc={"Sobre nosotros"} />
            <Icon className="iconos" vinculo={"contactanos"} img={"bi-envelope-plus"} desc={"¡Contactanos!"} />
        </nav>
    );
};