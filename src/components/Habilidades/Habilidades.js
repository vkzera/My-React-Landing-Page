import React, { Component } from "react";

export class Habilidades extends Component {
  render() {
    return (
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Habilidades</h2>

          <div className="subheading mb-3">Linguagens & Ferramentas</div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-php" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-yarn" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-java" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-git" />
            </li>

            <li className="list-inline-item">
              <i className="fab fa-npm" />
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check" />
              UX/UI
            </li>
            <li>
              <i className="fa-li fa fa-check" />
              MVC
            </li>

            <li>
              <i className="fa-li fa fa-check" />
              Desenvolvimento ágil &amp; Scrum
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Habilidades;
