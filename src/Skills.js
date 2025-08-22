import "./index.css";

function Skills() {
  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "CSS", level: 80 },
    { name: "Node.js", level: 70 },
    { name: "Python", level: 65 },
  ];

  return (
    <section id="habilidades" className="fade-blur" style={{ padding: "40px 20px" }}>
      <h2>Habilidades</h2>
      <div className="skills">
        {skills.map((s) => (
          <div key={s.name} className="skill">
            <span>{s.name}</span>
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: `${s.level}%` }}>
                {s.level}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
