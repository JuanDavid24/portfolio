import { skillsData } from "../data/skills";

export function Skills() {
  const skillList = skillsData.map(({ name, logo }, index) => (
    <li key={name} className="w-24">
      <SkillCard
        skillName={name}
        skillLogo={logo}
        animationDelay={`${index * 0.05}s`}
      />
    </li>
  ));
  return (
    <section id="skills" className="skills scroll-mt-20">
      <h2 className=" mb-6 text-center text-2xl font-[silkscreen] font-bold text-shadow-pink-600 text-shadow-sm">Habilidades</h2>
      <ul className="flex flex-wrap justify-center gap-2 mx-auto w-11/12">
        {skillList}
      </ul>
    </section>
  );
}

export function SkillCard({ skillName, skillLogo, animationDelay }) {
  return (
    <div
      className="flex flex-col items-center p-3 bg-teal-400/10 bg-opacity-70 rounded-2xl text-xl font-[VT323]
        hover:scale-110 duration-300 animate-slide-in-bottom animate-duration-slow group"
      style={{ animationDelay }}
    >
      <img
        className="w-12 h-12 opacity-100 group-hover:brightness-100 group-hover:saturate-100 brightness-75 saturate-75 transition delay-150 duration-300"
        src={skillLogo}
        alt={skillName}
      />
      <div className="skill-name">{skillName}</div>
    </div>
  );
}
