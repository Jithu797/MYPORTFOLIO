import { PROJECTS } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">04 — Projects</span>
          <h2 className="section__title">Work Showcase</h2>
        </div>
        <div className="projects__grid">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, delay }) {
  const ref = useReveal(delay)
  return (
    <div
      className={`proj-card glass reveal${project.featured ? ' featured' : ''}`}
      ref={ref}
    >
      <div className="proj-card__top">
        <span className={`proj-badge proj-badge--${project.badgeClass}`}>{project.badge}</span>
        {project.link && (
          <a href={project.link} target="_blank" rel="noreferrer" className="proj-link" aria-label="GitHub">
            <i className="uil uil-github-alt" />
          </a>
        )}
      </div>
      <h3 className="proj-card__title">{project.title}</h3>
      <p className="proj-card__desc">{project.desc}</p>
      <div className="tag-row">
        {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
    </div>
  )
}
