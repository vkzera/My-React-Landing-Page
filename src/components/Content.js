import React, { Component } from "react";
import Sobre from "./Sobre";
import Experiencia from "./Experiencia";
import Formacao from "./Formacao";
import Habilidades from "./Habilidades";
import Interesses from "./Interesses";
import Conquistas from "./Conquistas";

class Content extends Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <Sobre />

        <hr className="m-0" />

        <Experiencia />
        <hr className="m-0" />

        <Formacao />

        <hr className="m-0" />

        <Habilidades />

        <hr className="m-0" />

        <Interesses />

        <hr className="m-0" />

        <Conquistas />
      </div>
    );
  }
}

export default Content;
