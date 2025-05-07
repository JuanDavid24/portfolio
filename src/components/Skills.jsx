import { skillsData } from "../data/skills"

export function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="text-2xl mb-6">Habilidades</h2>
      <ul className="flex justify-center mx-auto">
        {skillsData.map(({ name, logo }) => (
          <li className="w-24">
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