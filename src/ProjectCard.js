import "./index.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-img-wrap">
        <img src={project.image} alt={project.title} className="project-img" />
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tags">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
