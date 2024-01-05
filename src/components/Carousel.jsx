import React from "react";
import VideoTuruWan from "../Videos/VideoTuruWan.mp4";
import PA from "../Videos/ProyectoArandu.png";
import PA2 from "../Videos/ProyectoArand2.png";
import '../stylesheet/Carousel.css';
import { CarouselItem } from "./CarouselItem";
import { CarouselItem2 } from "./CarouselItem2";

export const Carousel = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner text-center">
                <div className="carousel-item active">
                    <CarouselItem video={VideoTuruWan}>
                        Este proyecto fue realizado en el lenguaje Java, el objetivo del producto era permitirle al cliente gestionar todo su stock de productos. En realidad, contiene muchas más funcionalidades. Ejemplo, una interfaz para cobrar e imprimir tickets, otro apartado donde le permitia gestionar usuarios, otro apartado donde gestiona los productos y otra en donde gestionaba los clientes y sus fiados. Su opinión fue muy satisfactoria pero como todo proyecto tuvimos varios incovenientes pero gracias al cliente y a nuestra perspicacia logramos hacer un gran producto del cual quedo muy satisfecho.
                    </CarouselItem>
                </div>
                <div className="carousel-item">
                    <CarouselItem2 img={PA}>
                        Este es un proyecto que a día de hoy (6/12/2023) estamos elaborando, pero se puede ver que es una página web donde el objetivo es mostrar todas las noticias que el cliente desee crear, la página se encarga del resto. Un proyecto que está enlazado con el siguiente que es una aplicación de android de educación financiera y gestión financiera.
                    </CarouselItem2>
                </div>
                <div className="carousel-item">
                    <CarouselItem2 img={PA2}>
                        Continuación del proyecto anterior, este es una aplicación para android la cual permitirá a todos sus usuarios gestionar sus finanzas de forma eficaz y constante en el tiempo, a través de un uso fácil e intuitivo que el usuario dispondra dentro de la aplicación.
                    </CarouselItem2>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}