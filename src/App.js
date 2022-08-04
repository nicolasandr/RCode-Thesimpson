import React from "react";
import Frase from "./components/Frase";
import "bootstrap/dist/css/bootstrap.min.css";
import thesimpsons from "../src/img/theSimpson.png";
import "../src/App.css";
import { Button } from "react-bootstrap";
const App = () => {
  return (
    <div className="bg-fondo-web">
      <div className="container py-5 text-center">
        <img
          src={thesimpsons}
          className="width-img-portada"
          alt="thesimpsons"
        />
      </div>

      <div className="text-center pb-10">
        <Button className="btn btn-color">
          <p className="my-0 text-btn-style">Obtener frase</p>
        </Button>
      </div>

      <Frase></Frase>
    </div>
  );
};

export default App;
