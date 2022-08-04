import React from "react";
import Card from "react-bootstrap/Card";
import homero from "../img/Homer_Simpson.webp";
import "../components/frase.css";
const Frase = () => {
  return (
    <div className="contenedor py-5">
      <article className="bg-fondo rounded">
        <div className="row py-3 ">
          <div className="col-12 col-md-4 text-center">
            <Card.Img className="w-100" src={homero} />
          </div>
          <div className="col-12 col-md-8 ">
            <article className="container">
              <h2 className="py-2 text-style">Homer Simpson</h2>
              <p className="pl-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                nisi illo ea doloremque nulla asperiores odit omnis neque
                recusandae laudantium.
              </p>
            </article>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Frase;
