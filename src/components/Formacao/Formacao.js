import React, { Component } from "react";

export class Formacao extends Component {
  render() {
    return (
      <section
        class="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div class="w-100">
          <h2 class="mb-5">Formação</h2>

          <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="resume-content">
              <h3 class="mb-0">
                Instituto Federal de Educação, Ciência e Tecnologia de São Paulo
                - IFSP
              </h3>
              <div class="subheading mb-3">Técnologo</div>
              <div>Análise e desenvolvimento de sistemas</div>
              {/* <p>GPA: 3.23</p> */}
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">August 2006 - May 2010</span>
            </div>
          </div>
          <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="resume-content">
              <h3 class="mb-0">Escola SENAI "Antônio Adolpho Lobbe"</h3>
              <div class="subheading mb-3">Técnico</div>
              <div>Técnico em mecatrônica</div>
              {/* <p>GPA: 3.56</p> */}
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">Janeiro 2013 - Dezembro 2014</span>
            </div>
          </div>
          <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="resume-content">
              <h3 class="mb-0">Escola SENAI "Antônio Adolpho Lobbe"</h3>
              <div class="subheading mb-3">Aprendizarem Industrial</div>
              <div>Mecânico de usinagem</div>
              {/* <p>GPA: 3.56</p> */}
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">Janeiro 2011 - Dezembro 2012</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Formacao;
