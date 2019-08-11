import React from "react";

function Experiencia() {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex justify-content-center"
      id="experience"
    >
      <div className="w-100">
        <h2 className="mb-5">Experiência</h2>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">Desenvolvedor de Aplicativos</h3>
            <div className="subheading mb-3">
              Cantaloop Comunicação (Cantacom)
            </div>
            <p>
              O desenvolvimento mobile não se trata apenas da transformação de
              um layout em códigos, é necessário ter noção e procurar conhecer
              sempre o seu usuário final aprimorando cada vez a experiência do mesmo.
              Para que isso seja possível, sempre é bom o conhecimento de outras
              linguagens e diversas áreas de mercado. Ter um bom domínio no
              planejamento e execução do projeto é essencial para garantir a
              integridade do projeto do início ao fim.
            </p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">Janeiro 2018 - Atual</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
          <div className="resume-content">
            <h3 className="mb-0">Desenvolvedor Web Jr.</h3>
            <div className="subheading mb-3">Codetek</div>
            <p>
              O controle de tarefas e websites é um ponto chave em todas as
              áreas, por isso o desenvolvimento de sistemas se torna crucial
              para o gerenciamento de aplicações.
            </p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">Setembro 2017 - Dezembro 2017</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiencia;
