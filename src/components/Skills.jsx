import { skillsData } from "../data/skills"

export function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="text-2xl mb-6">Habilidades</h2>
      <ul className="flex flex-wrap justify-center gap-2 mx-auto w-11/12">
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
    <div className="flex flex-col items-center p-3 bg-teal-400/10 bg-opacity-70 rounded-2xl hover:scale-110 transition duration-300">
      <img className="w-12 h-12 opacity-100 hover:saturate-100 saturate-25 transition delay-150 duration-300" src={skillLogo} alt={skillName} />
      <div className="skill-name">{skillName}</div>
    </div>
  )
}