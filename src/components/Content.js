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
      <div class="container-fluid p-0">
        <Sobre />

        <hr class="m-0" />

        <Experiencia />
        <hr class="m-0" />

        <Formacao />

        <hr class="m-0" />

        <Habilidades />

        <hr class="m-0" />

        <Interesses />

        <hr class="m-0" />

        <Conquistas />
      </div>
    );
  }
}

export default Content;
