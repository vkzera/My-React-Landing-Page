import React, { Component } from "react";

export class Formacao extends Component {
  render() {
    return (
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Formação</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">
                Instituto Federal de Educação, Ciência e Tecnologia de São Paulo
                - IFSP
              </h3>
              <div className="subheading mb-3">Técnologo</div>
              <div>Análise e desenvolvimento de sistemas</div>
              {/* <p>GPA: 3.23</p> */}
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Janeiro 2015 - Junho 2018</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Escola SENAI "Antônio Adolpho Lobbe"</h3>
              <div className="subheading mb-3">Técnico</div>
              <div>Técnico em mecatrônica</div>
              {/* <p>GPA: 3.56</p> */}
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Janeiro 2013 - Dezembro 2014</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Escola SENAI "Antônio Adolpho Lobbe"</h3>
              <div className="subheading mb-3">Aprendizagem Industrial</div>
              <div>Mecânico de usinagem</div>
              {/* <p>GPA: 3.56</p> */}
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Janeiro 2011 - Dezembro 2012</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Formacao;
