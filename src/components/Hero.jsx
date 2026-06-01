import { HERO } from '../data/portfolio'
import { useTyping } from '../hooks/useTyping'

export default function Hero() {
  const role = useTyping(HERO.roles)

  return (
    <section className="hero" id="home">
      <div className="hero__bg">
        <div className="hero__grid" />
        <div className="hero__blob hero__blob--1" />
        <div className="hero__blob hero__blob--2" />
      </div>

      <div className="hero__container container">
        {/* Content */}
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Open to opportunities
          </div>

          <h1 className="hero__name">
            Jithendra<br />
            <span className="hero__name-grad">Bonam</span>
          </h1>

          <div className="hero__roles">
            <span className="hero__role">{role}</span>
            <span className="hero__cursor">|</span>
          </div>

          <p className="hero__desc">
            Building agentic AI systems, backend pipelines, and automation at scale.
            3 AI products + 5 automation systems — all live in Production with zero rollbacks.
          </p>

          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary">
              View Work <i className="uil uil-arrow-right" />
            </a>
            <a href="/assets/JithendraBonam.pdf" className="btn btn--ghost" download>
              Resume <i className="uil uil-download-alt" />
            </a>
          </div>

          <div className="hero__socials">
            {HERO.socials.map(s => (
              <a key={s.href} href={s.href} target="_blank" rel="noreferrer"
                className="hero__social" aria-label={s.label}>
                <i className={`uil ${s.icon}`} />
              </a>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="hero__visual">
          <div className="hero__img-wrap">
            <div className="hero__ring hero__ring--1" />
            <div className="hero__ring hero__ring--2" />
            <img
              src="/assets/img/profile.jpg"
              alt="Jithendra Bonam"
              className="hero__img"
              onError={e => { e.target.onerror = null; e.target.src = '/assets/img/student.jpg' }}
            />
          </div>

          <div className="hero__stats">
            {HERO.stats.map(s => (
              <div key={s.label} className="hero__stat">
                <span className="hero__stat-num">{s.num}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll">
        <span>scroll</span>
        <i className="uil uil-angle-double-down" />
      </a>
    </section>
  )
}
