import React from "react";
import '../stylesheet/ServiceCard.css';

export const ServiceCard = ({title, info, carac}) => {

    let lista;

    if(carac){
        lista = carac.map(item => <li className="card-text">{item}</li>);
    }

    const moverAContactar = () => {
        window.location.href = "#contactanos";
    }

    return (
        <div className="card">
            <span className="reflejo"></span>
            <div className="card-body">
                <h4 className="card-title"><b>{title}</b></h4>
                <hr />
                <p className="card-text">{info}</p>
                <ul>
                    {lista}
                </ul>
                <hr />
                <button type="button" className="btn btn-primary btn-contactar" onClick={moverAContactar}>¡CONTACTANOS!</button>
            </div>
            <span className="reflejo2"></span>
        </div>
    );
}