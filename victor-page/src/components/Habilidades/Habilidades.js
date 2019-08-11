import React, { Component } from "react";

export class Habilidades extends Component {
  render() {
    return (
      <section
        class="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div class="w-100">
          <h2 class="mb-5">Habilidades</h2>

          <div class="subheading mb-3">Linguagens & Ferramentas</div>
          <ul class="list-inline dev-icons">
            <li class="list-inline-item">
              <i class="fab fa-html5" />
            </li>
            <li class="list-inline-item">
              <i class="fab fa-css3-alt" />
            </li>
            <li class="list-inline-item">
              <i class="fab fa-js-square" />
            </li>
            <li class="list-inline-item">
              <i class="fab fa-react" />
            </li>
            <li class="list-inline-item">
              <i class="fab fa-node-js" />
            </li>
            <li class="list-inline-item">
              <i class="fab fa-php" />
            </li>
            <li class="list-inline-item">
              <i class="fab fa-yarn" />
            </li>
            <li class="list-inline-item">
              <i class="fab fa-java" />
            </li>
            <li class="list-inline-item">
              <i class="fab fa-git" />
            </li>

            <li class="list-inline-item">
              <i class="fab fa-npm" />
            </li>
          </ul>

          <div class="subheading mb-3">Workflow</div>
          <ul class="fa-ul mb-0">
            <li>
              <i class="fa-li fa fa-check" />
              UX/UI
            </li>
            <li>
              <i class="fa-li fa fa-check" />
              MVC
            </li>

            <li>
              <i class="fa-li fa fa-check" />
              Desenvolvimento ágil &amp; Scrum
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Habilidades;
