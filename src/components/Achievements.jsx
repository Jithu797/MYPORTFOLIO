import { ACHIEVEMENTS } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'

export default function Achievements() {
  return (
    <section className="achievements section" id="achievements">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">05 — Recognition</span>
          <h2 className="section__title">Achievements</h2>
        </div>
        <div className="ach__grid">
          {ACHIEVEMENTS.map((a, i) => (
            <AchCard key={a.title + i} item={a} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AchCard({ item, delay }) {
  const ref = useReveal(delay)
  return (
    <div className="ach-card glass reveal" ref={ref}>
      <div className="ach-card__icon">
        <i className={`uil ${item.icon}`} />
      </div>
      <div>
        <h4>{item.title}</h4>
        <p>{item.desc}</p>
      </div>
    </div>
  )
}
