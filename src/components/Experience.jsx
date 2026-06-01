import { EXPERIENCE } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">02 — Experience</span>
          <h2 className="section__title">Work History</h2>
        </div>
        <div className="timeline">
          {EXPERIENCE.map((item, i) => (
            <TimelineItem key={item.role} item={item} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ item, delay }) {
  const ref = useReveal(delay)
  return (
    <div className="timeline__item reveal" ref={ref}>
      <div className="timeline__dot" />
      <div className="timeline__card glass">
        <div className="timeline__meta">
          <div>
            <h3>{item.role}</h3>
            {item.link
              ? <a href={item.link} target="_blank" rel="noreferrer" className="timeline__company">{item.company}</a>
              : <span className="timeline__company">{item.company}</span>
            }
          </div>
          <span className="timeline__date">{item.date}</span>
        </div>
        <p>{item.desc}</p>
        <div className="tag-row">
          {item.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
    </div>
  )
}
