import React from 'react';
import './App.css';
import { NavigatorBar } from './components/NavigatorBar';
import img from '../public/PatitoSinFondo.png';
import { Bubbles } from './components/Bubbles';
import { ServiceCard } from './components/ServiceCard';
import { Carousel } from './components/Carousel';
import { IconFooter } from './components/IconFooter';
import { InputCustom } from './components/InputCustom';

export const App = () => {
  return (
    <>
      {/* SRC of Background (HTML + CSS): https://codepen.io/diyorbek0309/pen/mdwbEve */}
      <NavigatorBar />

      <section id='home'>
        <Bubbles />
        <div id='contenedor1' className='contenedor-info'>
          <div className='info-del-contenedor text-center'>
            <h1 className='tituloI'>El sitio oficial de <b>Patit{"{ }"} S{"{ }"}ftware</b> <br /> ¡Donde los sueños se programan en la realidad!</h1>
            <br />
            <p>¡Somos una empresa en muy reciente nacimiento dedicada al desarrollo de software, donde nuestro objetivo es hacer que tus aplicaciones web, móvil o de pc se
              conviertan en realidad! Conformado por 4 integrantes, por el momento, apasionados por el área de la programación y profesionales en lo que hacen.</p>
          </div>
          <img className='imgPatito' src={img} alt="" />
        </div>
      </section>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>

      <section id='servicios'>
        <Bubbles />
        <div id='contenedor2' className='contenedor-info'>
          <ServiceCard title={"App Para Escritorio (PC)"}
            info={"Creación de aplicaciones para ordenadores, ya sea un portátil o de escritorio. Desde el estilo hasta la funcionalidad según tus gustos" +
              " y necesidades."}
            carac={["Diseño a elegir, totalmente customizable.", "Aplicación apta para todos los sistemas operativos.", "Funcionalidades según lo solicitado.",
              "Primer mantenimiento gratuito.", "Atención a sus consultas y dudas las 24hs.", "Asesoría gratuita para obtener un producto de mayor calidad."]} />
          <ServiceCard title={"Sitio Web Responsivo"}
            info={"Creación de aplicaciones web o sitios web, ajustado a la necesidad del cliente. Con diseño y funcionalidades según tus gustos y necesidades."}
            carac={["Diseño a elegir, totalmente customizable.", "Aplicación apta para todos los dispositivos, desde celulares hasta monitores 4K.", "Funcionalidades según lo solicitado.",
              "Primer mantenimiento gratuito.", "Atención a sus consultas y dudas las 24hs.", "Asesoría gratuita para obtener un producto de mayor calidad."]} />
          <ServiceCard title={"App Para Móvil (Android)"}
            info={"Creación de aplicaciones para dispositivos android, comodas y funcionales adecuandose a tus necesidades, tanto visuales como funcionales. Utilizando toda la " +
              "potencia que ofrecen los dispositivos android."}
            carac={["Diseño a elegir, totalmente customizable.", "Funcionalidades según lo solicitado.", "Primer mantenimiento gratuito.", "Atención a sus consultas y dudas las 24hs.",
              "Asesoría gratuita para obtener un producto de mayor calidad."]}
          />
          <ServiceCard title={"Gestión de BBDD"}
            info={"Creación de Base de Datos Relacionales como No Relacionales, buscando una optimización ideal logrando obtener la información de una velocidad rápida para lograr " +
              "una respuesta del servidor excelente."}
            carac={["Cubrir la gran mayoría de áreas posibles organizandola en entidades.", "Cardinalidad según lo indicado o necesitado.",
              "Buscar el mejor rendimiento posible.", "Los 3 primeros mantenimientos gratuitos.",
              "Atención a sus consultas y dudas las 24hs.", "Asesoría gratuita para obtener un producto de mayor calidad."]} />
          <ServiceCard title={"Creación de Logo"}
            info={"Incluido gratuitamente en todos los productos mencionados anteriormente excepto gestión de BBDD. Se puede pedir aparte, esta opción hace que el logo se intente " +
              "realizar de la mejor forma posible incluyendo la realización del mismo en vectores para una animación futura."}
            carac={["Logo customizable.", "Mejor calidad al demandarlo como producto aparte.", "El logo puede ser a creación de una inspiración/imagen suya o, si lo prefiere, a" +
              " criterio nuestro."]} />
        </div>
      </section>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>

      <section id='projectos'>
        <Bubbles />
        <div className='contenedor-info'>
          <Carousel />
        </div>
      </section>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
      
      <section id='sobre-nosotros'>
        <Bubbles />
        <div id='contenedor4' className='contenedor-info'>
          <h2>¿Por qué nosotros?</h2>
          <p>Si bien somos un start up, eso no significa que no tengamos un personal capactidado y excelente para los trabajos.
            <br /><br />
            Bien, compartimos lo mismo que tantas empresas... Brindar un servicio. Pero nuestro servicio no es con el fin de solo satisfacer sus necesidades, sino que nuestro
            objetivo además es que tanto el cliente como los usuarios del producto puedan disfrutar y considerar fácil y entretenida la tecnología como el producto como tal.
            Donde un mundo que se modifica constantemente y que genera una incertidumbre gigante tenga gente como la nuestra para ayudar a comprenderlo mejor...
            Para que el día de mañana sea USTED el que pueda explicar y hacer disfrutar a otra persona la tecnología y su máximo potencial. Eso es lo que nos diferencia del resto,
            el querer compartir un conocimiento maravilloso con el mundo para poder sacar el máximo potencial a la tecnología, acompañandolo en todo momento.
          </p>
          <br /><br /><br />
          <div>
            <h2>¿Te gustaría trabajar con nosotros?</h2>
            <p>En un mundo que sufre cambios drasticamente cada día nos complacerá incorporar más gente en nuestro equipo. Un equipo que es más una familia que un lugar de trabajo
              común y corriente. Si te gustaría unirtenos ve a contactanos y envía tu curriculum. ¡Encantado te responderemos ;)!
            </p>
          </div>
        </div>
      </section>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

      <section id='contactanos'>
        <Bubbles />
        <form className="contenedor-info" action='https://formsubmit.co/patitosoftware@gmail.com' method='POST'>
          <h2>¡Pongamonos en contacto!</h2><br /><br />
          <InputCustom textLabel={"Tu nombre:"} tipoDato={"text"} textoPlace={"Escribe aqui tu nombre..."} nombreDato={"Nombre"} />
          <InputCustom textLabel={"Un email para ponernos en contacto contigo:"} tipoDato={"email"} textoPlace={"Escribe aqui un email..."} nombreDato={"Email"} />
          <InputCustom textLabel={"Motivo:"} tipoDato={"text"} textoPlace={"Escribe el motivo..."} nombreDato={"Motivo"} />
          <label>Consulta:</label>
          <textarea name="Detalles de la consulta" cols="30" rows="10" placeholder='¡Detallanos tu consulta!'></textarea>
          <br />
          <button type="submit">Enviar mensaje</button>
          <p>O si prefieres escribirnos desde tu mail preferido contactanos en: <b>patitosoftware@gmail.com</b></p>
        </form>
      </section>

      <footer>
        <div>
          <p>¡Siguenos en nuestras redes o ponte en contacto con nosotros!:</p>
          <br />
          <IconFooter img={"bi-instagram"} vinculo={""} />
          <IconFooter img={"bi-tiktok"} vinculo={""} />
          <IconFooter img={"bi-envelope"} vinculo={""} />
        </div>
        <h4>© Derechos reservados a Patito Software - 2024</h4>
      </footer>
    </>
  )
};