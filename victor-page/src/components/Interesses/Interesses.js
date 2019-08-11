import React, { Component } from "react";

export class Interesses extends Component {
  render() {
    return (
      <section
        class="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div class="w-100">
          <h2 class="mb-5">Interesses</h2>
          <p>
            Além de ser um desenvolvedor, gosto de aproveitar o tempo livre. O
            basquete aos finais de semana não pode faltar e durante a semana
            costumo treinar Taekwondo e andar com meu cachorro pra dar aquela
            esticada. Em tempos de chuva, o xadrez e o e-sports ganham espaço
            nos meus dias, garantindo que nunca pare de me exercitar.
          </p>
          <p class="mb-0">
            Em casa, aprimorar sempre o conhecimento é o principal objetivo. Amo
            estudar e estou sempre a procura de ficar atualizado sobre as
            últimas tecnologias e ferramentas no mercado.
          </p>
        </div>
      </section>
    );
  }
}

export default Interesses;
