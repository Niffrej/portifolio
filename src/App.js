import React from 'react';
import './App.css';
import profilePic from './assets/profile.png';
import eventosPic from './assets/eventos.png';
import portifolioPic from './assets/portifolioPic.png';
import desafioPic from './assets/desafio.png';
import ecommercePic from './assets/default.png';

function App() {
  // Array de projetos
  const projects = [
    {
      title: "Delfino Eventos",
      imgSrc: eventosPic,
      demoLink: "https://delfino-eventos.vercel.app/",
      codeLink: "https://github.com/Niffrej/Delfino-eventos"
    },
    {
      title: "Portifolio",
      imgSrc: portifolioPic, // Substitua pela URL da imagem do projeto
      demoLink: "https://example.com/demo2",
      codeLink: "https://github.com/usuario/projeto2"
    },
    {
      title: "Desafio Landing Page",
      imgSrc: desafioPic, // Substitua pela URL da imagem do projeto
      demoLink: "https://niffrej.github.io/desafio-Landing-Page/",
      codeLink: "https://github.com/Niffrej/desafio-Landing-Page"
    },
    {
      title: "E-commerce",
      imgSrc: ecommercePic, // Substitua pela URL da imagem do projeto
      demoLink: "https://github.com/Niffrej/simple-ecommerce",
      codeLink: "https://github.com/Niffrej/simple-ecommerce"
    },
  ];

  return (
    <div className="App">
      <section className="intro">
        <div className="container">
          <img src={profilePic} alt="Jefferson Franco" className="profile-pic" />
          <h1>Olá, eu sou o Jefferson Franco!</h1>
          <p>Desenvolvedor Java Back-end apaixonado por construir sistemas robustos e escaláveis, atualmente explorando o desenvolvimento em ReactJS.</p>
          <p>Busco oportunidades na área de Testes de Software, trazendo uma vasta experiência no desenvolvimento de aplicações empresariais e um entendimento profundo das práticas de garantia de qualidade de software.</p>
          <p>Possuo conhecimento sólido em tecnologias como Java, Spring Boot, SQL Server, Splunk, AWS Web Services e Arquitetura Hexagonal, além de experiência adicional em tecnologias front-end, como Angular e TypeScript.</p>
        </div>
      </section>

      <section className="skills">
        <div className="container">
          <h2>Skills</h2>
          <div className="icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MONGODB" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="NPM" />
          </div>
        </div>
      </section>

      <section className="projects">
        <div className="container">
          <h2>Meus Projetos</h2>
          <div className="project-container">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <img src={project.imgSrc} alt={project.title} className="project-thumbnail" />
                <h3>{project.title}</h3>
                <div className="project-buttons">
                  <a href={project.demoLink} className="btn" target="_blank" rel="noopener noreferrer">Visitar Página</a>
                  <a href={project.codeLink} className="btn" target="_blank" rel="noopener noreferrer">Ver Código</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact">
        <h1>Contatos</h1>
        <div className="contato-section">
          <a href="https://github.com/Niffrej?tab=repositories" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="contato-icon" />
          </a>
          <a href="https://www.linkedin.com/in/jerffesonfrancoo/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="contato-icon" />
          </a>
          <a href="mailto:jerffesonfranco@gmail.com">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Email" className="contato-icon" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
