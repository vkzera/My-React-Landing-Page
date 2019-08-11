import React from "react";

function Sobre() {
  return (
    <section
      class="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="about"
    >
      <div class="w-100">
        <h1 class="mb-0">
          Victor
          <span class="text-primary">Almeida</span>
        </h1>
        <div class="subheading mb-5">
          Rua Passeio dos Ipês, 350 ·Parque Faber Castell I, CEP 13561-385 ·
          (16) 99415-9734 ·
          <a href="mailto:victooralmeida1@gmail.com">
            victooralmeida1@gmail.com
          </a>
        </div>
        <p class="lead mb-5">
          2 anos de experiência na área de desenvolvimento de aplicativos
          mobile, utilizando o framework React Native. Vivência em
          desenvolvimento de api's com PHP/MySQL e NodeJS/MongoDB, gerenciamento
          de projetos utilizando metodologia ágil SCRUM.
        </p>
        <div class="social-icons">
          <a href="https://www.linkedin.com/in/victoralmeidadev/">
            <i class="fab fa-linkedin-in" />
          </a>
          <a href="https://github.com/vkzera">
            <i class="fab fa-github" />
          </a>
          <a href="https://gitlab.com/vkzera">
            <i class="fab fa-gitlab" />
          </a>
          <a href="https://www.facebook.com/victoralmeidavk">
            <i class="fab fa-facebook-f" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
