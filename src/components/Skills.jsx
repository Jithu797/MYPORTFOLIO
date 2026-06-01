import { SKILLS } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">03 — Skills</span>
          <h2 className="section__title">Technical Stack</h2>
        </div>
        <div className="skills__grid">
          {SKILLS.map((cat, i) => (
            <SkillCard key={cat.title} cat={cat} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCard({ cat, delay }) {
  const ref = useReveal(delay)
  return (
    <div className="skill-cat glass reveal" ref={ref}>
      <div className="skill-cat__head">
        <i className={`uil ${cat.icon}`} />
        <h3>{cat.title}</h3>
      </div>
      <div className="tag-row">
        {cat.tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
    </div>
  )
}
