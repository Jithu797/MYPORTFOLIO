import { ABOUT } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'

export default function About() {
  const textRef = useReveal()

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">01 — About</span>
          <h2 className="section__title">Who I Am</h2>
        </div>

        <div className="about__grid">
          <div className="about__text reveal" ref={textRef}>
            <p>
              A motivated <strong>AI Engineer &amp; Backend Developer</strong> with hands-on experience
              building agentic AI systems, backend pipelines, and automation tools in Production.
              Skilled in Python, Django, ASP.NET Core, DSPy, and prompt engineering.
            </p>
            <p>
              Currently pursuing <strong>M.Tech in CSE</strong> at Vishnu Institute of Technology
              while working full-time at NxtWave. Published 2 research papers, filed 1 patent,
              and rated <strong>4.7/5</strong> with 100% achievement across all KRAs.
            </p>
            <ul className="about__highlights">
              {ABOUT.highlights.map(h => (
                <li key={h}>
                  <i className="uil uil-check-circle" />
                  {h}
                </li>
              ))}
            </ul>
            <a href="/assets/JithendraBonam.pdf" download className="btn btn--primary">
              Download CV <i className="uil uil-download-alt" />
            </a>
          </div>

          <div className="about__cards">
            {ABOUT.cards.map((c, i) => (
              <AboutCard key={c.title} card={c} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutCard({ card, delay }) {
  const ref = useReveal(delay)
  return (
    <div className="about__card glass reveal" ref={ref}>
      <i className={`uil ${card.icon}`} />
      <h4>{card.title}</h4>
      <p>{card.sub.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}</p>
    </div>
  )
}
