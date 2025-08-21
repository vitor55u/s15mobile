import Header from "./Header";
import Section from "./Section";
import ProjectCard from "./ProjectCard";
import SkillsChart from "./SkillsChart"; // Importe o novo componente

function App() {
  const projects = [
    {
      id: 1,
      title: "Landing Page Animada",
      description: "Página moderna com transições suaves.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "CSS"],
    },
    {
      id: 2,
      title: "App de Receitas",
      description: "Aplicativo para salvar e buscar receitas.",
      image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "PWA"],
    },
    {
      id: 3,
      title: "UI Kit Azul",
      description: "Coleção de componentes reutilizáveis.",
      image: "/img/743-800x450.jpg",
      tech: ["Storybook", "CSS"],
    },
  ];

  return (
    <div>
      <Header />
      <main>
        <Section id="sobre" title="Sobre">
          <p>
            Olá! Meu nome é Ev. Este é meu portfólio criado em React.
          </p>
          <p>
            Minhas paixões: Tecnologia e Inovação.
          </p>
        </Section>

        <Section id="projetos" title="Projetos">
          <div className="projects-grid">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </Section>
        
        {/* Nova seção de Habilidades com o gráfico */}
        <Section id="habilidades" title="Habilidades">
          <p>Minhas principais competências e paixões no mundo da tecnologia:</p>
          <SkillsChart /> {/* O componente do gráfico é renderizado aqui */}
        </Section>
        
        <Section id="contato" title="Contato">
          <p>Você pode me encontrar no GitHub, LinkedIn ou por email.</p>
          <p>
            <a href="https://github.com/seunome" target="_blank" rel="noopener noreferrer">GitHub</a> | 
            <a href="mailto:seunome@email.com">Email</a>
          </p>
        </Section>
      </main>
    </div>
  );
}

export default App;
