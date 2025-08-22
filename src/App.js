import Header from "./Header";
import Section from "./Section";
import ProjectCard from "./ProjectCard";
import Skills from "./Skills";

function App() {
  const projects = [
    {
      id: 1,
      title: "Big Trail Bmw ",
      description: " Moto da bmw.",
      image: "/img/images.png",
      tech: ["React", "CSS"],
    },
    {
      id: 2,
      title: "App de Receitas",
      description: "Aplicativo para salvar e buscar receitas.",
      image: "/img/images (1).png",
      tech: ["React", "PWA"],
    },
    {
      id: 3,
      title: "Seleção Francesa",
      description: "Formação da Seleção Francesa 2018.",
      image: "/img/anotabahia-selecao-francesa-alcanca-a-marca-de-1-milhao-de-seguidores-no-tiktok-01.png",
      tech: ["Storybook", "CSS"],
    },
  ];

  return (
    <div>
      <Header />
      <main>
        <Section id="sobre" title="Sobre">
          <p>
            Olá! Eu sou um desenvolvedor apaixonado por Motos e Esportes e este é o meu
            portfólio criado em React.
          </p>
        </Section>

        <Section id="projetos" title="Projetos">
          <div className="projects-grid">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </Section>

        <Skills />
      </main>
    </div>
  );
}

export default App;
