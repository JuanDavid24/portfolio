import { skillsData } from "../data/skills"

export function Skills() {
  return (
    <section className="skills">
      <h2>Habilidades</h2>
      <ul>
        {skillsData.map(({ name, logo }) => (
          <li>
            <SkillCard skillName={name} skillLogo={logo} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export function SkillCard({ skillName, skillLogo }) {
  return (
    <div className="skill-card">
      <img src={skillLogo} alt={skillName} />
      <div className="skill-name">{skillName}</div>
    </div>
  )
}