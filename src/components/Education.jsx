import { EDUCATION } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'

export default function Education() {
  return (
    <section className="education section" id="education">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">06 — Education</span>
          <h2 className="section__title">Academic Journey</h2>
        </div>
        <div className="edu__grid">
          {EDUCATION.map((e, i) => (
            <EduCard key={e.degree} edu={e} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  )
}

function EduCard({ edu, delay }) {
  const ref = useReveal(delay)
  return (
    <div className="edu-card glass reveal" ref={ref}>
      <span className="edu-card__year">{edu.year}</span>
      <div>
        <h3>{edu.degree}</h3>
        <p>{edu.inst}</p>
        <span className="edu-card__cgpa">{edu.cgpa}</span>
      </div>
    </div>
  )
}
